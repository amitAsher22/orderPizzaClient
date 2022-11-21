import React, { useEffect } from "react";
import Pizza from "../components/Pizza";

import { useDispatch, useSelector } from "react-redux";
import getallpizzas from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getallpizzas());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Somthing went wrong" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
