import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
// import { BuiltWithOutstatic } from "./built-with-outstatic";

const Footer = () => {
  const hovered = false; // or false, depending on your logic

  return (
    <>
    <div className="    
    bg-[#3c3c3b]
    text-white
    p-10
    pt-10
    pb-10
    rounded-t-[22px]
    shadow-[0_-12px_20px_rgba(0,0,0,0.5)]
    relative
    z-0
    overflow-hidden">
      <footer className="text-white p-10 z-10 ">
        <div className="flex justify-between w-full items-center">
        <div className="flex flex-col ">
          <div className="flex flex-col w-full md:w-2/3">
            <div className="flex gap-2 mb-4 w-full flex-wrap md:flex-nowrap justify-center md:justify-start">
              <a href="https://instagram.com" target="_blank" className="text-white mx-1 no-underline hover:scale-95 hover:rotate-[8deg]">
                <img src="images/instagram-icon.png" alt="Instagram" className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] object-contain" />
              </a>
              <a href="https://youtube.com" target="_blank" className="text-white mx-1 no-underline hover:scale-95 hover:rotate-[8deg]">
                <img src="images/youtube-icon.png" alt="YouTube" className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] object-contain" />
              </a>
              <a href="https://tiktok.com" target="_blank" className="text-white mx-1 no-underline hover:scale-95 hover:rotate-[8deg]">
                <img src="images/tiktok-icon.png" alt="TikTok" className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] object-contain" />
              </a>
              <a href="https://twitch.tv" target="_blank" className="text-white mx-1 no-underline hover:scale-95 hover:rotate-[8deg]">
                <img src="images/twitch-icon.png" alt="Twitch" className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] object-contain" />
              </a>
              <a href="https://discord.com" target="_blank" className="text-white mx-1 no-underline hover:scale-95 hover:rotate-[8deg]">
                <img src="images/discord-icon.png" alt="Discord" className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] object-contain" />
              </a>
              <a href="https://facebook.com" target="_blank" className="text-white mx-1 no-underline hover:scale-95 hover:rotate-[8deg]">
                <img src="images/facebook-icon.png" alt="Facebook" className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] object-contain" />
              </a>
            </div>
            
            <span className="my-3" />
            <div className="flex gap-12 justify-between w-100">
              <div className="flex mx-1 min-w-[150px]">
                <ul>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Creative</a>
                  </li>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Season Archive</a>
                  </li>
                </ul>
              </div>
              <div className="flex mx-1 min-w-[150px]">
                <ul>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Fame Pass</a>
                  </li>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">News</a>
                  </li>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Download Now</a>
                  </li>
                </ul>
              </div>
              <div className="flex mx-1 min-w-[150px]">
                <ul>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Support</a>
                  </li>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Rules &amp; Guidelines</a>
                  </li>
                  <li>
                    <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Creative Rules</a>
                  </li>
                </ul>
                
              </div>
                
            </div>
            <span className="my-5 block border-b border-white min-w-[600px]"></span>
            <div className="flex mx-1 min-w-[600px]">
            <p className="hidden md:block text-sm mt-4">
              © Republic of Fun Limited. All rights reserved. The QUBES logo and
              SUMO QUBES logos and characters are trademarks of Republic of Fun
              Limited. The ROFL logo is a trademark or registered trademark of
              Republic of Fun Ltd. in the EU and elsewhere. {new Date().getFullYear()}
            </p>
          </div>
         </div>
        </div>

      {/* Stamp on the right side of the footer */}
      
      <div className="flex justify-start items-end my-2 relative mx-8">
        <div className="footer-right">
          <Link 
                href="https://republicoffunltd.com/" 
                target="_blank"
                className="block mb-2">
              <img
                src="images/stamp.png"
                alt="ROFL Studio Stamp"
                className="studio-stamp w-[150px] h-auto transform transition-all hover:animate-shake"
              />
          </Link>

              <img 
                src="images/esrb.jpg" 
                alt="ESRB" 
                className="w-[150px] h-auto mt-4" 
              />

          </div>
        </div>
      </div>     

        <div className="text-center mt-10 text-white">
          <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Terms of Notice</a>
          <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Privacy Policy</a>
          <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Safety &amp; Security</a>
          <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Cookies</a>
          <a href="#" className="text-white mx-2 no-underline hover:text-[#da2f6a]">Settings</a>
        </div>

      <button
        style={{ fontFamily: "'Porkys', sans-serif" }}
        className="
          block
          bg-white
          text-[#3c3c3b]
          text-2xl
          w-14
          h-14
          text-center
          rounded-full
          absolute
          right-[50px]
          border-none
          transition-all
          hover:bg-[#da2f6a]
          hover:text-white
          hover:rotate-[-8deg]
          bottom-[40px]
          flex
          justify-center
          items-center
          z-20
          shadow-md"
      >
        <Link href="#top" className="flex flex-col items-center justify-center leading-none no-underline text-inherit">
          <span className="text-lg mb-[-5px]">▲</span>
          <span className="text-sm">UP</span>
        </Link>
      </button>

    </footer>
    </div>
    
  
  </>
  );
};

export default Footer;