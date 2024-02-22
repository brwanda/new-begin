import { Button } from "@/components/ui/button"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"


export default function Component() {
     const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-400 tracking-wide uppercase">EVENTS SERVICES</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:text-left">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">Blog/News</h3>
            </div>
            <div className="text-center">
              <p className="max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
     <Carousel  plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
            >
      <CarouselContent className="-ml-1">
      <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="p-1">
              <div className="flex-shrink-0">
                <Image
                  alt=""
                  className="h-48 w-full object-cover"
                  height="192"
                  src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364315/cld-sample-3.jpg"
                  style={{
                    aspectRatio: "384/192",
                    objectFit: "cover",
                  }}
                  width="384"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Authentic Events</p>
                  <p className="mt-3 text-base text-gray-500">Transforming the Event Management Landscape in Rwanda</p>
                </div>
                <div className="mt-6">
                  <Button className="w-full btnheader-2 text-white">Read More</Button>
                </div>
              </div>
              </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="p-1 ">
              <div className="flex-shrink-0">
              <Image
                  alt=""
                  className="h-48 w-full object-cover"
                  height="192"
                  src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364314/cld-sample-2.jpg"
                  style={{
                    aspectRatio: "384/192",
                    objectFit: "cover",
                  }}
                  width="384"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Elevate Your Events with Authentic Events</p>
                  <p className="mt-3 text-base text-gray-500">Join Us on a Journey of Excellence</p>
                </div>
                <div className="mt-6">
                  <Button className="w-full btnheader-2 text-white">Read More</Button>
                </div>
              </div>
              </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 lex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="p-1 f">
              <div className="flex-shrink-0">
              <Image
                  alt=""
                  className="h-48 w-full object-cover"
                  height="192"
                  src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364314/cld-sample.jpg"
                  style={{
                    aspectRatio: "384/192",
                    objectFit: "cover",
                  }}
                  width="384"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Mastering Event Planning</p>
                  <p className="mt-3 text-base text-gray-500">7 Tips for Hosting Successful Events in all moment</p>
                </div>
                <div className="mt-6">
                  <Button className="w-full btnheader-2 text-white">Read More</Button>
                </div>
              </div>
              </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 lex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="p-1 f">
              <div className="flex-shrink-0">
              <Image
                  alt=""
                  className="h-48 w-full object-cover"
                  height="192"
                  src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364314/cld-sample.jpg"
                  style={{
                    aspectRatio: "384/192",
                    objectFit: "cover",
                  }}
                  width="384"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Company Event</p>
                  <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
                <div className="mt-6">
                  <Button className="w-full btnheader-2 text-white">Read More</Button>
                </div>
              </div>
              </div>
              </CarouselItem>
            </CarouselContent>
          
            </Carousel>
    
           
        </div>
       
      </div>
    </div>
  )
}

