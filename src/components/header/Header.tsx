import MobileMode from "./MobileMode";
import DesktopMode from "./DesktopMode";

export default function Header() {
  return (
   <header>
    {/* === mobile mode === */}
    <MobileMode />
  {/* === desktop mode === */}
  <DesktopMode />
   </header>
  );
}
