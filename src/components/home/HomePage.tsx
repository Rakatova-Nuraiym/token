import { useState } from "react";
import {
  useDeleteProductsMutation,
  useGetProductsQuery,
  usePostProductsMutation,
} from "../../redux/api/crud/product";
import scss from "./home.module.scss";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const { data, isLoading } = useGetProductsQuery();
  const [postProducts] = usePostProductsMutation();
  const [deleteProducts] = useDeleteProductsMutation();
  const navigate = useNavigate();

  const addProduct = async () => {
    const product = {
      productName,
      quantity,
      price,
      photoUrl,
    };
    await postProducts(product);
  };

  const deleteProductsFunc = async (id: number) => {
    console.log(id);

    await deleteProducts(id);
  };

  const goBack = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    navigate("/");
  };
  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <button onClick={addProduct}>add product</button>
      <button onClick={goBack}>выйти</button>
      {isLoading ? (
        <h1>...Isloading</h1>
      ) : (
        <div className={scss.mainProduct}>
          {data?.map((item) => (
            <div className={scss.products} key={item._id}>
              <div>
                <h1>{item.productName}</h1>
                <p>quantity:{item.quantity}</p>
                <p>price:{item.price}</p>
              </div>
              <img src={item.photoUrl} alt="" />
              <button onClick={() => deleteProductsFunc(item._id)}>
                delete product
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
