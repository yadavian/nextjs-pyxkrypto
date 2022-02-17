import axios from "axios";

export default async ({ req, path }) => {
  try {
    if (typeof window === "undefined") {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${path}`,
        {
          headers: req.headers,
        }
      );
      return { data };
    } else {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${path}`
      );
      return { data };
    }
  } catch (error) {
    return { data: null };
  }
};
