import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import {  AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <nav className="text-black p-6 bg-yellow-300">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
          open === true ?
          <AiOutlineClose></AiOutlineClose>
         : 
          <RiMenu2Fill></RiMenu2Fill>
        }
      </div>




   
    </nav>
  );
};

export default NavBar;
