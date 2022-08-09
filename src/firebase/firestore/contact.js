import { addDoc } from "firebase/firestore";
import axios from "axios";

import { contactDb } from ".";
import { SEND_EMAIL_API_ROUTE } from "../../constants/urls";
``;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + process.env.AUTHORIZATION_BEARER,
};

export const submitContactMessage = async (data = {}) => {
  const createdAt = new Date().getTime();

  try {
    await addDoc(contactDb, { ...data, createdAt });
    console.log("message added to firestore");

    const response = await axios.post(
      SEND_EMAIL_API_ROUTE,
      {
        email: data.email,
      },
      {
        headers,
      }
    );

    console.log("apiPost response", response);

    return response.data;
  } catch (error) {
    return { statusCode: 400, message: "Something Went wrong" };
  }
};
