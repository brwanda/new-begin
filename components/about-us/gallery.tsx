import Image from 'next/image';

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
    <div className="gallery">
 
          <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364315/cld-sample-3.jpg"
            alt=""
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg nowimage"
            style={{width:'95%', height: '100%', objectFit: 'contain'}}
            sizes='60vw' priority
          />
        <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364314/cld-sample.jpg"
            alt=""
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg nowimage"
            style={{width:'95%', height: '100%', objectFit: 'contain'}}
            sizes='60vw' priority
          />
         
       
      
          <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708365901/rectangle-15-38Z_htq6ku.jpg"
            alt=""
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg nowimage"
            style={{width:'95%', height: '100%', objectFit: 'contain'}}
            sizes='60vw' priority
          />
         
          <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364314/cld-sample-2.jpg"
            alt=""
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg nowimage"
            style={{width:'95%', height: '100%', objectFit: 'contain'}}
            sizes='60vw' priority
          />
         
          <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708364944/rectangle-8-bg-1dF_zeatvc.jpg"
            alt=""
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg nowimage"
            style={{width:'95%', height: '100%', objectFit: 'contain'}}
            sizes='60vw' priority
          />
       
       
          <Image
            src="https://res.cloudinary.com/diymc30tp/image/upload/v1708366825/rectangle-16-fAV_ndzpt0.jpg"
            alt="KA"
            width={100}
            height={100}
            className="rounded-lg nowimage"
            style={{width:'95%', height: '100%', objectFit: 'contain'}}
            sizes='60vw' priority
          />
         
        </div>
      
      </div>
      
    
  );
};

export default Gallery;
