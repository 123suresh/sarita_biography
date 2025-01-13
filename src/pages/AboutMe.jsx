import React, { useState, useEffect, useRef } from "react";

function AboutMe() {
  const [isMuted, setIsMuted] = useState(true);  // State to track if the video is muted
  const [fade, setFade] = useState(false);  // State to track the fade effect
  const audioRef = useRef(null);  // Reference to the audio element

  const toggleMute = () => {
    // Toggle mute and fade effect
    setIsMuted(prevState => !prevState);
    setFade(true);  // Trigger fade effect when toggling mute
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        fadeAudioOut();
      } else {
        fadeAudioIn();
      }
    }
  }, [isMuted]);

  const fadeAudioOut = () => {
    let currentVolume = audioRef.current.volume;
    let fadeInterval = setInterval(() => {
      if (currentVolume > 0) {
        currentVolume = Math.max(0, currentVolume - 0.05);  // Fade out step, ensure volume doesn't go below 0
        audioRef.current.volume = currentVolume;
      } else {
        clearInterval(fadeInterval);
        audioRef.current.muted = true;  // Ensure the audio is muted after fading out
      }
    }, 50);  // Change volume every 50ms
  };

  const fadeAudioIn = () => {
    audioRef.current.muted = false;  // Unmute the audio
    let currentVolume = 0;
    let fadeInterval = setInterval(() => {
      if (currentVolume < 1) {
        currentVolume = Math.min(1, currentVolume + 0.05);  // Fade in step, ensure volume doesn't exceed 1
        audioRef.current.volume = currentVolume;
      } else {
        clearInterval(fadeInterval);
      }
    }, 50);  // Change volume every 50ms
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",  // Ensure the page takes at least the full height of the viewport
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
          top: 27,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,  // Place the video at the background layer
        }}
      >
        <video
          src="/clip/demo.mp4"
          type="video/mp4"
          autoPlay
          muted={isMuted}  // Control the muted state based on the state variable
          loop
          volume={0.4}  // Set the volume to 40% by default
          style={{
            objectFit: "cover",  // Cover the screen while maintaining aspect ratio
            width: "100%",
            height: "100%",
          }}
          onClick={toggleMute}  // Toggle mute on video click
        />
      </div>

      {/* Content Section - Fully to the right and fills height */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "35%",  // Take up 35% of the screen width (adjust as needed)
          height: "100vh",  // Fill the entire height of the viewport
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",  // Vertically center content
          alignItems: "center",  // Center horizontally
          background: "rgba(0, 0, 0, 0.5)",  // Semi-transparent background
          borderRadius: "10px",
          zIndex: 1,  // Make sure content is above the video
        }}
      >
        <h1 style={{ fontSize: "50px", color: "#CDBFA7", marginBottom: "20px", textAlign: "center" }}>
          About Me
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "40px",
            color: "#fff",
            padding: "0 20px",
            textAlign: "center",  // Center-align the text
            boxShadow: "none",  // Remove shadow effect for About Me text
          }}
        >
          I am Sarita Lamichhane, an actress, artist, and media personality. With
          over 20 years of experience in the entertainment industry, I have
          passionately dedicated my career to storytelling through acting,
          directing, and producing. Here, you can learn more about my journey,
          accomplishments, and ongoing projects.
        </p>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="/path-to-your-audio.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default AboutMe;