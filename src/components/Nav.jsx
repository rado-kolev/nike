import { headerLogo } from '../assets/images';
import {navLinks} from '../constants'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

const Nav = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='lg:hidden z-50 cursor-pointer'>
          {nav ? (
            <AiOutlineClose className='text-black' size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>

        {/* Mobile Menu */}

        <div
          onClick={handleNav}
          className={
            nav
              ? 'fixed top-0 left-0 w-full h-screen bg-gray-300 px-8 py-8 flex flex-col text-black transition-transform transform translate-y-0 transition-duration-1500 z-40'
              : 'fixed top-0 left-0 w-full h-screen bg-gray-300 px-8 py-8 flex flex-col text-black transition-transform transform -translate-y-full transition-duration-1500 z-40'
          }
        >
          <ul>
            <a href='/'>
              <img src={headerLogo} alt='Logo' width={130} height={29} className='mb-20' />
            </a>
            {navLinks.map((link) => (
              <li key={link.label} className='border-b last:border-none my-8 pb-8'>
                <a
                  href={link.href}
                  className='font-montserrat leading-normal text-lg'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
