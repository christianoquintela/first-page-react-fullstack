import React, { useState, useEffect } from "react";
import api from "../../service";
import ModelPage from "../ModelPage/index";

function PaginaPrincipal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/hello").then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div>
      <ModelPage>
        <h1>aloha!</h1>
        <h2>{data.msg}</h2>
      </ModelPage>
    </div>
  );
}

export default PaginaPrincipal;
