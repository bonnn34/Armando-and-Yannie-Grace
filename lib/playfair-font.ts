import localFont from "next/font/local"

// Bundle Playfair Display to avoid Google Fonts URL parsing failures during builds.
export const playfair = localFont({
  src: [
    {
      path: "../public/fonts/playfair-display/PlayfairDisplay-Variable.ttf",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "../public/fonts/playfair-display/PlayfairDisplay-Italic-Variable.ttf",
      weight: "400 900",
      style: "italic",
    },
  ],
  display: "swap",
})
