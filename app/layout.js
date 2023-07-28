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
    "Bu site (Kur'an-ı Kerim Türkçe Meali), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla, çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur.",
  url: "https://kuranmealapp.vercel.app",
  openGraph: {
    ...openGraphImage,
    title: "Kur'an-ı Kerim Türkçe Meali",
    description:
      "Bu site (Kur'an-ı Kerim Türkçe Meali), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla, çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur.",
    site_name: "Kur'an-ı Kerim Türkçe Meali",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <meta name="theme-color" content={"#291911"} id="theme-color-meta" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Kur'an-ı Kerim Türkçe Meali</title>
      <meta name="title" content="Kur'an-ı Kerim Türkçe Meali" />
      <meta
        name="description"
        content="Bu site (Kur'an-ı Kerim Türkçe Meali), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kuranmeali.vercel.app/" />
      <meta property="og:title" content="Kur'an-ı Kerim Türkçe Meali" />
      <meta
        property="og:description"
        content="Bu site (Kur'an-ı Kerim Türkçe Meali), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur."
      />
      <meta
        property="og:image"
        content="https://kuranmeali.vercel.app/og-image.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kuranmeali.vercel.app/" />
      <meta property="twitter:title" content="Kur'an-ı Kerim Türkçe Meali" />
      <meta
        property="twitter:description"
        content="Bu site (Kur'an-ı Kerim Türkçe Meali), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur."
      />
      <meta
        property="twitter:image"
        content="https://kuranmeali.vercel.app/og-image.png"
      />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="manifest" href="/manifest.json" />
      <body className="w-full mx-auto">
        <HomeSection>{children}</HomeSection>
      </body>
    </html>
  );
}
