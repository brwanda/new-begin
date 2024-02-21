"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";



const ImagePage: React.FC<{ params: { slug: string } }> = ({ params: { slug } }) => {
  const pathname = usePathname();
    const checkoutpath = slug;
    if(pathname === checkoutpath){
     
    return(
      <div className="modalnow">
          <div className="photo_container">
          <div className="px-3 pt-4 py-3">
        <div className="flex items-center justify-between">
      
      <Link href="/Gallery"><XMarkIcon  className="h-6 w-6"  aria-hidden="true" /></Link>
   
        </div>
      </div>
              <Image src={checkoutpath} alt={checkoutpath} width={100} height={100} style={{width:'100%',height:'100%',objectFit:'cover'}} sizes="60vw" priority/>


          </div>
      </div>
  )

    } else {
        return null;
}
}
export default ImagePage;
