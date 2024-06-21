import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import useConnection from "../hooks/useConnection";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../redux/selector";


const loginUser = () => {
  // call an API to make user login/logout
};

export const HeaderComponent = () => {
  const connection = useConnection();
  const [isLogin, setIsLogin] = useState(false);
  const selectedItems = useSelector(selectItems);

  return (
    <div className="flex justify-between bg-orange-300">
      <Title />
      <ul className="flex py-10 mr-8 mb-0">
        <li className="px-2">
          <Link className="no-underline text-black text-xl font-bold" to="/">
            Home
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="no-underline text-black text-xl font-bold"
            to="/about/profile">
            About Us
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="no-underline text-black text-xl font-bold"
            to="/instamart">
            Instamart
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="no-underline text-black text-xl font-bold"
            to="/cart">
            Cart 
          </Link>
          <span className='items-center rounded-md bg-teal-700 px-2 m-1 py-1 text-xs font-medium text-white'>{selectedItems.length}</span>
        </li>
        {connection ? (
          <li className="px-2">🟢</li>
        ) : (
          <li className="px-2">🔴</li>
        )}
        {isLogin ? (
          <li
            className="px-2 no-underline text-black text-xl font-bold"
            onClick={() => setIsLogin(false)}>
            Logout
          </li>
        ) : (
          <li
            className="px-2 no-underline text-black text-xl font-bold"
            onClick={() => setIsLogin(true)}>
            Login
          </li>
        )}
      </ul>
    </div>
  );
};
