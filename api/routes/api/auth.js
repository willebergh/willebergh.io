const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User modal
const User = require("../../models/user");

// @route   POST api/auth/login
// @desc    Auth user
// @access  Public
router.post("/login", (req, res) => {
    () => console.log("Someone is trying to login!");
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ msg: "No empty fields" });

    User.findOne({ username })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "User not found" });

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(401).json({ msg: "Wrong username or password" });

                    jwt.sign(
                        { id: user._id },
                        config.get("jwtSecret"),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({ username, token });
                        }
                    )
                })
        })
})

// @route   GET api/auth/me
// @desc    Get user data
// @access  Private
router.get("/me", auth, (req, res) => {
    User.findById(req.user.id)
        .select("-password")
        .then(user => res.json(user));
})

// @route   POST api/auth/register
// @desc    Register new user
// @access  Public
router.post("/register", (req, res) => {
    const { fullName, username, email, password } = req.body;

    // Simple validation
    if (!username || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: "User already exists" });

            const newUser = new User({
                fullName,
                username,
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get("jwtSecret"),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({ username, token });
                                }
                            )
                        });
                })
            })
        })
});

module.exports = router