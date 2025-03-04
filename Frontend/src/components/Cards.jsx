import 'react'
import PropTypes from 'prop-types';

function Cards({ item }) {
    console.log(item);
  return (
    <>
    <div className=" mx-auto my-3 mt-4 p-2">

        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-gray-900 dark:text-white ">
            <figure>
                <figure className="flex justify-center items-center h-[250px]">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-[200px] max-w-full object-contain"
                    />
                </figure>

            </figure>

            <div className="card-body">
            <h2 className="card-title">
                {item.name}
                {item.category.toLowerCase() !== "free" && (
                    <div className="badge badge-secondary">{item.category}</div>
                )}
            </h2>

                <p>{item.description}</p>
                <div className="card-actions flex justify-end">
                    <div className="badge badge-outline px-2 py-1">₹ {item.price}</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}Cards.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};


export default Cards;
