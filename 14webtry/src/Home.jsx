// src/Home.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Home = () => {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap">

          <div className="w-full lg:w-[75%]  ">
          <h1 className="text-4xl font-bold mb-6 text-center ">Welcome to My DemoWeb</h1>
          <p className="text-lg mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        
          
         
          {/* <div className="text-center">
            <a href="#about" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</a>
          </div> */}
          <div className="mx-6 my-3">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:border-y-[4px] border-blue-700 ">
                <h3 className="text-xl font-semibold mb-2 ">Service 1</h3>
                <p>Description of service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:border-y-[4px] border-blue-700">
                <h3 className="text-xl font-semibold mb-2">Service 2</h3>
                <p>Description of service 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:border-y-[4px] border-blue-700">
                <h3 className="text-xl font-semibold mb-2 ">Service 3</h3>
                <p>Description of service 3. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          </div>
          <div className="w-full lg:w-[25%] bg-white rounded-lg p-4 text-center hover:border-y-[4px] border-blue-900">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p>Here you can follow us on social media.</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                  <FaInstagram size={24} />
                </a>
                  
                 <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <FaDiscord size={24} />
              </a>
              </div>
            </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Home;
  