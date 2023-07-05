import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from 'react-icons/ri';

import { logo} from '../assets';
import { links} from '../assets/constants';

// Navbar Links
const NavLinks = (handleClick) => (
  <div className='mt-10'>
    {links.map((item) =>(
      <NavLink 
      key={item.name}
      to={item.to}
      className="flex flex-row
      justify-start items-center my-8 text-sm
      font-medium text-gray-400 hover:text-cyan-400"
      onClick={() => handleClick && handleClick () }
      >
        <item.icon className="w-6 h-6 mr-2"/>
        {item.name}
      </NavLink>
    ))}
  </div>
);

// Sidebar
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   // handle menu click
   const handleClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
  
    <div className="md:flex hidden flex-col w-[240px] py-10
    px-4 bg-[#191624]">
       {/* Brand Logo */}
      <img src={logo} alt="logo" className="w-full h-14 
      object-contain"/>
      <NavLinks/>
    </div>
     {/* Mobile Menu Icon */}
    <div className="absolute md:hidden block top-6 
    right-3">
    {mobileMenuOpen? (
      <RiCloseLine className="w-6 h-6 text-white mr-2" 
      onClick={() => setMobileMenuOpen(false)}
      />
      ): (<HiOutlineMenu className="w-6 h-6 text-white 
      mr-2" onClick={() => setMobileMenuOpen(true)}/>
      )}  
    </div>
    
    {/* Mobile Menu */}
    <div className={`absolute top-0 h-screen w-2/3
    bg-gradient-to-tl from-white/10 to-[#483d8b] 
    backdrop-blur-lg z-10 p-6 md:hidden smooth-transition 
    ${mobileMenuOpen? 'left-0' : '-left-full'}`}>
      
      <img src={logo} alt="logo" className="w-full h-14 
      object-contain"/>
      <NavLinks handleClick={()=> setMobileMenuOpen
        (false)}/>
    </div>

    </>

  );

};

export default Sidebar;
