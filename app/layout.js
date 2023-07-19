import HomeSection from "@/sections/HomeSection";
import "./globals.css";
import { openGraphImage, seoKeywords } from "./shared-metadata";

export const metadata = {
  title: "Kur'an-ı Kerim Türkçe Meali",
  keywords: seoKeywords,
  applicationName: "Kur'an-ı Kerim Türkçe Meali",
  referrer: "origin-when-cross-origin",
  authors: ["Tarık Kaya"],
  publisher: "Tarık Kaya",
  creator: "Tarık Kaya",
  description:
    "Bu site (Kur'an-ı Kerim Türkçe Meali Sitesi), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur.",
  url: "https://kuranmealapp.vercel.app",
  openGraph: {
    ...openGraphImage,
    title: "Kur'an-ı Kerim Türkçe Meali",
    description:
      "Bu site (Kur'an-ı Kerim Türkçe Meali Sitesi), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur.",
    site_name: "Kur'an-ı Kerim Türkçe Meali",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <meta name="theme-color" content={"#008080"} id="theme-color-meta" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="manifest" href="/manifest.json" />
      <body className="w-full mx-auto">
        <HomeSection>{children}</HomeSection>
      </body>
    </html>
  );
}
