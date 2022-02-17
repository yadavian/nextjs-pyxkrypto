import useDepositWithdraw from "@components/providers/hooks/useDepositWithdraw";
import BaseLayout from "@components/ui/common/layout/base";
import DashboardLayout from "@components/ui/common/layout/dashboard";
import ProfileLayout from "@components/ui/common/layout/profile";
import ModalComponent from "@components/ui/common/modal";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const History = () => {

    const { open, setOpen, handleOpenModal, handlePayment } = useDepositWithdraw();

    const router = useRouter();
    const userInfo = useSelector((state) => state.auth);

    // useEffect(() => {
    //   if (!userInfo?.user) {
    //     router.push("/auth/login");
    //   }
    // }, [userInfo]);

    return <>
        {/* {userInfo?.user?.email} */}
        <DashboardLayout>
            <ModalComponent
                show={open}
                handleOpenModal={handleOpenModal}
                handlePayment={handlePayment}
            />
            <div className="space-y-4">

                <div className="my-5">
                    <p className="text-2xl font-bold flex justify-center">History</p>

                    <div className="w-1/2 flex justify-between m-auto my-5">
                        <button className="px-20 py-4 leading-5 text-black font-bold transition-colors duration-200 transform bg-cyan-400 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-gray-600">TRADE HISTORY</button>
                        <button className="px-20 py-4 leading-5 text-black font-bold transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">TRADE HISTORY</button>
                    </div>
                </div>

                <div className="my-5 flex justify-end">
                    <div className="w-1/2 flex justify-between  my-5 px-10">
                        <p className="text-base font-bold flex justify-center">From : </p>
                        <p className="text-base font-bold flex justify-center">To : </p>
                        <button className="px-5 py-1 leading-5 text-white font-bold transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-gray-600">Download Report</button>
                    </div>
                </div>

                <div className="w-full">


                    <div className="sm:overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden">
                        <div className="flex flex-col">
                            <div className="-my-2 sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold border-4 border-black-800">
                                                        Date & Time
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        Transaction ID
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        PAIR
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        AMOUNT
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        PRICE
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        TOTAL
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        ACTION
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        TYPE
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 text-left text-xs uppercase tracking-wider font-bold  border-4 border-grey-500">
                                                        STATUS
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">14/02/20 20.45</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">9Y123E123R586</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">BTC/INR</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">1.0000 BTC</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">39658745.23 INR</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">4000 INR</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">BUY</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">MARKET</div>
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">SUCCESS</div>
                                                    </td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </DashboardLayout>
    </>

};

History.Layout = BaseLayout;

export default History;
