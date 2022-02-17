import useDepositWithdraw from "@components/providers/hooks/useDepositWithdraw";
import BaseLayout from "@components/ui/common/layout/base";
import DashboardLayout from "@components/ui/common/layout/dashboard";
import ModalComponent from "@components/ui/common/modal";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserWalletInfo } from "redux/slice/walletSlice";

export default function Dashboard({ currentUser }) {
  const dispatch = useDispatch();

  const { open, setOpen, handleOpenModal, handlePayment } =
    useDepositWithdraw();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const userInfo = useSelector((state) => state.auth);
  const { walletInfo } = useSelector((state) => state.wallet);

  //   useEffect(() => {
  //     if (!userInfo?.user) {
  //       router.push("/auth/login");
  //     }
  //   }, [userInfo]);

  useEffect(() => {
    dispatch(getUserWalletInfo());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <ModalComponent
        show={open}
        handleOpenModal={handleOpenModal}
        handlePayment={handlePayment}
      />
      <div className="space-y-4">
        <div className="bg-blue-500 px-8 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:items-center rounded-md p-4">

          <div className="text-white font-bold">
            <h1>Market</h1>
          </div>
          <div className="flex items-center">
            <div className="flex justify-between">
              <input type='text' className="mr-5 px-5 py-2" placeholder="Search Coin Name" />
              <select>
                <option>$</option>
                <option>&#x20b9;</option>
              </select>
            </div>
          </div>
        </div>


        <div className="bg-blue-500 rounded sm:w-1/2 px-5 py-2 bg-blue-500 bg-opacity-25">
          <div className="flex justify-between">
            <p className="font-bold">All Cryptos</p>
            <p className="font-bold">Favourites</p>
            <p className="font-bold">Top Gainers</p>
            <p className="font-bold">Top Loosers</p>
          </div>
        </div>
        <div className="sm:overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden">
          <div className="flex flex-col">
            <div className="-my-2 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3 text-left text-xs uppercase tracking-wider font-bold  border-r-4 border-grey-500">
                          Coins
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-r-4 border-grey-500">
                          Last Price
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-r-4 border-grey-500">
                          24h Change%
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-r-4 border-grey-500">
                          24h High%
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-r-4 border-grey-500">
                          24h Low%
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-r-4 border-grey-500">
                          24h Volume%
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-r-4 border-grey-500">
                          MKP Cap
                        </th>
                        <th scope="col" className="relative py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">BTC</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1.0000</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1.0000</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1.0000</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1.0000</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1.0000</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1.0000</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* <div className="bg-gray-50 flex justify-between items-center rounded-md p-4">
          <div className="py-2">
            <h1 className="font-semibold pb-2 text-center text-xl">
              Balance INR: {walletInfo?.walletInrBalance}
            </h1>
            <div className="flex">
              <div>
                <button
                  onClick={() => setOpen(true)}
                  className="bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  Deposit
                </button>
              </div>

              <div>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="bg-gray-50  items-center rounded-md p-4">


          {/* <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((asset, index) => {
              return (
                <div
                  key={index}
                  className="p-4 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
                >
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      BTC
                    </h1>
                    <h1 className="text-2xl font-semibold text-gray-700  dark:text-white">
                      0.0001
                    </h1>
                  </div>

                  <a
                    href="#"
                    className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </DashboardLayout>
  );
}

Dashboard.Layout = BaseLayout;
