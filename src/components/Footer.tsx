import Image from "next/image";
import footerImg from "../../public/footerImg.png";
import logo from "../../public/logoTransparent.png";
import { FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-primary/20 pt-7 pb-2 border-t border-gray-100 mt-10">
      {/* === top of footer === */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-secondary text-center font-bold text-lg md:text-xl">
          جایی برای روایت رؤیاهایت
        </h1>
        <Image src={footerImg} width={300} alt="footer image" className="my-4" priority />
      </div>

      {/* === about site and logo ====*/}
      <div className="w-full flex flex-col items-center md:items-start mt-2 pb-2 px-7">
        <Image src={logo} width={140} alt="dastanak logo" className="mt-3" />
        <p className="text-gray-400 font-light text-justify w-[92%] md:w-[60%] text-xs md:text-sm mt-2 mb-3 leading-6">
          پلتفرم داستانک جایی‌ست برای کشف و خلق داستان‌های کوتاه.  
          نویسنده باش یا خواننده، الهام بگیر، بنویس و رویاهایت را با جهان به اشتراک بگذار!
        </p>
      </div>

      {/* === list of footer's item ====*/}
      <div className="w-full flex justify-center my-2">
        <ul className="flex flex-wrap gap-6 text-gray-500 text-sm font-medium">
          <li>قوانین</li>
          <li>حریم خصوصی</li>
          <li>درباره ما</li>
          <li>ارتباط با ما</li>
        </ul>
      </div>

      {/* === social media === */}
      <div className="flex justify-center gap-5 mt-4 mb-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="اینستاگرام" >
          <FaInstagram className="text-xl text-gray-400 hover:text-pink-700"/>
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="تلگرام" >
          <FaTelegramPlane className="text-xl text-gray-400 hover:text-blue-500"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="لینکدین" >
          <FaLinkedin className="text-xl text-gray-400 hover:text-blue-800"/>
        </a>
      </div>

      {/* === copyRight === */}
      <div className="text-center text-gray-400 text-xs mt-6 border-t border-t-gray-200 pt-3">
        © {new Date().getFullYear()} داستانک | همه حقوق محفوظ است. (atenaMir)
      </div>
    </footer>
  );
}

export default Footer;
