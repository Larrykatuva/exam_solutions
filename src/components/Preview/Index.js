import React, { useState, useEffect }  from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import Navbar from "../Home/Navbar";
import { TiTick } from "react-icons/ti";
import Footer from "../Home/Footer";
import Research from "../../assets/blured.jpg";
import axios from 'axios';

const Index = (props) => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoading] = useState(false);
  const id = props.match.params.id;
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      const search = {
        id: id,
      };
      const login_url = "http://127.0.0.1:8000/search/paper";
      await axios
        .post(login_url, search)
        .then((response) => {
          setData(response.data);
          setLoading(true)
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
  if (!isLoaded) {
    return <div className="App">Loading...</div>;
  }
  console.log(data.description)
  return (
  <>
    <Navbar />
    <div id="preview">
      <h2 id="heading">
        {data.paper.title.slice(0, 50)}...
      </h2>
      <div id="info">
        <div>
          <h2>Uploaded By</h2>
          <p>Exam solutions</p>
        </div>
        <div>
          <h2>Course Title</h2>
          <p>{data.paper.name}</p>
        </div>
        <div>
          <h2>Pages</h2>
          <p>{data.paper.pages}</p>
        </div>
        <div>
          <h2>Rating</h2>
          <p>
            <FaRegThumbsUp id="icon" /> 96+ % (30)
          </p>
        </div>
      </div>
      <h2 id="brief">This preview shows page 1 - {data.paper.pages} out of {data.paper.pages} pages.</h2>
      <div id="pages-content">
        <div id="left">
          <h4>Description</h4>
          <div>
            {data.description.map((row)=>(
              <p>
              <TiTick id="icon" />
              {row.info.slice(0, 20)}...
            </p>
            ))}
          </div>
          <button>
            Buy Now <span>&#8594;</span>
          </button>
        </div>
        <div id="right">
          <img src={Research} alt="" />
        </div>
      </div>
    </div>
    <Footer />
  </>
);
};

export default Index;
