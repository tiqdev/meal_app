import AnimatedContainer from "@/components/AnimatedContainer";
import BookmarksList from "@/components/BookmarkedList";

const BookmarksPage = () => {
  return (
    <AnimatedContainer>
      <h1 className="title  mb-[20px]">Kaydedilmiş Ayetler</h1>
      <BookmarksList />
    </AnimatedContainer>
  );
};

export default BookmarksPage;
