const jwt = require("jsonwebtoken");

exports.authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, "supersecretkey");
    req.user = verified;

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
