import Link from "next/link";

const FloatingButton = ({ children, link }) => {
  return (
    <li className="w-[32px] h-[32px] rounded-[10px] hover:bg-floating_icon_hover flex items-center justify-center cursor-pointer">
      {link === "" ? (
        <span
          href={link}
          id="floating_icon"
          className="flex items-center justify-center w-[24px] bg-floating_icon_background h-[24px] border-solid border-[1px] border-floating_icon_border rounded-[7px] shadow-floating_icon"
        >
          {children}
        </span>
      ) : (
        <Link
          href={link}
          id="floating_icon"
          className="flex items-center justify-center w-[24px] bg-floating_icon_background h-[24px] border-solid border-[1px] border-floating_icon_border rounded-[7px] shadow-floating_icon"
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default FloatingButton;
