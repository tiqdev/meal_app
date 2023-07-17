import Link from "next/link";

const FloatingButton = ({ children, link }) => {
  return (
    <li className="flex items-center rounded-[12px] bg-blue_soft_border  bg-opacity-20 p-[6px] hover:bg-blue_soft cursor-pointer">
      {link === "" ? (
        <div
          id="floating_icon"
          className="flex items-center justify-center rounded-[7px] group"
        >
          {children}
        </div>
      ) : (
        <Link
          href={link}
          id="floating_icon"
          className="flex items-center justify-center  rounded-[7px] group"
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default FloatingButton;
