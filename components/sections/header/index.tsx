'use client';

import { CloseButton, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { NAV_DATA } from 'constants/data';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from 'lib/utils';

import Dropdown from 'components/dropdown';

import logo from '../../logo.png';

const menuUl = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemLi = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

export function Header() {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    // Update the body height based on navOpen state
    document.body.style.height = navOpen ? '100vh' : 'auto';
    document.body.style.overflow = navOpen ? 'hidden' : 'auto'; // Prevent scrolling when nav is open

    // Clean up when the component unmounts
    return () => {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, [navOpen]);
  const pathName = usePathname();
  return (
    <header className="relative z-50">
      <div className="flex h-7 items-center justify-center gap-5.5 bg-dark-16181B px-4 sm:px-10 lg:h-12.5">
        <div className="md:text-13 flex items-center gap-1 text-[8px] uppercase -tracking-0.26px">
          <p className="font-bold text-white">Give US A CALL</p>
          <Link href="tel:+18888282131" className="font-light text-primary hover:underline">
            +1 (888) 828-2131
          </Link>
        </div>
        <div className="md:text-13 flex items-center gap-1 text-[8px] uppercase -tracking-0.26px">
          <p className="font-bold text-white">schedule appointment </p>
          <Link href="/schedule-appointment" className="font-light text-primary hover:underline">
            CLICK HERE
          </Link>
        </div>
      </div>
      <div className="relative z-0 mx-auto flex h-[45px] w-full max-w-[1920px] bg-dark-1E242B pl-4 pr-4 sm:pr-5 lg:h-[74px] lg:pl-10 lg:pr-0">
        <Link href="/" className="self-center">
          <Image
            src={logo}
            alt="Perform MD"
            width={248}
            height={74}
            className="h-5 w-[117px] lg:h-auto lg:w-auto"
          />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <ul className="flex items-center gap-5">
            {NAV_DATA.map((item, index) => (
              <li key={index} className="relative z-0">
                {item.dropdownItems ? (
                  <Dropdown label={item.label} dropdownItems={item.dropdownItems} />
                ) : (
                  <Link
                    className={cn(
                      'text-15 uppercase text-white transition-all hover:text-primary',
                      { 'text-primary': pathName === item.link }
                    )}
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden lg:flex">
          <Link
            href="#"
            className="relative z-0 flex w-[150px] items-center justify-center bg-[#2A333D] text-base font-bold uppercase -tracking-0.02em text-white 2xl:w-[275px] 2xl:text-xl"
          >
            <span>CALL NOW</span>
            <ArrowUpRight className="absolute right-3 top-1/2 size-4.5 -translate-y-1/2 2xl:right-8" />
          </Link>
          <Link
            href="/schedule-appointment"
            className="relative z-0 flex w-[150px] items-center justify-center bg-[#191C20] text-base font-bold uppercase -tracking-0.02em text-white 2xl:w-[275px] 2xl:text-xl"
          >
            <span>schedule</span>
            <ArrowUpRight className="absolute right-3 top-1/2 size-4.5 -translate-y-1/2 2xl:right-8" />
          </Link>
        </div>
        <button className="ml-auto block lg:hidden" onClick={() => setNavOpen(!navOpen)}>
          <svg
            width="26"
            height="14"
            viewBox="0 0 26 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="26"
              height="2"
              fill="white"
              style={{
                transform: navOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease'
              }}
            />
            <rect
              y="6"
              width="26"
              height="2"
              fill="white"
              style={{
                opacity: navOpen ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
            />
            <rect
              y="12"
              width="26"
              height="2"
              fill="white"
              style={{
                transform: navOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease'
              }}
            />
          </svg>
        </button>
      </div>
      <div
        className={cn(
          'absolute inset-x-0 top-[73px] overflow-auto border-t border-t-transparent bg-[#1E242B] px-4 transition-all duration-300 lg:hidden',
          navOpen
            ? 'pointer-events-auto h-[calc(100vh-73px)] border-primary'
            : 'pointer-events-none h-0'
        )}
      >
        <div className="py-[84px]">
          <ul className="space-y-16 text-center">
            {NAV_DATA.map((item, index) => (
              <motion.li className="relative z-0" variants={itemLi} key={index}>
                {item.dropdownItems && (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={cn(
                            'flex w-full items-center justify-center gap-1 text-[25px] uppercase text-white',
                            { 'text-primary': open }
                          )}
                        >
                          <span>{item.label}</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={cn('shrink-0 transition-all', { 'rotate-180': open })}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.0005 10L12.7076 15.2929C12.3171 15.6834 11.6839 15.6834 11.2934 15.2929L6.00049 10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </DisclosureButton>
                        <div className="overflow-hidden bg-[#2A333D]">
                          <AnimatePresence>
                            {open && (
                              <DisclosurePanel>
                                <div className="pointer-events-none absolute -inset-x-4 -top-6 bottom-0 -z-10 origin-top bg-[#2A333D] transition-all duration-700" />
                                <motion.ul
                                  variants={menuUl}
                                  initial="hidden"
                                  animate="show"
                                  className="space-y-8 pb-11 pt-6"
                                >
                                  {item.dropdownItems.map((dropdown, index) => (
                                    <motion.li key={index} variants={itemLi}>
                                      <CloseButton
                                        as={Link}
                                        href={dropdown.link}
                                        onClick={() => setNavOpen(false)}
                                        className={cn(
                                          'text-base leading-none',
                                          pathName === dropdown.link ? 'text-primary' : 'text-white'
                                        )}
                                      >
                                        {dropdown.label}
                                      </CloseButton>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </DisclosurePanel>
                            )}
                          </AnimatePresence>
                        </div>
                      </>
                    )}
                  </Disclosure>
                )}
                {!item.dropdownItems && (
                  <Link
                    href={item.link}
                    onClick={() => setNavOpen(false)}
                    className={cn(
                      'flex items-center justify-center gap-1 text-[25px] uppercase text-white',
                      { 'text-primary': pathName === item.link }
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
