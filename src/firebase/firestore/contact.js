import { addDoc } from "firebase/firestore";

import { contactDb } from ".";

import { apiPost } from "../../utils";

export const submitContactMessage = async (data = {}) => {
  const createdAt = new Date().getTime();

  try {
    await addDoc(contactDb, { ...data, createdAt });
    await apiPost(`/api/email`, { email: data.email });

    return !!1;
  } catch (error) {
    return !!0;
  }
};
