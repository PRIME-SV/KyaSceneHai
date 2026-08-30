import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 8,
          border: "1.5px solid #c59d5f",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontFamily: "Mukta",
            color: "#c59d5f",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          म
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
