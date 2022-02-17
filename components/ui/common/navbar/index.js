import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@components/ui/common";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "redux/slice/authSlice";

const Navbar = ({ currentUser }) => {
  const { pathname } = useRouter();
  const router = useRouter();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth);

  const signOutHandler = async () => {
    try {
      const { data, status } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signout`
      );

      if (status === 200) {
        dispatch(addUserData(null));
        router.push("/");
      }
    } catch (error) {}
  };

  return (
    <>
      <header className="sticky top-0 z-10 h-14 flex items-center justify-between bg-stone-800 shadow-md">
        <div className="flex h-14 items-center pl-4">
          {/* <img
            //   className="h-full"
            src="https://www.fivesquid.com/pics/t2/1538397410-97640-2-1.png"
          /> */}
          <Link href={`${userInfo?.user ? "/dashboard" : "/"}`}>
            <h2 className="text-2xl cursor-pointer tracking-tight font-extrabold text-white">
              Pyxkrypto
            </h2>
          </Link>
        </div>
        {/* <div className="ml-8"></div> */}

        <div className="flex items-center px-4 py-4">
          <div className="hidden sm:block">
            <ul className="flex items-center">
              <li className="mr-6">
                <Link href="/">
                  <button className="btn btn-ghost text-white btn-sm">
                    Home
                  </button>
                </Link>
              </li>
              {userInfo?.user && (
                <li className="mr-6">
                  <Link href="/dashboard/wallet">
                    <button className="btn btn-ghost btn-sm text-white">
                      Wallet
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            {!userInfo?.user ? (
              <button className="btn btn-ghost btn-sm text-white">
                <Link href="/auth/signup">Signup</Link>
              </button>
            ) : (
              <button className="btn btn-ghost btn-sm text-white mr-6">
                <Link href="/dashboard/profile">Profile</Link>
              </button>
            )}
          </div>

          {userInfo?.user && (
            <button
              onClick={signOutHandler}
              className="btn btn-ghost btn-sm text-white"
            >
              Logout
            </button>
          )}

          <button
            // onClick={}
            className="h-8 w-8 sm:hidden ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
