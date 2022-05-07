import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {
  CartContainer,
  Wrapper,
  Title,
  CartTop,
  CartBottom,
  CartTopButton,
  CartTopTexts,
  CartTopText,
  CartInfo,
  CartSummary,
  Product,
  ProductInfo,
  Image,
  Info,
  ProductName,
  ProductId,
  ProductSize,
  ProductColor,
  PriceInfo,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./CartElements";

import { IoMdRemoveCircleOutline } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";

const Cart = () => {
  return (
    <CartContainer>
 
      <Announcement />

      <Wrapper>
        <Title>YOUR LUGGAGE</Title>
        <CartTop>
          <CartTopButton>CONTINUE SHOPPING</CartTopButton>
          <CartTopTexts>
            <CartTopText>Shopping Laggage (3)</CartTopText>
            <CartTopText>Your Wishlist (1)</CartTopText>
          </CartTopTexts>
          <CartTopButton type="empty">CHECKOUT NOW</CartTopButton>
        </CartTop>
        <CartBottom>
          <CartInfo>
            <Product>
              <ProductInfo>
                <Image src="https://www.apetogentleman.com/wp-content/uploads/2021/02/denimtrendsjeans29.jpg" />
                <Info>
                  <ProductName>
                    <b>Product:</b> Denim Jeans Pant
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 23612783
                  </ProductId>
                  <ProductColor color="#0544A1" />
                  <ProductSize>
                    <b>Size:</b> 34.7
                  </ProductSize>
                </Info>
              </ProductInfo>
              <PriceInfo>
                <ProductAmountContainer>
                  <GrAddCircle />
                  <ProductAmount>2</ProductAmount>
                  <IoMdRemoveCircleOutline />
                </ProductAmountContainer>

                <ProductPrice>৳ 655</ProductPrice>
              </PriceInfo>
            </Product>

            <Hr />

            <Product>
              <ProductInfo>
                <Image src="https://cdn.shopify.com/s/files/1/0017/2100/8243/products/CWJ-1_CARBON_826e0095-4273-4eaf-9dd8-6cdf26d5b80a_2000x.jpg?v=1633364090" />
                <Info>
                  <ProductName>
                    <b>Product:</b> Armaani Jacket
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 275312783
                  </ProductId>
                  <ProductColor color="#000000" />
                  <ProductSize>
                    <b>Size:</b> 30.7
                  </ProductSize>
                </Info>
              </ProductInfo>
              <PriceInfo>
                <ProductAmountContainer>
                  <GrAddCircle />
                  <ProductAmount>1</ProductAmount>
                  <IoMdRemoveCircleOutline />
                </ProductAmountContainer>

                <ProductPrice>৳ 755</ProductPrice>
              </PriceInfo>
            </Product>
          </CartInfo>

          <CartSummary>
            <SummaryTitle>ORDER SUMMERY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>৳ 1410</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>৳ 110</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>৳ 110</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>৳ 1410</SummaryItemPrice>
            </SummaryItem>

            <Button>CHECKOUT NOW</Button>
          </CartSummary>
        </CartBottom>
      </Wrapper>

      <Footer />
    </CartContainer>
  );
};

export default Cart;
