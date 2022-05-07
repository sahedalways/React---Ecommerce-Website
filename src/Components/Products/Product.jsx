import React from "react";
import { ProductContainer, Circle, Image, Info, Icon } from "./ProductElements";
import { BsCart3 } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({ Item }) => {
  return (
    <ProductContainer>
      <Circle />
      <Image src={Item.img} />
      <Info>
        <Icon>
          <BsCart3 />
        </Icon>

        <Icon>
          <BiSearchAlt2 />
        </Icon>

        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
    </ProductContainer>
  );
};

export default Product;
