import localFont from "next/font/local"

// Bundled fonts keep builds independent of Google Fonts API responses.

export const cinzel = localFont({
  src: [
    {
      path: "../public/fonts/cinzel/Cinzel-Variable.ttf",
      weight: "400 900",
      style: "normal"
    }
  ],
  display: "swap",
  variable: "--font-cinzel"
})

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/Inter-Variable.ttf",
      weight: "100 900",
      style: "normal"
    },
    {
      path: "../public/fonts/inter/Inter-Italic-Variable.ttf",
      weight: "100 900",
      style: "italic"
    }
  ],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: "Arial"
})

export const greatVibes = localFont({
  src: [
    {
      path: "../public/fonts/greatvibes/GreatVibes-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  display: "swap",
  variable: "--font-serif",
  weight: "400",
  style: "normal"
})

export const imperialScript = localFont({
  src: [
    {
      path: "../public/fonts/imperialscript/ImperialScript-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  display: "swap",
  variable: "--font-imperial-script",
  weight: "400",
  style: "normal"
})

export const cormorant = localFont({
  src: [
    {
      path: "../public/fonts/cormorantgaramond/CormorantGaramond-Variable.ttf",
      weight: "300 700",
      style: "normal"
    },
    {
      path: "../public/fonts/cormorantgaramond/CormorantGaramond-Italic-Variable.ttf",
      weight: "300 700",
      style: "italic"
    }
  ],
  display: "swap"
})
