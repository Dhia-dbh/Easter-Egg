import "./shopItem.css";

const ShopItem = ({ image, productName, price, onClick }) => {
  return (
    <div className="shop-item">
      <div className="image">
        <img
          src={image}
          width="200px"
          style={{ border: "2px" }}
          onClick={onClick}
        />
      </div>
      <div className="productName">{productName}</div>
      <div className="productPrice">{price}</div>
      <div>
        <button className="btn btn-primary button2"> Add to Cart </button>
      </div>
    </div>
  );
};

export default ShopItem;
