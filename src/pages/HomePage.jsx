import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleExploreClick = () => {
    navigate("/detail"); // Navigate to DetailsPage
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#262528",
        fontFamily: "'Poppins', sans-serif",
        color: "#FBFBF3",
        overflow: "hidden",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          position: "relative",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            textAlign: "left",
            maxWidth: "40%",
            opacity: 0,
            animation: "fadeInFromLeft 2s forwards",
          }}
        >
          <p
            style={{
              fontSize: "32px",
              color: "#D4D3D4",
            }}
          >
            Namaste, I'm
          </p>
          <h1
            style={{
              fontSize: "84px",
              fontWeight: "bold",
              color: "#FBFBF3",
              margin: "0",
            }}
          >
            Sarita
          </h1>
          <h1
            style={{
              fontSize: "84px",
              fontWeight: "bold",
              color: "#CDBFA7",
              margin: "0",
            }}
          >
            Lamichhane
          </h1>
          <p
            style={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#D4D3D4",
            }}
          >
            Professional Actress | Artist | Media Personality
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "12px 24px",
              fontSize: "18px",
              backgroundColor: "#CDBFA7",
              color: "#262528",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#B4A187")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#CDBFA7")}
            onClick={handleExploreClick} // Updated click handler
          >
            Explore Portfolio
          </button>
        </div>

        {/* Full Page Image */}
        <img
          src="/images/Profile/img_1.png"
          alt="Sarita Lamichhane"
          style={{
            position: "absolute",
            top: "8%",
            right: "10%",
            maxHeight: "90%",
            maxWidth: "70%",
            objectFit: "cover",
            filter: "grayscale(40%)",
            animation: "zoomIn 3s ease-out",
          }}
        />

        {/* Social Media Icons */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "3%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            opacity: 0,
            animation: "slideInFromRight 1s 0.5s forwards",
          }}
        >
          {[
            { href: "https://www.facebook.com", icon: "/icon/fb.png", alt: "Facebook" },
            { href: "https://www.instagram.com", icon: "/icon/ig.png", alt: "Instagram" },
            { href: "https://www.tiktok.com", icon: "/icon/tk.png", alt: "Tiktok" },
            { href: "https://www.youtube.com", icon: "/icon/yt.png", alt: "Youtube" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
              onMouseEnter={(event) => {
                event.target.style.transform = "scale(1.2)";
                event.target.style.opacity = "0.8";
              }}
              onMouseLeave={(event) => {
                event.target.style.transform = "scale(1)";
                event.target.style.opacity = "1";
              }}
            >
              <img
                src={social.icon}
                alt={social.alt}
                style={{
                  width: "40px",
                  height: "40px",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.filter = "brightness(1.5) saturate(1.2)")}
                onMouseLeave={(e) => (e.target.style.filter = "brightness(1) saturate(1)")}
              />
            </a>
          ))}
        </div>

        {/* Background Texture */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            background: "radial-gradient(circle, rgba(0,0,0,0.15), transparent 70%)",
            zIndex: "-1",
          }}
        />
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes zoomIn {
            from {
              transform: scale(0.8);
            }
            to {
              transform: scale(1);
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
        `}
      </style>
    </div>
  );
};

export default HomePage;
