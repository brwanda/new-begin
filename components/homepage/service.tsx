import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white py-12" id="Our-services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">How it&apos;s work</p>
{/*           <Button className="text-sm" variant="secondary">
            Get Started
          </Button>
         */}
          </div>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">Our Services</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-row items-center p-8 bg-gray-100 rounded-lg shadow">
  <div className="flex items-center justify-center h-16 w-24 rounded-full bg-yellow-500 ">
    <span className="text-2xl font-bold text-white">01</span>
  </div>
  <div className="ml-8 textdiv">
    <h3 className="text-lg font-medium text-gray-900">Event Consultancy</h3>
    <p className="mt-2 text-base text-gray-500">
      Guidance and support for planning and executing successful events.
    </p>
  </div>
</div>


          <div className="flex flex-row items-center p-8 bg-gray-100 rounded-lg shadow">
  <div className="flex items-center justify-center h-16 w-24 rounded-full bg-red-500 ">
    <span className="text-2xl font-bold text-white">02</span>
  </div>
  <div className="ml-8 textdiv">
    <h3 className="text-lg font-medium text-gray-900">Event Production</h3>
    <p className="mt-2 text-base text-gray-500">
    Specialized services including sound system, lighting, video/photo production, and stage design.
    </p>
  </div>
</div>

                 <div className="flex flex-row items-center p-8 bg-gray-100 rounded-lg shadow">
  <div className="flex items-center justify-center h-16 w-24 rounded-full bg-blue-500 ">
    <span className="text-2xl font-bold text-white">03</span>
  </div>
  <div className="ml-8 textdiv">
    <h3 className="text-lg font-medium text-gray-900">Event Rentals</h3>
    <p className="mt-2 text-base text-gray-500">
    Information about equipment available for rent and rental packages offered by Authentic Events.
    </p>
  </div>
</div>

{/*                          <div className="flex flex-row items-center p-8 bg-gray-100 rounded-lg shadow">
  <div className="flex items-center justify-center h-16 w-24 rounded-full bg-blue-700 ">
    <span className="text-2xl font-bold text-white">04</span>
  </div>
  <div className="ml-8 textdiv">
    <h3 className="text-lg font-medium text-gray-900">Evaluation Events</h3>
    <p className="mt-2 text-base text-gray-500">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    </p>
  </div>
</div> */}

        </div>
      </div>
    </div>
  )
}
