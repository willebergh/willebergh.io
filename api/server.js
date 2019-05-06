const express = require("express");
const config = require("config");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors(config.get("cors")));

mongoose.connect(config.get("mongoURI"), {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => console.log("MongoDB Connected."))
    .catch(err => console.log(err));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/post", require("./routes/api/post"));


const port = config.get("port") | 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));