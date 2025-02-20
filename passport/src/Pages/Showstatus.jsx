import React, { useEffect, useState } from "react";

function Showstatus() {
  const [id, setId] = useState([]);
  useEffect(() => {
    let id = localStorage.getItem("appoinmentid");
    console.log(id);
    setId(id);
  }, []);
  return <div>
    {id}
  </div>;
}

export default Showstatus;
