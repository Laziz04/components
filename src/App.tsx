import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Card } from "@mui/material";
import Cards from "./card";

function App() {
  return (
    <div className="App">
      <Box>
        <div className=" text-center ">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            900 Residential Projects
          </h1>
          <br />
          <p
            style={{
              fontSize: "22px",
              fontWeight: "normal",
              color: "#757575",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city-9.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city90.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city90.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city235.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city235.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city235.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/4680.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
          <Cards
            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/4680.jpg"
            title="4 Cannon Street"
            desc="Sample text. Click to select the Text Element."
          />
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            background: "#000",
            marginTop: "20px",
            color: "#fff",
          }}
          className="footer"
        >
          <p>�� 2022 My Website. All rights reserved.</p>
        </Box>
      </Box>
    </div>
  );
}

export default App;
