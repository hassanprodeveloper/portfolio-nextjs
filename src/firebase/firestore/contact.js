import { addDoc } from "firebase/firestore";

import { contactDb } from ".";

export const submitContactMessage = async (data = {}) => {
  const createdAt = new Date().getTime();

  try {
    await addDoc(contactDb, { ...data, createdAt });

    return !!1;
  } catch (error) {
    return !!0;
  }
};
