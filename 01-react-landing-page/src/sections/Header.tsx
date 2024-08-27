import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity.</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
          <Image src={Logo} alt="Saas logo" height={40} width={40} />
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customer</a>
            <a href="#">Updated</a>
            <a href="#">Help</a>
            <button className="bg-black rounded-lg text-white px-4 py-2 font-medium inline-flex justify-center tracking-tight">Get for free</button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
