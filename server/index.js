require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const floodRouter = require("./routes/flood");

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/flood", floodRouter);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
