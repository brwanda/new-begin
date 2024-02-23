"use client";

import Link from "next/link";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, LocateFixedIcon, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
   <div
   className="bg-cover "
   style={{
    backgroundImage: "url('https://res.cloudinary.com/dxtjjbk95/image/upload/v1708554222/Authentic%20Events/Home_Mg_re8srs.jpg')",
     height: "23vh",
   }}>
<div className="container mx-auto px-5 py-4 flex justify-between items-center">
    
</div>
<div className="container-fluid mx-auto px-5 py-4 ">
   <Popover className="headernow container mx-auto flex items-center  px-8 py-2 h-24">
   <Image
      src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708472818/Authentic%20Events/FULL_LG_kmurtg.png"
      width={150}
      height={300}
      alt="Picture of the author"
      className="brand-2"
      
    />
    <div className="grow">
      <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
        <Link className="text-white linkson text-bold" href="./">HOME</Link>
        <Link className="text-white linkson" href="/about-us">ABOUT US</Link>
        <Link className="text-white linkson" href="/gallery">GALLERY</Link>
        <Link className="text-white linkson" href="/overview">OVERVIEW</Link>

      </div>
    </div>
    <div className="flex grow items-center justify-end sm:hidden">
      <Popover.Button className="inline-flex  items-center justify-center rounded-md text-white p-2 hover:border-none ">
        <span className="sr-only">Open Menu</span>
        <Bars3Icon className="sm:h-13 sm:w-12 w-8 h-9  hover:border-none "  aria-hidden="true"/>
      </Popover.Button>

    </div>
    <Popover.Panel
    focus
    className="absolute inset-x-0 bottom-4 orgin-top-right transform p-2 transition md:hidden overflow-none">
      <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">

        <div className="px-3 pt-3 ">
          <div className="flex items-center justify-between">
          <Popover.Button className="inline-flex  items-right justify-right rounded-md  p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
        <span className="sr-only">close Menu</span>
        <XMarkIcon className="h-6 w-6"  aria-hidden="true"/>
      </Popover.Button>
          </div>
        </div>
        <div className="mt-6 pb-1 pt-1">
          <nav className="grid gap-y-8 items-center justify-center">
          <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 px-2 " href="./">HOME</Link>
          <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 px-2" href="/about-us">ABOUT US</Link>
          <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 px-2" href="/gallery">GALLERY</Link>
          <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 px-2" href="/overview">OVERVIEW</Link>
          </nav>

        </div>
        <div className="mt-6 pb-3 pt-2">
        <div className="">
    <Link  href="https://store.awm-global.org/" target="_blank"><center><Button className="text-white btnheader ">AUTHENTIC STORE</Button></center></Link>
    </div>
           </div>
      </div>

    </Popover.Panel>
    <div className="hidden sm:block">
    <Link  href="https://store.awm-global.org/" target="_blank"><Button className="text-white btnheader">AUTHENTIC STORE</Button></Link>
    </div>
   </Popover>
   <div className="md:py-5"></div>

    </div>
    </div>
  
   </>
  );
}
