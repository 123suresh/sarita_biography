import React, { useState } from "react";

// Create an array of objects with image paths, titles, and descriptions
const imageData = [
  {
    src: `/images/Press/img1.jpg`,
    title: "Nari Sakti - Annapurna Post",
    description: "Highlighting the empowerment of women in a feature by Annapurna Post.",
  },
  {
    src: `/images/Press/img2.jpg`,
    title: "Cover Story - Glam Nepal",
    description: "Exclusive cover story showcasing elegance and achievements.",
  },
  {
    src: `/images/Press/img3.jpg`,
    title: "Feature Article - The Rising Nepal",
    description: "An in-depth look into career milestones and inspirations.",
  },
  {
    src: `/images/Press/img4.jpg`,
    title: "Award Night Coverage",
    description: "Celebrating a proud moment at the prestigious awards ceremony.",
  },
  {
    src: `/images/Press/img5.jpg`,
    title: "Spotlight - Entertainment Weekly",
    description: "A captivating interview on life and aspirations.",
  },
  {
    src: `/images/Press/img6.jpg`,
    title: "Filmfare Feature",
    description: "Recognition of outstanding performances in film and television.",
  },
  {
    src: `/images/Press/img7.jpg`,
    title: "Cultural Ambassador Highlight",
    description: "A feature on promoting culture and heritage on international platforms.",
  },
  {
    src: `/images/Press/img8.jpg`,
    title: "Red Carpet Look",
    description: "Turning heads at the red carpet event with a stunning appearance.",
  },
  {
    src: `/images/Press/img9.jpg`,
    title: "Inspirational Journey",
    description: "A piece detailing the journey from dreams to reality.",
  },
  {
    src: `/images/Press/img11.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img12.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img13.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img14.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img15.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img16.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img17.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img18.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img19.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img20.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img21.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img22.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img23.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img24.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img25.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img26.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img27.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
  },
  {
    src: `/images/Press/img28.jpg`,
    title: "Exclusive Photoshoot",
    description: "Behind the scenes of a glamorous photoshoot.",
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
