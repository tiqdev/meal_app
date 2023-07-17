import Container from "./components/Container";
import SurahList from "./components/SurahList";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Kur'an-ı Kerim Türkçe Meali",
  description:
    "Bu site (Kur'an-ı Kerim Türkçe Meali Sitesi), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur.",
  url: "https://kuranmealapp.vercel.app",
  openGraph: {
    ...openGraphImage,
    title: "Kur'an-ı Kerim Türkçe Meali",
  },
};

export default function Home() {
  return (
    <main>
      <Container>
        <SurahList />
      </Container>
    </main>
  );
}
