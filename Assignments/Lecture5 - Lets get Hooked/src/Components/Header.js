import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import useConnection from "../hooks/useConnection";

const loginUser = () => {
  // call an API to make user login/logout
};

export const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  const connection = useConnection();

  return (
    <div className="flex justify-between bg-orange-500">
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
