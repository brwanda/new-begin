import Link from "next/link"
import Image from "next/image"

export default function Component() {
    return (
      <div className="bg-[#f8fafc] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-gray-600">Discover Gallery</h2>
            <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Last Events</p>
            <div className="mt-5 max-w-md mx-auto">
              <div className="text-center">
                <span className="inline-block text-gray-600 slok px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  ALL
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
            <Link href="/gallery">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  alt="Crossover 2023"
                  className="w-full h-full object-center object-cover"
                  height="320"
                  src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708470195/Authentic%20Events/53437994094_102e8b0057_o_djshos.jpg"
                  style={{
                    aspectRatio: "320/320",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="absolute inset-0 hover:bg-gradient-to-t hover:from-yellow-400 hover:to-blue-500 hover:opacity-75" />
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                  <div>
                    <p className="text-sm font-medium text-white">31.DEC.2023</p>
                    <p className="text-xl font-bold text-white">CROSSOVER 2023</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="group relative">
            <Link href="/gallery">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  alt="Apostolic Tour"
                  className="w-full h-full object-center object-cover"
                  height="320"
                  src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708470155/Authentic%20Events/53158705580_cb32330684_o_akvrqr.jpg"
                  style={{
                    aspectRatio: "320/320",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="absolute inset-0 hover:bg-gradient-to-t from-gray-700 to-gray-900 opacity-75" />
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                  <div>
                    <p className="text-sm font-medium text-white">18.AUG.2023</p>
                    <p className="text-xl font-bold text-white">APOSTOLIC TOUR</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="group relative">
            <Link href="/gallery">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  alt="Africa Haguruka24"
                  className="w-full h-full object-center object-cover"
                  height="320"
                  src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708629593/Authentic%20Events/52359375923_28e046b4a4_o_b9oowz.jpg"
                  style={{
                    aspectRatio: "320/320",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="absolute inset-0 hover:bg-gradient-to-t from-gray-800 to-gray-500 opacity-75" />
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                  <div>
                    <p className="text-sm font-medium text-white">23.JULY.2023</p>
                    <p className="text-xl font-bold text-white">AFRICA HAGURUKA24</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
