import BrandingSVG from "@/components/SVG/BrandingSVG";

const styles = "flex shadow-black shadow-sm ease-in-out items-center justify-center text-white bg-[#C3CFBD] rounded-full p-1 w-14 h-14 hover:bg-black focus:ring-4 focus:ring-black focus:outline-none cursor-grab active:cursor-grabbing";

export function NavigatorCover(
  {
    onPointerDown,
    onMouseEnter,
    title = "Open quick actions",
  }: { onPointerDown?: any; onMouseEnter?: any; title?: string }
) {
  return (
    <button
      type="button"
      aria-controls="navigator-speed-dial"
      className={styles}
      onPointerDown={onPointerDown}
      onMouseEnter={onMouseEnter}
      title={title}
      draggable={false}
    >
      <BrandingSVG />
    </button>
  );
}
