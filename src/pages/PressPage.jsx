import React, { useState } from "react";

const images = [
  "/images/Gallary/img1.jpeg",
  "/images/Gallary/img2.jpeg",
  "/images/Gallary/img3.jpg",
  "/images/Gallary/img4.jpeg",
  "/images/Gallary/img5.jpeg",
  "/images/Gallary/img6.jpeg",
];

function PressPage() {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open slideshow
  const openSlideshow = (index) => {
    setCurrentImageIndex(index);
    setIsSlideshowOpen(true);
  };

  // Close slideshow
  const closeSlideshow = () => {
    setIsSlideshowOpen(false);
  };

  // Navigate slideshow
  const handleSlideshowNavigation = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    } else if (direction === "right") {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div
      style={{
        padding: "80px 10%",
        color: "#FBFBF3",
        backgroundColor: "#262528",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px",
          textAlign: "center",
          color: "#CDBFA7 ",
          animation: "fadeInDown 1s ease-in-out",
        }}
      >
        News & Articles
      </h1>
      <p
        style={{
          fontSize: "20px",
          marginBottom: "40px",
          textAlign: "center",
          color: "#BFBFBF",
          animation: "fadeInUp 1s ease-in-out",
        }}
      >
        Stay updated with the latest news and stories from around the world.
      </p>

      {/* Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
              position: "relative",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#1C1F2A",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => openSlideshow(index)}
          >
            <img
              src={image}
              alt={`News ${index + 1}`}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "18px", margin: "0" }}>Article Title</h3>
              <p style={{ fontSize: "14px", margin: "5px 0 0" }}>Brief Description</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slideshow Popup */}
      {isSlideshowOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeSlideshow} // Close on background click
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking the button
              closeSlideshow();
            }}
            style={{
              position: "absolute",
              top: "30px",
              right: "20px",
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>

          {/* Image */}
          <img
            src={images[currentImageIndex]}
            alt="Slideshow"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent background click closing
          />

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent background click closing
              handleSlideshowNavigation("left");
            }}
            style={{
              position: "absolute",
              left: "20px",
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "36px",
              cursor: "pointer",
            }}
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent background click closing
              handleSlideshowNavigation("right");
            }}
            style={{
              position: "absolute",
              right: "20px",
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "36px",
              cursor: "pointer",
            }}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default PressPage;