import React from 'react'
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link'
function footer() {
  return (
    <footer className="bg-[#1d3057] text-white">
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            
        <Image
      src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708472818/Authentic%20Events/FULL_LG_kmurtg.png"
      width={150}
      height={300}
      alt="Picture of the author"
      className="brand-2"
      
    />
            
          </div>
          <p className="flex items-center space-x-2 mb-2">
            
            <Mail className="text-white h-6 w-6" />
            <span>info@Authenticevents.rw</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone className="text-white h-6 w-6" />
            <span>+250 781 898 310</span>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-blue-500" href="./">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" href="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" href="/overview">
               Overview
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Usefull Links</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-blue-500" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                Disclaimer
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                Terms & Condition
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                GDPR
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Tuned With Us</h3>
          <p className="mb-4">Explore our services or contact us to start planning your next memorable event.</p>
          <div className="flex space-x-4">
            <Facebook className="text-white h-6 w-6" />
            <Instagram className="text-white h-6 w-6" />
            <Linkedin className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>2024 | AUTHENTIC EVENTS.</p>
      </div>
    </div>
  </footer>
  )
}

export default footer
