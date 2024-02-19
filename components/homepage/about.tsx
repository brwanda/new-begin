import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

function about() {
  return (
   
    <div className="container mx-auto bg-white py-12">
    <div className="flex flex-col md:flex-row justify-center">
      <div className="flex flex-col justify-center bg-white p-4 md:p-12 md:w-1/2 rounded-l-xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">About Us</h2>
        <h1 className="mt-4 text-2xl md:text-4xl font-bold leading-tight text-gray-900">
          We Better Your Needs And Develop A Customized Plan That Fits Your Unique Needs
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Authentic Events, a subsidiary of Authentic Development Agency (ADA), is a profit-making company dedicated to
          revolutionizing the events sector in Rwanda and the region
        </p>
       <Link href="/About-us"> <Button className="mt-6 w-full md:w-48 bg-blue-600 text-white roundnow">Learn More</Button></Link>
      </div>
      <div className="md:w-1/3">
        
        
        <Image
          alt="Stadium"
          className="object-cover w-full h-full rounded-r-xl roundnowimage"
          src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364315/cld-sample-4.jpg"
          width="250"
          height="300"
          style={{
            aspectRatio: "250/300",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  </div>
   
  )
}

export default about
