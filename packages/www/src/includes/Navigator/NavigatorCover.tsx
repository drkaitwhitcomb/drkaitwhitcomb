import BrandingSVG from "@/components/SVG/BrandingSVG";

const styles = "flex shadow-black shadow-sm ease-in-out items-center justify-center text-white bg-[#C3CFBD] rounded-full p-1 w-14 h-14 hover:bg-black focus:ring-4 focus:ring-black focus:outline-none";

const STORAGE_KEY = "theme" as const; // "dark" | "light"

function prefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(mode: "dark" | "light" | "system") {
  const root = document.documentElement;

  if (mode === "system") {
    // Follow system preference
    const systemDark = prefersDark();
    root.classList.toggle("dark", systemDark);
    root.style.colorScheme = systemDark ? "dark" : "light";
    return;
  }

  const isDark = mode === "dark";
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
}

function currentMode(): "dark" | "light" | "system" {
  const stored = (localStorage.getItem(STORAGE_KEY) as "dark" | "light" | null);
  return stored ?? "system";
}

function toggleTheme() {
  const mode = currentMode();

  // If following system, start by flipping whatever the system is
  if (mode === "system") {
    const next = prefersDark() ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    return;
  }

  const next = mode === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
}

// Ensure initial theme follows stored or system preference on client load
if (typeof window !== "undefined") {
  applyTheme(currentMode());
}

export function NavigatorCover() {
  return (
    <button
      type="button"
      data-dial-toggle="speed-dial-menu-bottom-right"
      aria-controls="speed-dial-menu-bottom-right"
      aria-expanded="false"
      className={styles}
      onClick={toggleTheme}
      title="Toggle theme"
    >
      <BrandingSVG />
    </button>
  );
}
