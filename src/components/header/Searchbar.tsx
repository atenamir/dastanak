import { CiSearch } from "react-icons/ci";
function Searchbar() {
  return (
    <div className="border border-gray-300 w-[50%] h-[80%] rounded-2xl flex items-center justify-between">
        <input 
        type="text" 
        className="w-[90%] h-full rounded-2xl border-none outline-0 px-2"
        placeholder="جست و جو داستان ..." />
     <button className="h-[25px] cursor-pointer active:scale-75 transition">
        <CiSearch className=" text-xl ml-1 " />
     </button>
    </div>
  )
}

export default Searchbar