import { useSelector } from "react-redux";

const OverlayWithInfo = ({}) => {
  const surah_name = useSelector((state) => state.meal.surah_name);
  const totalVerses = useSelector((state) => state.meal.totalVerses);

  return (
    <>
      <div
        id="overlay"
        className="fixed bottom-0 left-0 w-full h-[80px] z-[40] bg-overlay_pattern_light_bottom dark:bg-overlay_pattern_dark_bottom hidden "
      ></div>
      <div
        id="overlay_top"
        className="fixed top-0 left-0 w-full h-[120px] z-[40] bg-overlay_pattern_light_top dark:bg-overlay_pattern_dark_top hidden items-start justify-center pt-[10px]"
      >
        {surah_name && (
          <>
            <span className="text-blue_soft dark:text-blue_white font-[700]">
              {surah_name} Suresi - {totalVerses} Ayet
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default OverlayWithInfo;
