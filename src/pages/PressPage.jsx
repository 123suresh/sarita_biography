import React, { useState } from "react";

// Create an array of objects with image paths, titles, and descriptions
const imageData = [
  {
    src: `/images/Press/img1.jpg`,
    title: "EFCU Brand Ambassador",
  },
  {
    src: `/images/Press/img2.jpg`,
    title: "Sarita, who brings the character to life",
  },
  {
    src: `/images/Press/img3.jpg`,
    title: "Living Only as an Artist Can Shorten Life",
  },
  {
    src: `/images/Press/img4.jpg`,
    title: "Feature Article - Kamana",
  },
  {
    src: `/images/Press/img47.JPG`,
    title: "American Bank Everest Brand Ambassador",
  },
  {
    src: `/images/Press/img5.jpg`,
    title: "Sarita's Courage I",
  },
  {
    src: `/images/Press/img6.jpg`,
    title: "Honored with the Army Commendation Badge",
  },
  {
    src: `/images/Press/img7.jpg`,
    title: "Sarita's Courage II",
  },
  {
    src: `/images/Press/img8.jpg`,
    title: "Sarita's Courage III",
  },
  {
    src: `/images/Press/img9.jpg`,
    title: "The Future of My Children is My Happiness",
  },
  {
    src: `/images/Press/img11.jpg`,
    title: "Kamana Magazine",
  },
  {
    src: `/images/Press/img12.jpg`,
    title: "I Don't Hate Politics",
  },
  {
    src: `/images/Press/img13.jpg`,
    title: "He Does Not Give Me Gifts",
  },
  {
    src: `/images/Press/img14.jpg`,
    title: "NEFTA Award in Dubai A Good Sign",
  },
  {
    src: `/images/Press/img15.jpg`,
    title: "Emotive Artiste",
  },
  {
    src: `/images/Press/img16.jpg`,
    title: "Sarita in Seven Serials",
  },
  {
    src: `/images/Press/img17.jpg`,
    title: "Sarita's Parichaya",
  },
  {
    src: `/images/Press/img18.jpg`,
    title: "The Audience's Desire is Sarita's Goal",
  },
  {
    src: `/images/Press/img19.jpg`,
    title: "Naya Newspaper Article",
  },
  {
    src: `/images/Press/img20.jpg`,
    title: "Love for Acting",
  },
  {
    src: `/images/Press/img21.jpg`,
    title: "Film News",
  },
  {
    src: `/images/Press/img22.jpg`,
    title: "Dristi Magazine",
  },
  {
    src: `/images/Press/img23.jpg`,
    title: "Our Civilized Love Will Endure",
  },
  {
    src: `/images/Press/img24.jpg`,
    title: "Rejected 18 Films After Release",
  },
  {
    src: `/images/Press/img28.jpg`,
    title: "I feel like living as a filmmaker rather than a political person",
  },
  {
    src: `/images/Press/img29.jpg`,
    title: "Rajdhani Newspaper",
  },
  {
    src: `/images/Press/img30.jpg`,
    title: "Sarita's Fitness",
  },
  {
    src: `/images/Press/img32.jpg`,
    title: "Sarita's Desire for a Grand Dream",
  },
  {
    src: `/images/Press/img33.jpg`,
    title: "Timeout Article",
  },
  {
    src: `/images/Press/img34.jpg`,
    title: "Desire to Own a Dog",
  },
  {
    src: `/images/Press/img35.jpg`,
    title: "Freedom for Liberation",
  },
  {
    src: `/images/Press/img36.jpg`,
    title: "Sarita with her Daughter",
  },
  {
    src: `/images/Press/img37.jpg`,
    title: "Tihar Festival Opinion",
  },
  {
    src: `/images/Press/img38.jpg`,
    title: "Simple Sarita",
  },
  {
    src: `/images/Press/img39.jpg`,
    title: "Glamour of Sarita",
  },
  {
    src: `/images/Press/img40.jpg`,
    title: "Path to Success",
  },
  {
    src: `/images/Press/img41.jpg`,
    title: "Gazzab Newspaper",
  },
  {
    src: `/images/Press/img42.jpg`,
    title: "Friday Face Magazine",
  },
  {
    src: `/images/Press/img43.jpg`,
    title: "Filmy News",
  },
  {
    src: `/images/Press/img45.jpg`,
    title: "Serial Queen Sarita",
  },
  {
    src: `/images/Press/img46.jpg`,
    title: "FAAN Award Announcement",
  },
  // Add similarly unique entries for images 11 to 28
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
        prev === 0 ? imageData.length - 1 : prev - 1
      );
    } else if (direction === "right") {
      setCurrentImageIndex((prev) =>
        prev === imageData.length - 1 ? 0 : prev + 1
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
          fontSize: "50px",
          marginTop: "10px",
          marginBottom: "30px",
          textAlign: "center",
          color: "#CDBFA7 ",
          animation: "fadeInDown 1s ease-in-out",
        }}
      >
        PUBLICATIONS
      </h1>
      
      {/* Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        {imageData.map((image, index) => (
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
              src={image.src}
              alt={image.title}
              style={{
                width: "100%",
                height: "100%",
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
              <h3 style={{ fontSize: "18px", margin: "0" }}>{image.title}</h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: "5px 0 0",
                  fontStyle: "italic",
                }}
              >
                {image.description}
              </p>
            </div>
          </div>
        ))}
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
            src={imageData[currentImageIndex].src}
            alt={imageData[currentImageIndex].title}
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
