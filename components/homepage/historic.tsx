import Image from "next/image"


function about() {
  return (
   
    <div className="container mx-auto bg-white py-12">
    <div className="flex flex-col md:flex-row justify-center">
    <div className="md:w-1/3">
        <Image
          src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364314/cld-sample-2.jpg"
          height="300"
          width="250"
          alt="Stadium"
          className="object-cover w-full h-full rounded-r-xl roundnowimage"
          
          style={{
            aspectRatio: "250/300",
            objectFit: "cover",
          }}
        
        />
      </div>
      <div className="flex flex-col justify-center bg-white p-4 md:p-12  md:w-1/2 rounded-l-xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Why Choose Us</h2>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
            We Are Passionate About Preparing Amazing Events
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4 bg-blue-600 experience">
              <svg className="h-8 w-8 text-white"      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
              <div className="">
                <h3 className="text-lg font-semibold text-white">20 Years Of Experience</h3>
                <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipiscing</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 experience-2">
              <svg className="h-8 w-8 text-blue-600"  xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
              <div>
                <h3 className="text-md font-semibold text-gray-900">A Thousand Events Completed</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing</p>
              </div>
      </div>
      
    </div>
  </div>
  </div>
  </div>
   
  )
}

export default about
