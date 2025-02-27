import  'react'
import Cards from './Cards'
import collectionlist from "../../public/collectionlist.json" 
import { Link } from "react-router-dom";
function Collection() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white dark:bg-gray-900'>

      <div className="mt-16 items-center justify-center text-center">
        <h1 className="pt-20 text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our exclusive collection of beautifully crafted mandaps, decorative items, and event essentials designed to make every occasion grand and memorable. Whether you're planning a wedding, a festive celebration, or a special event, our carefully curated selection offers elegance and tradition in every piece.
          </p>
        </div>
        

        <div className="mt-12 grid grid-cols-1  md:grid-cols-4">
          {collectionlist.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button className="mt-6 mb-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
      </>
  )
}

export default Collection
