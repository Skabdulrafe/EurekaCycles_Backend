import jwt from "jsonwebtoken";

export let GenerateToken = (email) => {
  let token = jwt.sign({ email }, process.env.SECRETKEY);
  return token;
};
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
    console.log(err);
  }
};

export default authenticateToken;
