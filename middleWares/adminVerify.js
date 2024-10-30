const jwt = require("jsonwebtoken");

const adminVerify = (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ msg: "Token is missing" });
    }

    try {
        const admin = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
        if (admin) {
            req.adminId = admin.id; 
            next();
        }
    } catch (error) {
        return res.status(403).json({ msg: "Invalid token" });
    }
};

module.exports = {
    adminVerify
};
