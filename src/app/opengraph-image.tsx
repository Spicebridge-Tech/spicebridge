import { ImageResponse } from "next/og";

export const alt = "Spicebridge Consulting - Expert IT Services & Consulting Nigeria. Your trusted technology partner.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #16353E 0%, #76B94C 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              background: "#212133",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#80bb55",
              fontSize: 48,
              fontWeight: 800,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            S
          </div>
          {/* Brand name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "white",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              SPICEBRIDGE
            </span>
            <span
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              CONSULTING
            </span>
          </div>
          {/* Tagline */}
          <span
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.95)",
              fontFamily: "system-ui, sans-serif",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Expert IT Services & Consulting Nigeria. Your trusted technology partner.
          </span>
          {/* Contact hint */}
          <span
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.8)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Lagos, Nigeria · info@spicebridge.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
