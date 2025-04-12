const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => {
  if (!password) return null;

  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.error("Hashing Error:", error.message);
    throw new Error("Failed to hash password");
  }
};

exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
