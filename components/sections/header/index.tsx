'use client';

import { NAV_DATA } from 'constants/data';
import { ArrowUpRight } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from 'lib/utils';

import Dropdown from 'components/dropdown';
import { ChevronDown } from 'components/icons/chevron-down';

import logo from '../../logo.png';

export function Header() {
  const pathName = usePathname();
  return (
    <header>
      <div className="flex h-12.5 items-center justify-center gap-5.5 bg-dark-16181B px-10">
        <div className="text-13 flex items-center gap-1 uppercase -tracking-0.26px">
          <p className="font-bold text-white">Give US A CALL</p>
          <Link href="tel:+18888282131" className="font-light text-primary hover:underline">
            +1 (888) 828-2131
          </Link>
        </div>
        <div className="text-13 flex items-center gap-1 uppercase -tracking-0.26px">
          <p className="font-bold text-white"> schedule appointment </p>
          <Link href="tel:+18888282131" className="font-light text-primary hover:underline">
            CLICK HERE
          </Link>
        </div>
      </div>
      <div className="relative z-0 mx-auto flex h-[74px] w-full max-w-[1920px] bg-dark-1E242B">
        <Link href="/">
          <Image src={logo} alt="Perform MD" width={248} height={74} />
        </Link>

        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-5">
            {NAV_DATA.map((item, index) => (
              <li key={index} className="relative z-0">
                {item.dropdownItems ? (
                  <Dropdown label={item.label} dropdownItems={item.dropdownItems} />
                ) : (
                  <Link
                    className="text-15 uppercase text-white transition-all hover:text-primary"
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex">
          <Link
            href="#"
            className="relative z-0 flex w-[275px] items-center justify-center bg-[#2A333D] text-xl font-bold uppercase -tracking-0.02em text-white"
          >
            <span>CALL NOW</span>
            <ArrowUpRight className="absolute right-8 top-1/2 size-4.5 -translate-y-1/2" />
          </Link>
          <Link
            href="#"
            className="relative z-0 flex w-[275px] items-center justify-center bg-[#191C20] text-xl font-bold uppercase -tracking-0.02em text-white"
          >
            <span>schedule</span>
            <ArrowUpRight className="absolute right-8 top-1/2 size-4.5 -translate-y-1/2" />
          </Link>
        </div>
      </div>
    </header>
  );
}
