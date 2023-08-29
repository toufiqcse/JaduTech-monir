import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  RiCloseCircleLine,
  RiMenu2Fill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiGithubFill,
  RiInstagramLine,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from 'react-icons/ri';
const Header = () => {
  const [stickyClass, setStickyClass] = useState('relative');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80
        ? setStickyClass('fixed-header')
        : setStickyClass('relative');
    }
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className={`header ${stickyClass}`}>
      <div className='container'>
        <div className='navbar'>
          <div className='navbar__logo'>
            <Link href='/'>
              <img src='/logo.png' alt='logo' />
            </Link>
          </div>
          <ul className={click ? 'navbar__nav active' : 'navbar__nav'}>
            <div className='mobile-logo' onClick={closeMobileMenu}>
              <Link href='/'>
                <a>জাদুটেক</a>
              </Link>
            </div>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/about'>অ্যাবাউট আস </Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/services'>সার্ভিসেস</Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/portfolio'>পোর্টফোলিও </Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/blog'>ব্লগ</Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/contact'>যোগাযোগ</Link>
            </li>

            <div className='header-bottom'>
              <ul>
                <li>
                  <a
                    target='_blank'
                    href='https://facebook.com/jadutech/'
                    rel='noreferrer'
                  >
                    <RiFacebookCircleFill />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://instagram.com/jadutech/'
                    rel='noreferrer'
                  >
                    <RiInstagramLine />
                  </a>
                </li>

                <li>
                  <a
                    target='_blank'
                    href='https://github.com/jadutech/'
                    rel='noreferrer'
                  >
                    <RiYoutubeFill />
                  </a>
                </li>
              </ul>
            </div>
          </ul>

          <div
            className={click ? 'navbar__toggler active' : 'navbar__toggler'}
            onClick={handleClick}
          >
            {click ? <RiCloseCircleLine /> : <RiMenu2Fill />}
          </div>
        </div>
      </div>
      <div
        className={click ? 'mobile-body-overly active' : 'mobile-body-overly'}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
};

export default Header;
