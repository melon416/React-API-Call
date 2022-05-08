import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [apiResponseData, setApiResponseData] = useState(null);

  useEffect(() => {
    axios
      .post("https://api.signos.com/portal/get_wf_banner_text", "METABOLISM")
      .then((res) => {
        console.log("response", res.data.banner_text);
        setApiResponseData(res.data.banner_text);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  }, []);
  return (
    <div className="App">
      <h1>{apiResponseData}</h1>
    </div>
  );
}
