import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../redux/selector';
import { IMG_URL } from '../constant/constant';
import { cartActions } from '../redux/cartSlice';

const Cart = () => {
  const selectedCartItems = useSelector(selectItems);
  const dispatch = useDispatch();
  const handleRemoveItem = () => {

  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  }

  return (
    <div>
      <h1 className='m-10'>Cart Items</h1>
      <button className='btn btn-danger mx-10 my-5' onClick={handleClearCart}>Clear Cart</button>
      <div className='flex flex-col'>
      {
        selectedCartItems.map((item) => {
          return (
            <div className="h-auto w-[800px] mx-4 my-4 pl-5 bg-gray-100 border-solid border-1 border-gray-400 rounded-lg shadow-lg flex flex-row justify-start items-center hover:bg-orange-100">
              <img
                className="h-56 w-56 my-3 rounded-lg border-solid border-1 border-gray-400"
                src={IMG_URL + item?.imageId}
              />
              <div className="w-90 h-full flex flex-col justify-start items-start">
                <h4 className="mx-3 my-1 text-black text-xl font-bold">
                  {item?.name}
                </h4>
                <h6 className="mx-3 my-0 text-gray-500 text-xs">
                  {item?.category}
                </h6>
                <h5 className="mx-3 my-1 text-black text-sm">
                  {item?.description}
                </h5>
                <h5 className="mx-3 my-0 text-green-600 text-sm font-bold">
                {item?.defaultPrice ? item?.defaultPrice / 100 : item?.price / 100}
                </h5>
                <button className="mt-3 ml-3 px-3 py-2 rounded-lg bg-red-700 text-white border-1 border-transparent border-solid hover:bg-red-900" onClick={handleRemoveItem}>
                  Remove Item
                </button>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart;