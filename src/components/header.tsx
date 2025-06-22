import Link from "next/link";
import Image from "next/image";
import { getCollections, load } from "outstatic/server";
import { MobileMenu } from "./mobile-menu";

export type MenuProps = {
  pages: {
    title: string;
    slug: string;
  }[];
  collections: string[];
};

const Header = async () => {
  const data = await getData();
  const { pages, collections } = data;

  return (
    <header className="w-full h-[65px] bg-[#3c3c3b] border-b fixed top-0 rounded-b-[10px] flex justify-between items-center px-5 z-20">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="nav-left flex items-center">
          <Link href="https://republicoffunltd.com/" target="_blank" className="mr-[10px]">
            <Image 
              src="/images/rofllogo.png" 
              alt="Republic of Fun LTD" 
              width={48} 
              height={48} 
              className="my-0 mx-[12px]"
              style={{ width: 'auto', height: '48px' }} 
            />
          </Link>
          <span className="text-white mx-[10px]">|</span>
          <Link href="/" className="mr-[10px]">
            <Image src="/images/qubeslogo.png" alt="QUBES" width={82} height={82} className="my-0 mx-[13px]" />
          </Link>
          
          {/* Navigation Links */}
          <nav className="nav-links hidden md:block">
            <Link href="/#news" className="smooth-scroll text-white mx-[15px] transition-colors hover:text-[#da2f6a] no-underline">
              Community
            </Link>
            <Link href="/#discover" className="text-white mx-[15px] transition-colors hover:text-[#da2f6a] no-underline">
              Events
            </Link>
            <Link href="/#leaderboard" className="smooth-scroll text-white mx-[15px] transition-colors hover:text-[#da2f6a] no-underline">
              Leaderboard
            </Link>
            <Link href="/play" className="text-white mx-[15px] transition-colors hover:text-[#da2f6a] no-underline">
              Shop
            </Link>
          </nav>
        </div>
        
        {/* Right side of navbar */}
        <div className="nav-right flex items-center">
          <Link href="#" className="mx-2 hidden md:block">
            <Image src="/images/user-icon.png" alt="User Login" width={32} height={32} />
          </Link>
          <Link href="#" className="mx-2 hidden md:block">
            <Image src="/images/language-icon.png" alt="Language Options" width={32} height={32} />
          </Link>

          <Link href="/play" className="mx-2 hidden md:block">
            <button        
              className="play-button w-[120px] h-[42px] bg-[#da2f6a] text-white border-0 rounded-[8px] text-[1.2em] hover:animate-shake"
              style={{ fontFamily: "'Porkys', sans-serif" }}
            >
              PLAY
            </button>
          </Link>
          
          {/* Mobile Menu - Only visible on small screens */}
          <div className="md:hidden ml-4">
            <MobileMenu pages={pages} collections={collections} />
          </div>
        </div>
      </div>
    </header>
  );
};

async function getData() {
  const db = await load();

  // get all pages
  const pages = await db
    .find(
      {
        collection: "pages",
        slug: { $nin: ["home"] },
        status: "published",
      },
      ["title", "slug"]
    )
    .toArray();

  const collections = getCollections().filter(
    (collection) => collection !== "pages"
  );

  return {
    pages,
    collections,
  } as MenuProps;
}

export default Header;


