import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';
import faker from 'faker';

export default function productListItem(props) {  
  return <div className='product-list-item'>
    <h3> {props.product.name}</h3>
   <img 
      height={100}
      title={faker.commerce.productName()}
      src={`/products/${props.product.img}`} 
      alt='products'/>
    <div>{props.product.category}</div>
    <div>{props.product.gender}</div>
    <div>{props.product.type}</div>
    <div> { props.product.description }</div>
    <div>{ `$${faker.commerce.price()} `}</div>
    <div>
      <AddBtn 
      cartItem = {props.cartItem} 
      product={props.product} 
      addToCart ={props.addToCart}
      />

      {
        props.cartItem
        ? <RemoveBtn 
      cartItem = {props.cartItem} 
      product={props.product} 
      removeFromCart ={props.removeFromCart}
      />
      : null
      }
      
    </div>
  </div>
}