import React, { useState, useEffect } from "react";

const images = [
  "/images/Gallary/img1.jpeg",
  "/images/Gallary/img2.jpeg",
  "/images/Gallary/img3.jpg",
  "/images/Gallary/img4.jpeg",
  "/images/Gallary/img5.jpeg",
  "/images/Gallary/img6.jpeg",
];

function Gallary() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryImages, setGalleryImages] = useState(images); // To handle dynamic loading
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Load more images
  const loadMoreImages = () => {
    const moreImages = [
      "/images/Gallary/img1.jpeg",
      "/images/Gallary/img2.jpeg",
    ];
    setGalleryImages((prev) => [...prev, ...moreImages]);
  };

  // Handle opening the slideshow
  const openSlideshow = (index) => {
    setCurrentImageIndex(index);
    setIsSlideshowOpen(true);
  };

  // Handle closing the slideshow
  const closeSlideshow = () => {
    setIsSlideshowOpen(false);
  };

  // Handle navigating slideshow
  const handleSlideshowNavigation = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    } else if (direction === "right") {
      setCurrentImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div
      style={{
        padding: "70px 10%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#262528",
        fontFamily: "'Poppins', sans-serif",
        color: "#CDBFA7 ",
      }}
    >
      {/* Gallery Title */}
      <h1 style={{ fontSize: "60px", textAlign: "center", marginBottom: "20px" }}>
        Gallery
      </h1>

      {/* Slideshow */}
      <div
        style={{
          width: "100%",
          height: "80vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "opacity 1s ease",
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Image Grid */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {galleryImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => openSlideshow(index)}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <button
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            backgroundColor: "#A04455",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#862C44")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#A04455")
          }
          onClick={loadMoreImages}
        >
          Load More
        </button>
      </div>

      {/* Slideshow Popup */}
      {isSlideshowOpen && (
        <div
          style={{
            position: "fixed",
            top: 30,
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
            src={galleryImages[currentImageIndex]}
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

export default Gallary;