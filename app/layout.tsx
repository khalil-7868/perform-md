import { Metadata } from 'next';

import localFont from 'next/font/local';

import { cn } from 'lib/utils';

import { Footer } from 'components/sections/footer';
import { Header } from 'components/sections/header';

import './globals.css';

const stage_grotesk = localFont({
  src: [
    {
      path: '../fonts/StageGrotesk-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../fonts/StageGrotesk-ThinItalic.ttf',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../fonts/StageGrotesk-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/StageGrotesk-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/StageGrotesk-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/StageGrotesk-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/StageGrotesk-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/StageGrotesk-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../fonts/StageGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/StageGrotesk-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/StageGrotesk-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/StageGrotesk-ExtraBoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/StageGrotesk-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../fonts/StageGrotesk-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-stage-grotesk'
});

const next_sphere = localFont({
  src: [
    {
      path: '../fonts/NextSphereThin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereExtra-Light.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereLight.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereRegular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereMedium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereSemi-Bold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereBold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereExtra-Bold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/NextSphereBlack.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-next-sphere'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(stage_grotesk.variable, next_sphere.variable)}>
      <body className="bg-dark-1E242B">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
