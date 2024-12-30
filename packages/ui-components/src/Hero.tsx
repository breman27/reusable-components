import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = "", // Default background image
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#",
}) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "0px 2px 5px rgba(0, 0, 0, 0.7)",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "30px",
              lineHeight: "1.6",
              textShadow: "0px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          <a
            href={primaryButtonLink}
            style={{
              display: "inline-block",
              padding: "12px 25px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderRadius: "5px",
              textDecoration: "none",
              backgroundColor: "#4caf50",
              color: "white",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4caf50")
            }
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonLink}
            style={{
              display: "inline-block",
              padding: "12px 25px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderRadius: "5px",
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.2)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </div>
  );
};
