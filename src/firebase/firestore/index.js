import { collection } from "firebase/firestore";

import { CONTACT_FIRESTORE_COL } from "../../constants/index";

import { db } from "..";

export const contactDb = collection(db, CONTACT_FIRESTORE_COL);
