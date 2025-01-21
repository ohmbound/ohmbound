"use client";

import React, { useState } from "react";

const FeedbackPage = () => {
  const [subject, setSubject] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMessage("");
    setIsSubmitting(true);

    if (!subject || !userEmail || !message) {
      setFeedbackMessage("All fields are required.");
      setIsSuccess(false);
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      setFeedbackMessage("Please enter a valid email address.");
      setIsSuccess(false);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, userEmail, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send feedback.");
      }

      setSubject("");
      setUserEmail("");
      setMessage("");
      setFeedbackMessage("Feedback sent successfully!");
      setIsSuccess(true);
    } catch (error: unknown) {
      console.error("Error sending feedback:", error);
      
      if (error instanceof Error) {
        setFeedbackMessage(error.message || "An error occurred.");
      } else {
        setFeedbackMessage("An unknown error occurred.");
      }
      
      setIsSuccess(false);
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Send Us Your Feedback</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
            color: "#000",
          }}
          required
        />
        <input
          type="email"
          placeholder="Your Email Address"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
            color: "#000"
          }}
          required
        />
        <textarea
          placeholder="Questions? Comments? Concerns?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
            color: "#000"
          }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
      {feedbackMessage && (
        <p
          style={{
            marginTop: "15px",
            color: isSuccess ? "green" : "red",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

export default FeedbackPage;
