import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 0,
    notebooks: 0,
    pens: 0,
  });

  const handleChange = (items, value, changeBy) => {
    if (value + changeBy < 0) {
      return;
    }
    if (value + changeBy >= 10) {
      alert("maximum quantity reached");
      return;
    }
    if (items === "books") {
      setInv({ ...inv, books: value + changeBy });
    } else if (items === "notebooks") {
      setInv({ ...inv, notebooks: value + changeBy });
    } else if (items === "pens") {
      setInv({ ...inv, pens: value + changeBy });
    }
  };

  return (
    <div className="main">
      <div className="part1">
        <h1> My Store </h1>
      </div>
      <div className="part2">
        <div className="items">
          <img
            src="https://shop.googlemerchandisestore.com/store/20160512512/assets/items/largeimages/GGOEGOLC014299.jpg"
            alt="img1"
          />
          <h4>Books : </h4>
          <button
            onClick={() => handleChange("books", inv.books, 1)}
            className="circlularButton"
          >
            Add 1
          </button>
          <button
            onClick={() => handleChange("books", inv.books, -1)}
            className="circlularButton"
          >
            Sub 1
          </button>
          <h4> Cart : {inv.books}</h4>
        </div>
        <div className="items">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyE6IMCzxishIPhGfUEMpquqCgoBZjeb62OGNO526de4mb-mfvgLMeDU2TxItkumPwCouS6quzPR-WBLSLgbjmMUmrcsgSGW3TKL5f-tED&usqp=CAE"
            alt=""
          />
          <h4>Notebooks : </h4>
          <button
            onClick={() => handleChange("notebooks", inv.notebooks, 1)}
            className="circlularButton"
          >
            Add 1
          </button>
          <button
            onClick={() => handleChange("notebooks", inv.notebooks, -1)}
            className="circlularButton"
          >
            Sub 1
          </button>
          <h4> Cart : {inv.notebooks}</h4>
        </div>
        <div className="items">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/keokpe80/pen/w/c/n/cello-aspro-mavro-ball-pen-set-pack-of-50-pens-with-stand-original-imafvaffvjgg83h4.jpeg?q=70"
            alt=""
          />
          <h4>Pen : </h4>
          <button
            onClick={() => handleChange("pens", inv.pens, 1)}
            className="circlularButton"
          >
            Add 1
          </button>
          <button
            onClick={() => handleChange("pens", inv.pens, -1)}
            className="circlularButton"
          >
            Sub 1
          </button>
          <h4> Cart : {inv.pens}</h4>
        </div>
      </div>
      <div className="part3">  
      <p>  
        Total : {inv.books + inv.notebooks + inv.pens}{" "}
      </p>
      </div>
      {/* calculating total and showing it */}
    </div>
  );
};
