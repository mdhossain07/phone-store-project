import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-medium text-center">All Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Phones;
