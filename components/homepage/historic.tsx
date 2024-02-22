import Image from "next/image"

export default function Component() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center py-12 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 space-y-8">
           
            <img
              alt="Event Stadium"
              className="object-cover rounded-lg shadow-lg mx-auto"
               src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708470192/Authentic%20Events/53436739222_72f0fd4dc2_o_p4g6dt.jpg"
              style={{
                height: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="place-items-center py-3 p-3">
             <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">Why Choose Us</div>
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              We Are Passionate About Preparing Amazing Events
            </h2>
            <p className="text-gray-600">
              Glimpse our portfolio to see the magic we've created for past events. Let us bring your vision to life!
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-4 rounded-lg shadow-md bg-blue-900">
               <svg className="text-white h-6 w-6"  
                xmlns="http://www.w3.org/2000/svg"
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
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">20 Years Of Experience</h4>
{/*                   <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipiscing</p> */}
                </div>
              </div>
              <div className="flex items-center p-4 mt-4 rounded-lg shadow-lg bg-white space-x-4">
                 <svg  className="text-blue-600 h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
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
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">A Hundred Events Completed</h3>
{/*                   <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing</p> */}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
