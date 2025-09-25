"use client";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "110vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          color: "white",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            animation: "fadeIn 2s ease-out forwards",
          }}
        >
          I MAKE THINGS
        </h1>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.25rem",
            animation: "slideUp 1s ease-out forwards",
          }}
        >
          A Full-Stack Developer 🚀 | Building ideas into reality
        </p>
      </div>

    </div>
  );
}
