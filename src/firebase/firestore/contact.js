import { addDoc } from "firebase/firestore";

import { contactDb } from ".";

export const submitContactMessage = async (data = {}) => {
  const createdAt = new Date().getTime();
  try {
    console.log("submitContactMessage data", data);
    const response = await addDoc(contactDb, { ...data, createdAt });
    console.log("submitContactMessage response", response);
    return !!1;
  } catch (error) {
    console.log("submitContactMessage error", error);
    return !!0;
  }
};
