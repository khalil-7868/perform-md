import Image from 'next/image';
import Link from 'next/link';

import { Instagram } from 'components/icons/instagram';
import { Tiktok } from 'components/icons/tiktok';
import { Youtube } from 'components/icons/youtube';
import logo from 'components/logo.png';

export function Footer() {
  return (
    <footer className="text-4xl font-bold text-white">
      <div className="px-6 pb-20 pt-15">
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="ml-auto flex w-full max-w-[1445px] justify-between gap-10">
            <div className="w-full max-w-[358px]">
              <h2 className="mb-14 text-[45px] font-bold leading-none">Contact</h2>
              <div className="space-y-7">
                <p className="text-[25px] font-light leading-none">
                  <strong className="font-medium">Address:</strong> 123 Mockingbird Lane <br />
                  Springfield, FA 98765 <br />
                  United States
                </p>
                <p className="text-[25px] font-light leading-none">
                  <strong className="font-medium">Phone:</strong>{' '}
                  <Link href="tel:+13052248850">+1 (305) 224-8850</Link>
                </p>
                <p className="text-[25px] font-light leading-none">
                  <strong className="font-medium">Email:</strong>{' '}
                  <Link href="mailto:Info@perform-md.com">Info@perform-md.com</Link>
                </p>
              </div>
            </div>
            <div className="w-full max-w-[402px]">
              <h2 className="mb-14 text-center text-[45px] font-bold leading-none">Links</h2>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-6">
                <li className="text-[25px] font-light leading-none">
                  <Link href="/knee-pain" className="hover:underline">
                    Knee Pain
                  </Link>
                </li>
                <li className="text-[25px] font-light leading-none">
                  <Link href="/spine-pain" className="hover:underline">
                    Spine Pain
                  </Link>
                </li>
                <li className="text-[25px] font-light leading-none">
                  <Link href="/hip-pain" className="hover:underline">
                    Hip Pain
                  </Link>
                </li>
                <li className="text-[25px] font-light leading-none">
                  <Link href="/hand-and-wrist-pain" className="hover:underline">
                    Hand & Wrist Pain
                  </Link>
                </li>
                <li className="text-[25px] font-light leading-none">
                  <Link href="/shoulder-pain" className="hover:underline">
                    Shoulder Pain
                  </Link>
                </li>
                <li className="text-[25px] font-light leading-none">
                  <Link href="/elbow-pain" className="hover:underline">
                    Elbow Pain
                  </Link>
                </li>
                <li className="text-[25px] font-light leading-none">
                  <Link href="#" className="hover:underline">
                    Neck Pain
                  </Link>
                </li>
                <li className="text-[25px] font-light leading-none">
                  <Link href="/foot-and-ankle-pain" className="hover:underline">
                    Ankle & Foot Pain
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-[297px]">
              <h2 className="mb-14 text-[45px] font-bold leading-none">Learn More</h2>
              <div className="space-y-7">
                <p className="text-[25px] font-light leading-none">Dr. Peter Michael</p>
                <p className="text-[25px] font-light leading-none">
                  Perform MD regenerative <br />
                  orthopedics and spine
                </p>
                <p className="text-[25px] font-light leading-none">
                  <Link href="#">About Us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2A333D] pb-6 pt-11">
        <ul className="flex items-center justify-center gap-11">
          <li>
            <Link href="#" className="text-white">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white">
              <Youtube />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white">
              <Tiktok />
            </Link>
          </li>
        </ul>
        <Link href="/" className="mx-auto mt-3 block w-fit">
          <Image src={logo} alt="Perform MD" width={284} className="object-contain" />
        </Link>
      </div>
      <div className="flex h-16 items-center justify-center bg-[#16181B] px-4 text-center">
        <p className="text-xl font-light leading-none text-[#3B4653]">
          &copy; 2023 Perform MD regenerative orthopedics and spine |{' '}
          <Link href="#">All rights reserved.</Link> | <Link href="#">Privacy Policy</Link> |{' '}
        </p>
      </div>
    </footer>
  );
}
