import React from "react";
import Footer from "../assets/Footer"; // Import Footer component

function HomePage() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #f8f4fc, #e8e4f8)", // Subtle gradient
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      {/* Main Section */}
      <main
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        {/* Left Section: Full-Screen Image */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
            maxWidth: "50%",
          }}
        >
          <img
            src="/images/Profile/img_1.png"
            alt="Profile"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Right Section: Greeting and Bio */}
        <div
          style={{
            flex: 1,
            paddingLeft: "20px",
            maxWidth: "50%",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#6b46c1",
              marginBottom: "10px",
            }}
          >
            Namaste!
          </h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            I’m <strong>Sarita Lamichhane</strong>, an Actress, Artist, and Media
            Personality. With over 20 years of experience in the entertainment
            industry, I’ve passionately dedicated my career to storytelling
            through acting, directing, and producing. Explore my portfolio to
            learn more about my work, accolades, and the causes I support.
          </p>
          <a
            href="#portfolio"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#6b46c1",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "transform 0.3s ease, background-color 0.3s ease", // Animation
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#54349e", e.target.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#6b46c1", e.target.style.transform = "scale(1)")
            }
          >
            Explore Portfolio
          </a>

          {/* Let’s Connect Section */}
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                color: "#6b46c1",
                fontWeight: "bold",
                fontFamily: "'Pacifico', cursive", // Cursive Font
              }}
            >
              Let’s Connect
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              {/* Social Media Icons */}
              {[ 
                { href: "https://www.facebook.com/sarita.lamichhane.1481", icon: "/icon/fb.png", alt: "Facebook" },
                { href: "https://www.instagram.com/", icon: "/icon/ig.png", alt: "Instagram" },
                { href: "https://www.tiktok.com/@saritalamichhane5555", icon: "/icon/tk.png", alt: "Tiktok" },
                { href: "https://www.youtube.com/", icon: "/icon/yt.png", alt: "Youtube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transition: "transform 0.3s ease, opacity 0.3s ease", // Animation
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)", e.target.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)", e.target.style.opacity = "1")}
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer /> {/* Footer component included here */}
    </div>
  );
}

export default HomePage;