import { addDoc } from "firebase/firestore";

import { contactDb } from ".";

export const submitContactMessage = async (data = {}) => {
  try {
    const response = await addDoc(contactDb, data);
    console.log("submitContactMessage response", response);
    return !!1;
  } catch (error) {
    console.log("submitContactMessage error", error);
    return !!0;
  }
};
