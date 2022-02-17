import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHeaders } from "redux/slice/walletSlice";

export default ({ url, method, body }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const [header, setHeader] = useState({});

  console.log("header", header);

  const doRequest = async () => {
    try {
      setErrors(null);
      console.log(
        "`${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`",
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`
      );
      const response = await axios[method](
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`,
        body,
        header
      );
      return response.data;
    } catch (error) {}
  };

  return { doRequest, errors };
};
