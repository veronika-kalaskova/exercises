import Logo from "@/assets/logosaas.png";
import Insta from "@/assets/social-insta.svg";
import LinkedIn from "@/assets/social-linkedin.svg";
import Pinterest from "@/assets/social-pin.svg";
import Twitter from "@/assets/social-x.svg";
import Youtube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-center text-sm px-5 py-10 ">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={Logo}
            alt="logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Twitter className="w-6 h-6" />
          <Insta className="w-6 h-6" />
          <LinkedIn className="w-6 h-6" />
          <Pinterest className="w-6 h-6" />
          <Youtube className="w-6 h-6" />
        </div>
        <p className="mt-6">© 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};