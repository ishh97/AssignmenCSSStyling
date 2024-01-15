export default function App(){
  return(
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-red-600 p-8">
      <div className="flex items-center  text-white mr-7">
        <p className="font-bold text-xl">Kalvium</p>
      </div>

      <div className="w-full block flex-grow  sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <p className="block mt-5 sm:inline-block sm:mt-0 text-teal-400 mr-4">
            About Us
          </p>
          <p className="block mt-5 sm:inline-block sm:mt-0 text-teal-400  mr-4">
           Contacts
          </p>
          <p className="block mt-5 sm:inline-block sm:mt-0 text-teal-400 ">
            Courses
          </p>
        </div>
        <div>
          <p className="inline-block text-sm px-6 py-2 border rounded text-white border-white  mt-5 md:mt-0">
            Login</p>
        </div>
      </div>
    </nav>

    <div className="container mt-5 mx-auto px-2">
      <button className="bg-blue-700  text-white font-bold py-2 px-6 rounded">
       Button One
      </button>

      <div className="bg-red-300 border border-red-400 text-red-700 px-6 py-3 rounded  my-5" >
        <strong className="font-bold">Alert!</strong>
        <p className="block sm:inline"> This is awesome!</p>
      </div>
    </div>
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl mb-5 mt-5">
     
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-12 w-12" />
      
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-800">Kalvium Store</h4>
        <p className="text-base text-gray-700">You have a new course!</p>
      </div>
    </div>

    <footer className="bg-gray-200 text-center lg:text-left">
      <div className="text-gray-700 text-center p-5">
        © 2021 Copyright:
        <p className="text-gray-900">Kalvium</p>
     </div>
    </footer>
  </div>
  )
}