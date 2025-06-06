import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "No user found" });
    }
    req.user = user;
    return next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default secureRoute;
