import Link from "next/link";

const FloatingButton = ({ children, link }) => {
  return (
    <button className="flex items-center rounded-[12px] bg-blue_soft_border group bg-opacity-20  w-[30px] h-[30px] hover:bg-blue_soft cursor-pointer">
      {link === "" ? (
        <div
          id="floating_icon"
          className="flex items-center justify-center rounded-[7px]  w-full h-full"
        >
          {children}
        </div>
      ) : (
        <Link
          href={link}
          id="floating_icon"
          className="flex items-center justify-center  rounded-[12px] w-[30px]  h-[30px] group"
        >
          {children}
        </Link>
      )}
    </button>
  );
};

export default FloatingButton;
