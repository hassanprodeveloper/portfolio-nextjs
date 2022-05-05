import { addDoc } from "firebase/firestore";

import { contactDb } from ".";

import { apiPost } from "../../utils";

export const submitContactMessage = async (data = {}) => {
  const createdAt = new Date().getTime();

  try {
    await addDoc(contactDb, { ...data, createdAt });
    await apiPost(`/api/email`, { email: data.email })
      .then((res) => {
        console.log("email confirmation sent",data.email);
      })
      .catch((err) => {
        console.log("email sending error ", err.message);
      });
    return !!1;
  } catch (error) {
    return !!0;
  }
};
