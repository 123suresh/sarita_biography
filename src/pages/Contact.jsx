import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_enfxjqm", // Replace with your EmailJS service ID
        "template_u0gnfof", // Replace with your EmailJS template ID
        form.current,
        "DSxH9uZC6q-Ul9bpk" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, please try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: "#262528",
        color: "#FBFBF3",
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background:
            "radial-gradient(circle, rgba(160,68,85,0.5) 0%, rgba(77,77,77,0) 80%)",
        }}
      />
      <style>
        {`
          @keyframes moveBackground {
            0% {
              transform: translateX(-20%) translateY(-20%);
            }
            50% {
              transform: translateX(20%) translateY(20%);
            }
            100% {
              transform: translateX(-20%) translateY(-20%);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            textAlign: "left",
            padding: "10px",
            animation: "fadeInUp 1s ease",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#CDBFA7 ",
              marginBottom: "20px",
            }}
          >
            Let's Discuss Your Project!
          </h1>
          <p
            style={{
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            Whether it's a personal project or a collaboration, feel free to
            drop me a message. Let's make something amazing together!
          </p>
          <div>
            <p>
              📧 <strong>saritalamichhanesamu@gmail.com</strong>
            </p>
            <p>
              📞 <strong>380-269-9495</strong>
            </p>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "15px",
              }}
            >
              {/* Social Media Links */}
              {[
                {
                  href: "https://www.facebook.com/sarita.lamichhane.1481",
                  icon: "/icon/fb.png",
                  alt: "Facebook",
                },
                {
                  href: "https://www.instagram.com/sarita.lamichhane.1481",
                  icon: "/icon/ig.png",
                  alt: "Instagram",
                },
                {
                  href: "https://www.tiktok.com/@saritalamichhane5555",
                  icon: "/icon/tk.png",
                  alt: "Tiktok",
                },
                {
                  href: "https://www.imdb.com/user/ur192640391/?ref_=ext_shr_lnk",
                  icon: "/icon/imdb.png",
                  alt: "IMDB",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
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

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            backgroundColor: "#FBFBF3",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            animation: "fadeInUp 1.5s ease",
          }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: "15px",
                border: "2px solid #CDBFA7",
                borderRadius: "5px",
                outline: "none",
                transition: "all 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#A04455")}
              onBlur={(e) => (e.target.style.borderColor = "#CDBFA7")}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: "15px",
                border: "2px solid #CDBFA7",
                borderRadius: "5px",
                outline: "none",
                transition: "all 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#A04455")}
              onBlur={(e) => (e.target.style.borderColor = "#CDBFA7")}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              style={{
                padding: "15px",
                border: "2px solid #CDBFA7",
                borderRadius: "5px",
                outline: "none",
                resize: "none",
                height: "120px",
                transition: "all 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#A04455")}
              onBlur={(e) => (e.target.style.borderColor = "#CDBFA7")}
            />
            <button
              type="submit"
              style={{
                padding: "15px",
                backgroundColor: "#A04455",
                color: "#FBFBF3",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#CDBFA7")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#A04455")
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;