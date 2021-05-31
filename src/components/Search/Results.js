import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Result";
import Research from "../../assets/research.png";

const Results = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const search = {
        search: "katuva",
      };
      const login_url = "http://127.0.0.1:8000/search/all";
      await axios
        .post(login_url, search)
        .then((response) => {
          setData(response.data.papers);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    };
    fetchData();
  }, []);

  console.log(data);
  if (data) {
    return (
      <div id="results">
        <h2 id="heading">
          Results For <span>{search}</span>
        </h2>
        <div id="row">
          {data.map((row) => (
            <Result
              image={Research}
              id={row.id}
              title={row.title}
              pages={row.pages}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Results;
