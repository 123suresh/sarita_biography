import React, { useState, useRef, useEffect } from "react";

function AboutMe() {
  const [isMuted, setIsMuted] = useState(true); // State to track if the video is muted
  const videoRef = useRef(null); // Reference to the video element
  const audioRef = useRef(null); // Reference to the audio element

  const toggleMute = () => {
    // Toggle mute
    setIsMuted((prevState) => !prevState);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    // Ensure the video volume is always set to 50%
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []); // Run this once when the component mounts

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh", // Ensure the page takes at least the full height of the viewport
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Video as background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // Place the video at the background layer
          animation: "fadeIn 2s ease-in-out", // Fade-in animation for the video
        }}
      >
        <video
          ref={videoRef} // Reference for volume control
          src="/clip/demo1.mp4"
          type="video/mp4"
          autoPlay
          muted={isMuted} // Control the muted state based on the state variable
          loop
          style={{
            objectFit: "cover", // Cover the screen while maintaining aspect ratio
            width: "100%",
            height: "100%",
          }}
          onClick={toggleMute} // Toggle mute on video click
        />
      </div>

      {/* Content Section - Fully to the right and fills height */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "35%", // Desktop width
          height: "100vh", // Fill the entire height of the viewport
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertically center content
          alignItems: "center", // Center horizontally
          background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
          borderRadius: "10px",
          zIndex: 1, // Make sure content is above the video
          animation: "slideInFromRight 1.5s ease-out", // Slide-in animation for the content
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color: "#CDBFA7",
            marginBottom: "20px",
            textAlign: "center",
            animation: "fadeInText 2s ease-out", // Fade-in animation for the text
          }}
        >
          About Me
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "40px",
            color: "#fff",
            padding: "0 20px",
            textAlign: "center", // Center-align the text
            boxShadow: "none", // Remove shadow effect for About Me text
            animation: "fadeInText 2s ease-out 0.5s", // Staggered fade-in for the paragraph
          }}
        >
          For over two decades, I have been shaping stories that connect, inspire, and provoke thought. 
          My journey in Nepal’s television and film industry began with Mukti in 1999, evolving into a 
          career marked by lead roles in iconic productions like Parichaya, celebrated for its record-breaking 
          success. Beyond the screen, I’ve embraced storytelling as a tool for change—whether raising awareness 
          about disabilities in Sita, child abuse in Bhumika, or advocating for anti-corruption in Sapanako Mahal. 
          Each project has been a chance to blend art with purpose, using media to educate and empower. Honored with 
          awards like the Nepal Africa Film Award and the Nepal Film Development Board Honor, I continue to seek roles and 
          projects that challenge perspectives and leave lasting impacts. For me, storytelling is more than 
          entertainment—it’s a bridge to empathy, understanding, and change. Welcome to a world where art finds purpose, 
          and stories leave their mark.
        </p>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="/path-to-your-audio.mp3" type="audio/mp3" />
      </audio>

      {/* CSS Animations and Mobile Styles */}
      <style>
        {`
          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInText {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            div[style*="width: 35%"] {
              width: 90%; /* Adjust the right-side content to take most of the screen */
              height: auto; /* Allow height to adjust based on content */
              top: 50%; /* Vertically center */
              transform: translateY(-50%);
              padding: 15px;
              border-radius: 5px;
            }

            h1 {
              font-size: 36px; /* Smaller font size for header */
            }

            p {
              font-size: 18px; /* Smaller font size for paragraph */
              padding: 0 10px;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 28px; /* Further reduce font size for smaller screens */
            }

            p {
              font-size: 16px;
              line-height: 1.5; /* Adjust line spacing */
            }
          }
        `}
      </style>
    </div>
  );
}

export default AboutMe;