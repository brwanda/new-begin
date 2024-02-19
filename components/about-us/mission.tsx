"use client";


import  Link  from "next/link";
import Image from 'next/image';

const HostingBanner = () => {
  return (
    <section className="container-fluid bg-blue-500 py-4" >
    <div className="container max-w-7xl mx-auto py-16 px-8 sm:px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="container mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center">
        <div className="mb-8 sm:mb-8 md:mb-0 lg:mb-0 xl:mb-0 md:w-1/2">
          <h2 className="text-4xl font-bold text-white">Mission</h2>
          <p className="text-white mt-4">Authentic Events &apos; mission is to infuse God&apos;s excellence spirit into event management, fostering opportunities for youth while upholding Christian values of integrity and creativity in Rwanda and Africa.</p>
       
        </div>
        <div className="md:w-1/2">
   
             <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364934/left_udez3s.png"
            alt="left"
            width={100}
            height="192"
            className="w-full h-full object-cover"
            style={{  aspectRatio: "384/192", objectFit: "contain",}}
          />
        
        </div>
      </div>
      </div>
    </section>
  );
};

export default HostingBanner;
