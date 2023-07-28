import Store from "../store";
import { EDITDATA, GETDATA } from "./actiontype";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
const dbcollection = collection(db, "employee");
let arr = [];

const getUser = async () => {
  const newdata = await getDocs(dbcollection);
  arr = newdata.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const editUser = async (id, data) => {
  const userdoc = doc(dbcollection, id);
  await updateDoc(userdoc, data);
};

export const getdata = async (id) => {
  await getUser(id);
  Store.dispatch({
    type: GETDATA,
    payload: {
      loading: false,
      error: false,
      data: arr,
    },
  });
};

export const editdata = async (id, data) => {
  await editUser(id, data);
  Store.dispatch({
    type: EDITDATA,
    payload: {
      data: data,
    },
  });
};
