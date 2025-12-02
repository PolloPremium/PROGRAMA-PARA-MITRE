import React from "react";

export function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <img
        src="/logo2.png"
        alt="Home"
        style={{
          width: "80%",
          height: "80%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
