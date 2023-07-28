import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import Form from "./Form";

function Table() {
  const [arr, setArr] = useState([]);
  const [ID, setID] = useState(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const dbcollection = collection(db, "users");

  const getUser = async () => {
    setLoading(true);
    const newdata = await getDocs(dbcollection);
    setArr(newdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };
  useEffect(() => {
    getUser();
  }, []);

  function handleEdit(id) {
    setActive(!active);
    setID(id);
  }

  return (
    <>
      {active ? <Form toggle={setActive} editdata={ID} /> : ""}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? arr?.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.phone_no}</td>
                    <button
                      className="button-4"
                      onClick={() => {
                        handleEdit(el);
                      }}
                    >
                      Edit
                    </button>
                  </tr>
                );
              })
            : "loading..."}
        </tbody>
      </table>
    </>
  );
}
export default Table;
