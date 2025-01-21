import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("ohmbound0"); // Replace with your database name

    // Find the user in the database
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the hashed password with the user's password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, // Use your secret from .env.local
      { expiresIn: "1h" } // Token valid for 1 hour
    );

    return res.status(200).json({
      message: "Login successful!",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}