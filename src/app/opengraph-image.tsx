import { ImageResponse } from "next/og";

export const alt = "Rohan Vernekar — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#09090b",
          color: "#fafafa",
          display: "flex",
          height: "100%",
          padding: "64px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "30px 30px",
            display: "flex",
            inset: 0,
            position: "absolute",
          }}
        />

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "28px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 58px",
            position: "relative",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 25,
              gap: 14,
              letterSpacing: "0.02em",
            }}
          >
            <div
              style={{
                background: "#fafafa",
                borderRadius: "999px",
                display: "flex",
                height: 14,
                width: 14,
              }}
            />
            rohan.schedulers.app
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                fontSize: 76,
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              Rohan Vernekar
            </div>
            <div
              style={{
                color: "#a1a1aa",
                display: "flex",
                fontSize: 34,
                lineHeight: 1.25,
              }}
            >
              Software Engineer · Full-stack · AI
            </div>
          </div>

          <div
            style={{
              color: "#d4d4d8",
              display: "flex",
              fontSize: 23,
              justifyContent: "space-between",
            }}
          >
            <span>Building useful products for the web.</span>
            <span>@Rohanvrnkr</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
