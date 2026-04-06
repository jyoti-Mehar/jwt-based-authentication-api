const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");

    console.log("HEADER:", authHeader); // 👈 DEBUG

    if (!authHeader) {
        return res.status(401).json({ msg: "No token" });
    }

    try {
        const token = authHeader.split(" ")[1]; // 🔥 MOST IMPORTANT

        console.log("TOKEN:", token); // 👈 DEBUG

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(401).json({ msg: "Invalid token" });
    }
};
