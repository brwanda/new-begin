export default function Component() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <details className="p-6 border-l-4 bg-white">
              <summary className="font-medium text-lg cursor-pointer">
                What types of events does Authentic Events specialize in managing?
              </summary>
              <p className="mt-4 text-base text-gray-500">
                Authentic Events specializes in managing various events, including corporate conferences, weddings, concerts, crusades and exhibitions. 
              </p>
            </details>
            <details className="p-6 border-l-4  bg-white">
              <summary className="font-medium text-lg cursor-pointer">
                Can I customize event packages to suit my specific needs and budget?
              </summary>
              <p className="mt-4 text-base text-gray-500">
                Yes, Authentic Events offers customizable packages tailored to meet your unique event requirements and budget conditions.
              </p>
            </details>
            <details className="p-6 border-l-4  bg-white">
              <summary className="font-medium text-lg cursor-pointer">
                How does Authentic Events handle unexpected challenges or changes during an event?
              </summary>
              <p className="mt-4 text-base text-gray-500">
                Authentic Events has a dedicated team trained to handle unexpected challenges efficiently, ensuring smooth event execution and client satisfaction.
              </p>
            </details>
          </div>
          <div className="space-y-4">
            <details className="p-6 border-l-4  bg-white">
              <summary className="font-medium text-lg cursor-pointer">
                How far in advance should I book Authentic Events for my upcoming event?
              </summary>
              <p className="mt-4 text-base text-gray-500">
                We recommend booking Authentic Events at least 3-6 months in advance to ensure availability and seamless event planning.
              </p>
            </details>
            <details className="p-6 border-l-4  bg-white">
              <summary className="font-medium text-lg cursor-pointer">
                What equipment and resources does Authentic Events provide for event rentals?
              </summary>
              <p className="mt-4 text-base text-gray-500">
                Authentic Events offers a comprehensive range of equipment and resources, including audio-visual gear,
                staging, and decor, to enhance your event.
              </p>
            </details>
{/*             <details className="p-6 border-l-4 bg-white">
              <summary className="font-medium text-lg cursor-pointer">Can I Cancel Anytime?</summary>
              <p className="mt-4 text-base text-gray-500">
                Authentic Events provides flexible cancellation policies, allowing clients to make changes to their
                bookings as needed.
              </p>
            </details> */}
          </div>
        </div>
      </div>
    )
  }
  
