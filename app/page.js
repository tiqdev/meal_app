import Container from "./components/Container";
import SurahList from "./components/SurahList";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Kur'an-ı Kerim Türkçe Meali",
  description: "Kur'an-ı Kerim Türkçe Meali",
  url: "https://kuranmeali.vercel.app",
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
