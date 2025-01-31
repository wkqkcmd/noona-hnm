import React from "react";
import { useNavigate } from "react-router-dom";


const ProductCard = ({item}) => {

  const navigate = useNavigate();

  const showProduct = () => {
    navigate(`/products/${item.id}`)
  }

  return (
    <div>
        <div className="card" onClick={()=>{showProduct(item.id)}}>
          <img src={item?.img}></img>
          <div>{item?.choice===true?"concious choice":""}</div>
          <div>{item?.title}</div>
          <div>{item?.price}원</div>
          <div>{item?.new === true?"new":""}</div>
        </div>
    </div>
  );
};

export default ProductCard;

