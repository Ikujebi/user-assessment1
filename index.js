const express = require("express");
const dotenv = require("dotenv");
const { router } = require("./routes/users");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());

app.use("/api/v1/", router);

const port = process.env.PORT || 3000;

app.listen(port , () =>{
    console.log(`server running on port ${port}`);
});