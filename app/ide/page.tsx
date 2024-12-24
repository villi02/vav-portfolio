"use client";
import React from "react";

export default function DualImagePage() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                gap: "20px",
                padding: "20px"
            }}>
                {/* Left column */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        backgroundImage: "url('/foss.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "40vh",
                        width: "100%",
                        marginBottom: "15px"
                    }}></div>
                    <div style={{ textAlign: "center" }}>
                        <a 
                            href="https://bustravel.is/iceland-tours/golden-circle-blue-lagoon-admission-small-group-tour" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button style={{ 
                                fontSize: "1.8rem", 
                                margin: "15px 0",
                                border: "none",
                                background: "none",
                                fontFamily: "inherit",
                                fontWeight: "bold",
                                padding: 0,
                                cursor: "pointer"
                            }}>
                                Tur av Islandsk natur
                            </button>
                        </a>
                        <p style={{ fontSize: "1rem", color: "#666" }}>
                            Det stoppes innom en rekke steder som Þingvellir nasjonalpark, selfoss og geysir.
                        </p>
                    </div>
                </div>

                {/* Right column */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        backgroundImage: "url('/blue_lag.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "40vh",
                        width: "100%",
                        marginBottom: "15px"
                    }}></div>
                    <div style={{ textAlign: "center" }}>
                        <a 
                            href="https://www.bluelagoon.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button style={{ 
                                fontSize: "1.8rem", 
                                margin: "15px 0",
                                border: "none",
                                background: "none",
                                fontFamily: "inherit",
                                fontWeight: "bold",
                                padding: 0,
                                cursor: "pointer"
                            }}>
                                Blue Lagoon
                            </button>
                        </a>
                        <p style={{ fontSize: "1rem", color: "#666" }}>
                            Få på noe ansiktsmasker, jeg kommer til å sprute vann i ansiktet ditt though
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}