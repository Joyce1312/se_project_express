// Looks for JWT_SECRET in the environment variables
// Sets a fallback value if JWT_SECRET doesn't exist
const { JWT_SECRET = "super-strong-secret" } = process.env;

module.exports = {
  JWT_SECRET,
};
