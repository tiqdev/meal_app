import AnimatedContainer from "@/components/AnimatedContainer";
import Link from "next/link";

const AboutPage = () => {
  return (
    <AnimatedContainer>
      <h1 className="title">Kur'an-ı Kerim Meali</h1>

      <div className="flex flex-col items-center gap-[40px] mt-[10px] leading-[1.4]">
        <h2 className="font-[500] text-[16px] px-[10px] text-center">
          Bu uygulama, insanlara faydalı olmak ve Allah'ın ilmini insanlara
          yaymak amacıyla, çıkar gözetmeksizin Tarık Kaya tarafından
          oluşturulmuştur.
        </h2>
        <h3 className="font-[500] text-[16px] px-[10px] text-center">
          Bu uygulama{" "}
          <Link
            className="underline"
            target="_blank"
            href={"https://github.com/ziegfiroyt/acikkuran-api"}
          >
            Açık Kuran API
          </Link>{" "}
          kullanılarak hazırlanmıştır. <br /> Allah razı olsun.
        </h3>

        <Link className="underline" href={"mailto:tariqkaya24@gmail.com"}>
          İletişim İçin Tıklayın!
        </Link>
        <span className="text-[42px]">🌸</span>
      </div>
    </AnimatedContainer>
  );
};

export default AboutPage;
