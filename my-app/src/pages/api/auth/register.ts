import bcrypt from "bcryptjs";
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

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 12); // 12 = salt rounds

    // Store user in the database
    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword, // Save hashed password
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: "User registered successfully!",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
