import BrandingSVG from "@/components/SVG/BrandingSVG";

const styles = "flex shadow-black shadow-sm ease-in-out items-center justify-center text-white bg-[#C3CFBD] rounded-full p-1 w-14 h-14 hover:bg-black focus:ring-4 focus:ring-black focus:outline-none";

export function NavigatorCover({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      aria-controls="navigator-speed-dial"
      aria-expanded={open}
      className={styles}
      onClick={onToggle}
      title={open ? "Close quick actions" : "Open quick actions"}
    >
      <BrandingSVG />
    </button>
  );
}
