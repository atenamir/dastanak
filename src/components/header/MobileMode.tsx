"use client";
import Image from "next/image";
import logo from "../../../public/logoTransparent.png";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoHomeOutline , IoBonfireOutline, IoBookOutline} from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GrNext } from "react-icons/gr";
import Searchbar from "./Searchbar";
import Link from "next/link";

const menuItems = [
  { label: "خانه", href: "/" , icon: <IoHomeOutline />},
  { label: "داغ‌ترین‌ها", href: "/hot" ,icon: <IoBonfireOutline />},
  { label: "داستان‌ها", href: "/stories" ,icon: <IoBookOutline />},
  { label: "پروفایل", href: "/login" ,icon: <CiUser />},
];

function MobileMode() {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden w-full bg-white">
      <nav className="w-full h-15 p-2 shadow flex items-center justify-between">
        {/* === menu icon === */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          aria-label="باز کردن منو"
        >
          <IoIosMenu className="text-3xl cursor-pointer" />
        </motion.button>
        <Searchbar />
         <Link href="/">
          <Image src={logo} width={100} alt="داستانک" />
         </Link>
          
      </nav>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-[78vw] max-w-xs h-full bg-primary z-50 shadow-lg p-6 text-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
             <div className="flex items-center justify-between mb-6">
               <button
                className="text-2xl  text-secondary active:scale-75 transition"
                onClick={() => setOpen(false)}
                aria-label="بستن منو"
              >
                <GrNext className="cursor-pointer" />
              </button>
              <Image src={logo}  width={130} alt="dastanak"/>
             </div>
              <ul className="space-y-6 mt-4 font-semibold">
                {menuItems.map(item => (
                  <li key={item.href} className="border-b py-1 border-b-gray-100/30 ">
                    <Link
                      href={item.href}
                      className="flex items-center py-2 px-2 rounded hover:bg-accent/40 transition"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-xl mx-2">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMode;
