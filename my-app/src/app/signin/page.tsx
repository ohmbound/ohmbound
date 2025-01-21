"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Password validation rules
  const isMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password); // Regex for at least one digit
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Regex for at least one symbol
  const isPasswordValid = isMinLength && hasNumber && hasSymbol; // Validates the first 3 requirements
  const passwordsMatch = isPasswordValid && password === confirmPassword; // Check if passwords match after other requirements are met

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validation for Register
    if (!isLogin && !isPasswordValid) {
      setMessage("Password does not meet the requirements!");
      return;
    }
  
    if (!isLogin && !passwordsMatch) {
      setMessage("Passwords do not match!");
      return;
    }
  
    const url = isLogin ? "/api/auth/login" : "/api/auth/register";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong!");
      }
  
      setMessage(data.message || "Success!");
  
      if (isLogin) {
        // Redirect immediately for login
        router.push("/dashboard");
      } else {
        // Show success message, then redirect after 4 seconds
        setMessage("Registration successful!");
        setTimeout(() => {
          router.push(`/?message=${encodeURIComponent("Registration successful!")}`);
        }, 4000); // 4-second delay
      }
    } catch (error: any) {
      console.error("Error during fetch:", error);
      setMessage(error.message || "An error occurred.");
    }
  };
  
  

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "40px" }}>
      {/* Slider Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setIsLogin(true)}
          style={{
            flex: 1,
            padding: "10px 20px",
            backgroundColor: isLogin ? "#0070f3" : "#f0f0f0",
            color: isLogin ? "white" : "#0070f3",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          style={{
            flex: 1,
            padding: "10px 20px",
            backgroundColor: !isLogin ? "#0070f3" : "#f0f0f0",
            color: !isLogin ? "white" : "#0070f3",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>

      {/* Dynamic Form Section */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "1rem",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: !isLogin ? "0.5rem" : "1rem",
            }}
            required
          />
          {/* Show Confirm Password field for Register */}
          {!isLogin && (
            <>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  fontSize: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  marginBottom: "1rem",
                }}
                required
              />
            </>
          )}
        </div>

        {/* Password Validation Checkmarks */}
        {!isLogin && (
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              <span style={{ color: isMinLength ? "green" : "red" }}>✔</span>{" "}
              Minimum 8 characters
            </p>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              <span style={{ color: hasNumber ? "green" : "red" }}>✔</span>{" "}
              Includes at least one number
            </p>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              <span style={{ color: hasSymbol ? "green" : "red" }}>✔</span>{" "}
              Includes at least one symbol
            </p>
            {isPasswordValid && (
              <p style={{ margin: 0, fontSize: "0.9rem" }}>
                <span style={{ color: passwordsMatch ? "green" : "red" }}>✔</span>{" "}
                Passwords match
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.5rem 1rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      {/* Message Section */}
      {message && (
        <p style={{ marginTop: "1rem", color: message.includes("Success") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AuthPage;
