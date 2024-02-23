function about() {
  return (
  <section className="flex flex-col md:flex-row items-center justify-center py-12 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 flex">
          
            <img
              alt="Event Stadium"
              className="object-cover rounded-lg shadow-lg mx-auto"
              src="https://res.cloudinary.com/dxtjjbk95/image/upload/v1708470138/Authentic%20Events/53085570225_68fd931bb8_o_cgrsev.jpg"
              style={{
                height: "600px",
                maxWidth: "600px",
                width: "100%",
              }}
            />
          </div>
          <div className="w-full md:w-1/2  items-center">
              <div className="text-left">
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
      </section>
  )
}

export default about
