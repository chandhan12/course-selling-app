const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ msg: "Token is missing" });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if (user) {
            req.userId = user.id; 
            next();
        }
    } catch (error) {
        return res.status(403).json({ msg: "Invalid token" });
    }
};

module.exports = {
    verifyToken
};
