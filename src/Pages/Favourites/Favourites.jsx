import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredPhones } from "../../utility/localStorage";
import Favourite from "../../components/Favourite/Favourite";
import swal from "sweetalert";

const Favourites = () => {
  const [addFavourites, setAddFavourites] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [price, setPrice] = useState(0);

  const myPhones = useLoaderData();

  useEffect(() => {
    const getPhones = getStoredPhones();
    if (myPhones.length) {
      const savedPhones = myPhones.filter((phone) =>
        getPhones.includes(phone.id)
      );
      setAddFavourites(savedPhones);
      const total = savedPhones.reduce(
        (prev, current) => prev + current.price,
        0
      );

      setPrice(total.toFixed(2));
    }
  }, [myPhones]);

  const handleClearData = () => {
    localStorage.clear();
    setAddFavourites([]);
    swal("Good!", "Products successfully deleted", "success");
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="space-y-3 text-center mb-16">
        <button
          onClick={handleClearData}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg"
        >
          Clear Data
        </button>

        <h2 className="text-xl font-medium">Total Price: ${price}</h2>
      </div>

      <div>
        {showMore ? (
          <div>
            {addFavourites.map((favourite) => (
              <Favourite key={favourite.id} favourite={favourite}></Favourite>
            ))}
          </div>
        ) : (
          <div>
            {addFavourites.slice(0, 2).map((favourite) => (
              <Favourite key={favourite.id} favourite={favourite}></Favourite>
            ))}
          </div>
        )}
      </div>

      <div>{addFavourites.length === 0 && <p>No Data Found!!!</p>}</div>
      <div className="">
        <button
          onClick={handleShowMore}
          className="bg-blue-500 px-3 py-4 rounded-lg text-white"
        >
          {!showMore ? "Show More" : "Show less"}
        </button>
      </div>
    </div>
  );
};

export default Favourites;
