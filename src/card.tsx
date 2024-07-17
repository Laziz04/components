import { Card, Slide } from "@mui/material";
import { Fade } from "react-awesome-reveal";

export type cardType = {
  src?: string;
  title?: string;
  desc?: string;
};

const Cards = ({ src, title, desc }: cardType) => {
  return (
    <div data-aos="zoom-in">
      <Fade>
        <Card
          sx={{
            width: "280px",
            height: "380px",
            margin: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            transition: "0.3s",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "200px",
            }}
            src={src}
            alt=""
          />
          <div className="card_body mt-2 p-4 text-center">
            <h4>{title}</h4>

            <p className=" mt-2">{desc}</p>
          </div>
        </Card>
      </Fade>
    </div>
  );
};

export default Cards;
