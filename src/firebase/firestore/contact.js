import { addDoc } from "firebase/firestore";

import { contactDb } from ".";

import { apiPost } from "../../utils";

export const submitContactMessage = async (data = {}) => {
  const createdAt = new Date().getTime();

  const apiResp = await apiPost(`/api/email`, { email: data.email });

  try {
    await addDoc(contactDb, { ...data, createdAt, emailSent: !!apiResp?.ok });

    return !!1;
  } catch (error) {
    return !!0;
  }
};
