import AnimatedContainer from "@/components/AnimatedContainer";
import AuthorList from "@/components/AuthorList";

export const getAuthors = async () => {
  //authors u çekmek için api ye istek atıyoruz
  //revalidate ile 1000 saniyede bir yeniden istek atıyoruz
  const res = await fetch("https://api.acikkuran.com/authors", {
    revalidate: 1000,
  });
  console.log(res, "res");
  return res.json();
};

async function AuthorsPage() {
  const authors = await getAuthors();

  return (
    <AnimatedContainer>
      <h1 className="title">Mealler</h1>
      <AuthorList authors={authors.data} />
    </AnimatedContainer>
  );
}

export default AuthorsPage;
