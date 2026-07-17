const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res) =>{
    res.send("JWT Authentication API is running successfully ");
});    
// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(process.env.PORT, () => {
    console.log("Server running on port 5000");
});
