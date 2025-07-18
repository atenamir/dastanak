import Image from "next/image";
import logo from '../../../public/logoTransparent.png';
import Searchbar from "./Searchbar";
import Link from "next/link";
import { CiMenuFries, CiHeadphones } from "react-icons/ci";

const categories = [
  {id: 1, name: "رمان", link: "/stories" },
  { id: 2,name: "داستان کوتاه", link: "/stories" },
  { id: 3, name: "تاریخی", link: "/stories" },
  {id: 4, name: "کودک و نوجوان", link: "/stories" },
  {id: 5, name: "زندگی‌نامه", link: "/stories" },
  {id: 6, name: "علمی", link: "/stories" },
  {id: 7, name: "طنز", link: "/stories" },
];

function DesktopMode() {
  return (
    <div className="hidden lg:block w-full bg-white h-[15vh] border-b border-b-gray-300 shadow">
      <nav className="w-[80%] py-2 mx-auto flex items-center justify-between h-[60%]">
        <Image src={logo} width={120} alt="dastanak logo" />
        <Searchbar />
        <Link href="/login">
          <button className="cursor-pointer bg-gray-200 py-2 px-3 rounded-3xl text-center">
            ورود به حساب کاربری
          </button>
        </Link>
      </nav>

      {/*  Hover */}
      <div className="w-[80%] mx-auto h-[20%] flex items-start relative">
        <div className="relative group">
          <h3 className="flex items-center cursor-pointer hover:bg-primary hover:text-white p-2 transition rounded select-none">
            <span className="mx-1">
              <CiMenuFries />
            </span>
            دسته بندی ها
          </h3>
          <div
            className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl min-w-[220px] z-40 py-2
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            style={{ direction: "rtl" }}
          >
            <ul>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.link}
                    className="block px-4 py-2 hover:bg-primary hover:text-white rounded transition"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="flex items-center cursor-pointer mx-5 hover:bg-primary hover:text-white p-2 transition rounded">
          <span className="mx-1">
            <CiHeadphones className="text-xl" />
          </span>
          صوتی
        </h3>
        <h3 className="flex items-center cursor-pointer hover:bg-primary hover:text-white p-2 transition rounded">
          اشتراک
        </h3>
      </div>
    </div>
  );
}

export default DesktopMode;
