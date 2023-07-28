import { useState } from "react";
import { editdata } from "../action/index.js";

export default function Formsecond({ toggle, id }) {
  const [data, setData] = useState({});

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    editdata(id, data);
    toggle(false);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handlechange} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" onChange={handlechange} />
        <label htmlFor="">company</label>
        <input type="text" name="company_name" onChange={handlechange} />
        <label htmlFor="">phone</label>
        <input type="number" name="phone" onChange={handlechange} />
        <input className="button-4" type="submit" value="update" />
      </form>
    </div>
  );
}
