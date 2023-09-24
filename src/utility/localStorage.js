import swal from "sweetalert";

const getStoredPhones = () => {
  const getPhones = localStorage.getItem("key");
  if (getPhones) {
    return JSON.parse(getPhones);
  }
  return [];
};

const setPhonesToLS = (id) => {
  const storedPhones = getStoredPhones();
  const isExists = storedPhones.find((pId) => pId === id);
  if (!isExists) {
    storedPhones.push(id);
    localStorage.setItem("key", JSON.stringify(storedPhones));
    swal("Done!", "Product is successfully added", "success");
  } else {
    swal("Error", "This product is already added", "error");
  }
};

export { getStoredPhones, setPhonesToLS };
