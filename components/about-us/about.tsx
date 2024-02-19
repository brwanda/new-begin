import { Button } from "../ui/button"
import Image from "next/image"

function about() {
  return (
   
    <div className="container mx-auto bg-white py-12">
    <div className="flex flex-col md:flex-row justify-center">
    <div className="md:w-1/3">
      
    <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364315/cld-sample-3.jpg"
            alt="Stadium"
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-r-xl roundnowimage"
            style={{  aspectRatio: "250/300", objectFit: "cover",}}
          />
     
      </div>
      <div className="flex flex-col justify-center bg-white p-4 md:p-12 md:w-1/2 rounded-l-xl">
        <h1 className="mt-4 text-4xl  font-bold leading-tight text-gray-900 py-4">
        About Us
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Authentic Events, a subsidiary of Authentic Development Agency (ADA), is a profit-making company dedicated to revolutionizing the events sector in Rwanda and the region. 
With over two decades of experience in organizing mega events, we specialize in event production and management, aiming to provide lasting solutions while creating resilient job opportunities for community members.
Our team comprises seasoned professionals with a wealth of experience in event management. 
We are committed to providing innovative solutions that exceed client expectations and contribute to the growth and development of the industry. Through our expertise and dedication, we strive to make a meaningful impact on the events landscape while upholding the values of authenticity, excellence, and community empowerment.
        </p>
      </div>
     
    </div>
  </div>
   
  )
}

export default about
