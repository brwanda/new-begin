import Image from 'next/image';
import Link from 'next/link';
import { MyImgUrl } from '@/newdata';

const Gallery = () => {
  return (
    <div className='container  max-w-7xl mx-auto bg-white py-12'>
         <div className="text-center py-3">
            <h2 className="text-base font-semibold uppercase tracking-wide text-gray-600">Last Events</h2>
            <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Discover Gallery</p>
            <div className="mt-5 max-w-md mx-auto">
              <div className="text-center">
                <span className="inline-block text-gray-600 slok px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  ALL
                </span>
              </div>
            </div>
          </div>
    <div className="now">
      <div className="gallery">
        {
        MyImgUrl.map((MyImgUrl, index) => (
        <Link key={index} href={`/Image/${index}`}>
 <Image
            src={MyImgUrl}
            alt={MyImgUrl}
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg nowimage"
            style={{width:'95%', height: '100%', objectFit: 'contain'}}
            sizes='60vw' priority
          />
          </Link>
          ))
        }
        </div>
        
      
      </div>
      
    </div>

  );
};

export default Gallery;
