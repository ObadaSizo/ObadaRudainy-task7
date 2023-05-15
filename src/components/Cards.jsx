import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CardCompnent from "./Card";


function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!cards.length) {
      axios
        .get("http://localhost:3000/products", {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        })
        .then((res) => setCards(res.data));
    }
  });
  
  return (
      <div className="container my-5">
        <h1 className="text-center py-5 myh1 position-relative fs-1 fw-bolder">Products</h1>
      <div className="row mt-5">
        {cards.map((card) => {
          return (
            <div className="col-md-4 col-sm-6">
              <CardCompnent data={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;