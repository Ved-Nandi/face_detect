import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Imagelink from "./components/Imagelink";
import Face from "./components/Face";
import Rank from "./components/Rank";
import Particles from "react-particles-js";
import "tachyons";
import "./App.css";
import React, { useState } from "react";
import Singin from "./components/Singin";
import Register from "./components/Register";

const HEROKU_URL = "https://radiant-dusk-10748.herokuapp.com/";

const App = () => {
  const part = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 700,
        },
      },
    },
  };

  const [imgurl, setImgurl] = useState("");
  const [Iurl, setIurl] = useState("");
  const [Box, setBox] = useState([]);
  const [Rout, setRout] = useState("Login");
  const [Small, setSmall] = useState({ check: false, msg: "" });

  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  const calFace = (data) => {
    const image = document.getElementById("inputimg");
    let keyno = 0;
    let boxdata = data.outputs[0].data.regions.map((d) => {
      let markdata = d.region_info.bounding_box;
      const width = Number(image.width);
      const height = Number(image.height);
      let mesure = {
        left: markdata.left_col * width,
        top: markdata.top_row * height,
        right: width - markdata.right_col * width,
        bottom: height - markdata.bottom_row * height + 5,
      };

      return <div className="bounding-box" key={keyno++} style={mesure}></div>;
    });
    return boxdata;
  };

  const disbox = (box) => {
    setBox(box);
  };

  const onChange = (event) => setImgurl(event.target.value);

  // omsubmit function
  const onSubmit = () => {
    setSmall({ check: false, msg: "" });
    console.log(Small);
    let body = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imgurl }),
    };
    // fetching clarifai data
    fetch(HEROKU_URL + "clarifai", body)
      .then((data) => data.json())
      .then((res) => disbox(calFace(res)))
      .catch((err) => setSmall({ check: true, msg: "check url" }));

    setIurl(imgurl);

    const bodyD = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userData.id }),
    };

    fetch(HEROKU_URL + "image", bodyD)
      .then((data) => data.json())
      .then((data) => {
        setUserData(Object.assign(userData, { entries: data }));
      });
  };

  // route change
  const rout_change = (event) => {
    setRout(event);
  };

  return (
    <div>
      <Particles params={part} className="part" />

      {Rout === "Login" ? (
        <Singin
          check={rout_change}
          setUserData={setUserData}
          errmsg={{ Small, setSmall }}
        />
      ) : Rout === "register" ? (
        <div>
          <Navigation
            check={rout_change}
            text={"Login"}
            errmsg={setSmall}
            setnull={{ setImgurl, setIurl }}
          />
          <Register
            check={rout_change}
            setUserData={setUserData}
            errmsg={{ Small, setSmall }}
          />
        </div>
      ) : (
        <div>
          <Navigation
            check={rout_change}
            text={"Logout"}
            setnull={{ setImgurl, setIurl }}
            errmsg={setSmall}
          />
          <Logo />
          <Rank userData={userData} />
          <Imagelink onChange={onChange} onSubmit={onSubmit} errmsg={Small} />
          <Face box={Box} imgurl={Iurl} />
        </div>
      )}
    </div>
  );
};

export default App;
