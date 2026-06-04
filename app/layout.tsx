import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mae Asian Cuisine | Pereira, Colombia",
  description: "Restaurante de cocina asiática auténtica en Pereira, Colombia. Dos sedes, una pasión. Sushi, ramen, dim sum y más.",
  keywords: "restaurante asiático, Pereira, Colombia, sushi, ramen, cocina asiática, Mae Asian Cuisine",
  openGraph: {
    title: "Mae Asian Cuisine",
    description: "Una experiencia asiática única en Pereira, Colombia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0D0D0D] text-[#F5F5F0]">
        {children}
      </body>
    </html>
  );
}
