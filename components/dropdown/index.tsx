import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from 'lib/utils';

import { ChevronDown } from 'components/icons/chevron-down';

interface Props {
  label: string;
  dropdownItems: {
    label: string;
    link: string;
  }[];
}

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      staggerChildren: 0.1, // Add stagger delay between children animations
      when: 'beforeChildren' // Start children animations after the parent
    }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

export default function Dropdown(props: Props) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Menu>
      {({ open, close }) => (
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

          <AnimatePresence>
            <MenuItems className="absolute z-50 mt-2 w-52 origin-top-right rounded-xl border border-white/5 bg-[#2A333D] p-1 text-sm/6 text-white transition duration-100 ease-out focus:outline-none">
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {props.dropdownItems.map((item, index) => (
                  <MenuItem key={index} as={motion.div} variants={itemVariants}>
                    <Link
                      onClick={close}
                      href={item.link}
                      className={cn(
                        'group flex w-full items-center gap-2 rounded-lg px-4 py-2 uppercase transition-all hover:bg-primary data-[focus]:bg-primary',
                        pathName === item.link ? 'bg-primary' : ''
                      )}
                    >
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </motion.div>
            </MenuItems>
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}
