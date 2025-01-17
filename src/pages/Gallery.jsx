import React, { useState, useEffect } from "react";

// Function to fetch all images from the gallery folder dynamically
const getImagesFromGallery = () => {
  const context = require.context("../../public/images/Gallery", false, /\.(png|jpeg|svg|JPG|jpg)$/);
  return context.keys().map((key) => `/images/Gallery/${key.replace("./", "")}`);
};

// Function to shuffle an array (used for random slideshow order)
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [allImages, setAllImages] = useState(getImagesFromGallery());
  const [galleryImages, setGalleryImages] = useState(allImages.slice(0, 24)); // Initially show 24 images
  const [slideshowImages, setSlideshowImages] = useState(shuffleArray(allImages)); // Randomized images for slideshow
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slideshowImages]);

  // Load more images into the gallery
  const loadMoreImages = () => {
    const moreImages = allImages.slice(
      galleryImages.length,
      galleryImages.length + 10
    ); // Load 5 more images at a time
    setGalleryImages((prev) => [...prev, ...moreImages]);
  };

  // Open slideshow
  const openSlideshow = (index) => {
    setCurrentImageIndex(index);
    setIsSlideshowOpen(true);
  };

  // Close slideshow
  const closeSlideshow = () => setIsSlideshowOpen(false);

  // Navigate slideshow
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
        padding: "80px 10%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#262528",
        fontFamily: "'Poppins', sans-serif",
        color: "#CDBFA7 ",
      }}
    >
      {/* Gallery Title */}
      <h1
        style={{
          fontSize: "50px",
          marginTop: "10px",
          marginBottom: "30px",
          textAlign: "center",
          color: "#CDBFA7 ",
          animation: "fadeInDown 1s ease-in-out",
        }}
      >
        GALLERY
      </h1>

      {/* Randomized Slideshow */}
      <div
        style={{
          width: "100%",
          height: "80vh",
          overflow: "hidden",
          position: "relative",
          marginBottom: "40px",
        }}
      >
        {slideshowImages.map((image, index) => (
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
                  (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) =>
                  (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {galleryImages.length < allImages.length && (
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
              (e.target.style.backgroundColor = "#862C44")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#A04455")}
            onClick={loadMoreImages}
          >
            Load More
          </button>
        )}
      </div>

      {/* Slideshow Popup */}
      {isSlideshowOpen && (
        <div
          style={{
            position: "fixed",
            top: 40,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeSlideshow}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
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
            onClick={(e) => e.stopPropagation()}
          />

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
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
              e.stopPropagation();
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

export default Gallery;