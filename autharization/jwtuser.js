import jwt from "jsonwebtoken";

// Token Generation
export const GenerateToken = (email) => {
  const token = jwt.sign({ email }, process.env.SECRETKEY); 
  return token;
};

// Middleware for Authentication
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extracting the token from "Bearer <token>"
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded; // Attaching the decoded user info to the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
    //res.status(401).json(err);
    console.log(err);
  }
};

export default authenticateToken;
