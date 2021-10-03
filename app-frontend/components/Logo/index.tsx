import logo from "./logo.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex justify-center">
      <div className="relative" style={{ width: "75px", height: "64px" }}>
        <Image layout="fixed" width={75} height={64} src={logo} alt="Logo" />
      </div>
    </div>
  );
}
