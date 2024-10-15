// src/Gallery.jsx
const Gallery = () => {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-cyan-600 p-4 rounded-lg shadow-md hover:scale-95 transform transition-transform duration-300 ease-in-out">
              <img src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
              <p className="text-center text-white">Image 1</p>
            </div>
            <div className="bg-cyan-600 p-4 rounded-lg shadow-md hover:scale-95 transform transition-transform duration-300 ease-in-out">
              <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 2" className="w-full h-48 object-cover rounded-lg mb-4"/>
              <p className="text-center text-white">Image 2</p>
            </div>
            <div className="bg-cyan-600 p-4 rounded-lg shadow-md hover:scale-95 transform transition-transform duration-300 ease-in-out">
              <img src="https://images.pexels.com/photos/17301237/pexels-photo-17301237/free-photo-of-a-car-driving-on-a-road-near-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  " alt="Placeholder 3" className="w-full h-48 object-cover rounded-lg mb-4"/>
              <p className="text-center text-white">Image 3</p>
            </div>
            <div className="bg-cyan-600 p-4 rounded-lg shadow-md hover:scale-95 transform transition-transform duration-300 ease-in-out">
              <img src="https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=600  " alt="Placeholder 3" className="w-full h-48 object-cover rounded-lg mb-4"/>
              <p className="text-center text-white">Image 4</p>
            </div>
            <div className="bg-cyan-600 p-4 rounded-lg shadow-md hover:scale-95 transform transition-transform duration-300 ease-in-out">
              <img src="https://images.pexels.com/photos/172505/pexels-photo-172505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="Placeholder 3" className="w-full h-48 object-cover rounded-lg mb-4"/>
              <p className="text-center text-white">Image 5</p>
            </div>
            <div className="bg-cyan-600 p-4 rounded-lg shadow-md hover:scale-95 transform transition-transform duration-300 ease-in-out ">
              <img src="https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 3" className="w-full h-48 object-cover rounded-lg mb-4 "/>
              <p className="text-center text-white">Image 6</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;
  