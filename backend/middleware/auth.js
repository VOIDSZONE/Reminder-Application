const jwt = require("jsonwebtoken");
// Middleware to authenticate JWT token from a cookie
exports.authenticateJWT = (req, res, next) => {
  const token =
    req.cookies.jwt ||
    req.body.jwt ||
    req.header("Authorsation").replace("Bearer", "");

  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "your-secret-key", (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.status(403).json({ message: "Token is not valid" });
    }

    req.user = user;
    next();
  });
};
