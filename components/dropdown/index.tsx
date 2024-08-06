import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import Link from 'next/link';

import { cn } from 'lib/utils';

import { ChevronDown } from 'components/icons/chevron-down';

interface Props {
  label: string;
  dropdownItems: {
    label: string;
    link: string;
  }[];
}

export default function Dropdown(props: Props) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton
            className={cn(
              'flex items-center gap-1 text-15 uppercase text-white transition-all hover:text-primary',
              { 'text-primary': open }
            )}
          >
            {props.label}
            <ChevronDown className={cn('size-3 shrink-0 transition-all', { 'rotate-180': open })} />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom start"
            className="mt-2 w-52 origin-top-right rounded-xl border border-white/5 bg-[#2A333D] p-1 text-sm/6 text-white transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {props.dropdownItems.map((item, index) => (
              <MenuItem key={index}>
                <Link
                  href={item.link}
                  className="group flex w-full items-center gap-2 rounded-lg px-4 py-2 uppercase transition-all data-[focus]:bg-primary"
                >
                  {item.label}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
}
