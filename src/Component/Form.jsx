import { useState } from "react";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Form({ toggle, editdata }) {
  const [data, setData] = useState({});
  const dbcollection = collection(db, "users");

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const userdoc = doc(dbcollection, editdata.id);
    await updateDoc(userdoc, data);
    toggle(false);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handlechange} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" onChange={handlechange} />
        <label htmlFor="">password</label>
        <input type="number" name="phone_no" onChange={handlechange} />
        <input className="button-4" type="submit" value="update" />
      </form>
    </div>
  );
}
