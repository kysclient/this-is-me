import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#07080d",
          color: "#ECECEC",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand blob */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "46% 54% 60% 40% / 50% 42% 58% 50%",
            background: "linear-gradient(135deg, #3a5bff, #8aa0ff)",
            opacity: 0.92,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-120px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "2px solid #1d2030",
            display: "flex",
          }}
        />

        {/* top label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#5b78ff",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "8px",
              color: "#9298b0",
              display: "flex",
            }}
          >
            FREELANCE WEB · APP DEVELOPMENT
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "140px",
              fontWeight: 800,
              letterSpacing: "-4px",
              lineHeight: 1,
              display: "flex",
            }}
          >
            KIM YUSIN
          </div>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 700,
              marginTop: "12px",
              color: "#5b78ff",
              display: "flex",
            }}
          >
            Web &amp; App Developer
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "28px",
            color: "#9298b0",
          }}
        >
          <div style={{ display: "flex" }}>
            Frontend · Backend · Infra · Design
          </div>
          <div style={{ display: "flex", color: "#ECECEC", fontWeight: 600 }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
