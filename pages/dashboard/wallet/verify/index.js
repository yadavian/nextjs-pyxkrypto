import BaseLayout from "@components/ui/common/layout/base";
import Image from "next/image";

export default function WalletVerify({ currentUser }) {
  return (
    <>
      <div className="h-full w-full py-24  flex justify-center">
        <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="mt-2">
            <p className="text-center text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
              Please enter your bank details
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

WalletVerify.Layout = BaseLayout;
