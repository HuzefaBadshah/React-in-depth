import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantAccordionDetails from "./RestaurantAccordionDetails";
import { clearCart } from "../redux-slices/cartSlice";

function Cart() {

    const cart = useSelector((store) => {
        return store.cart.items;
    });

    const dispatch = useDispatch();

    console.log('store: ', cart);
    return (
        <div className="cart">
            <div className="cart__clear"> <button onClick={() => dispatch(clearCart())}> Clear Cart</button></div>
            {
                cart.map((item) => {
                    return <div key={item.id} className="cart__details"> <RestaurantAccordionDetails detail={{ ...item }} />
                        <p><b>Price is: </b> {`${item.price} * ${item.count} = ${item.totalPrice}`} </p>
                    </div>
                })
            }
        </div>
    )
};

export default Cart;