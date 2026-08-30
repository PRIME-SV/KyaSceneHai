import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fontData = await readFile(
    join(process.cwd(), "app/fonts/Mukta-Bold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0807",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            border: "4px solid #c59d5f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontFamily: "Mukta",
              color: "#c59d5f",
              lineHeight: 1,
              marginTop: 8,
            }}
          >
            म
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Mukta",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
