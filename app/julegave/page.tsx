"use client";
import React from "react";

export default function BlogPage() {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
        <div
          style={{
            backgroundImage: "url('/foss.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            width: "100%",
          }}
        ></div>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", margin: "20px 0" }}>Island tur</h1>
          <p style={{ fontSize: "1rem", color: "#666" }}>Tenker en langhelg</p>
          <p style={{ fontSize: "1rem", color: "#666" }}>**Kan byttes mot noe annet ved samtykke</p>
        </div>
      </div>
    );
  }