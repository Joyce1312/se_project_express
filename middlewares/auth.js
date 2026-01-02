const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const verifyToken = (req, res, next) => {
  //Gets the authorization header from the incoming request
  const { authorization } = req.headers;

  //Checking if authorization exists by checking if there is a authorization header
  // or if it does not start with "Bearer"
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Authorization Error" });
  }

  // Gets the token from the authorization header
  const token = authorization.replace("Bearer ", "");
  let payload;

  //Tries to verify the token with the secret key
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(401).send({ message: "Authorization Error" });
  }

  //Adds the user info from the token to the request object
  //Then continues to th next middleware or route handler
  req.user = payload;
  next();
};

module.exports = verifyToken;
