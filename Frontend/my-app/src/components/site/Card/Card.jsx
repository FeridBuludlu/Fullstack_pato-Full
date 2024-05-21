import React, { useContext } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";

const Card = () => {
  const { data, addToBasket } = useContext(MainContext);

  console.log(data);
  return (
    <div classNameName="container">
      <div classNameName="row ">
        <div className="Cards">
          {data.map((item, index) => (
            <div classNameName="col-4" key={index}>
              <div className="card" style={{ width: "23rem" }}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="buttons">
                    <Link to={`/detail/${item._id}`}>
                      Learn More <i class="fa-solid fa-arrow-right"></i>
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        addToBasket(item._id);
                      }}
                    >
                      Add to basket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
