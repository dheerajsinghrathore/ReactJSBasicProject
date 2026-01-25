import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderCake, restockCake } from "./cakeSlice";

export default function Cake() {
  const [cakeAvailable, setCakeAvailable] = useState(true);

  const cakeCount = useSelector((state) => {
    return state.cake.numOfCakes;
  });

  const dispatch = useDispatch();

  const handleCake = () => {
    if (cakeCount > 0) {
      dispatch(orderCake());
    } else {
      setCakeAvailable(false);
    }
  };

  const handleRestockCake = () => {
    dispatch(restockCake())
    setCakeAvailable(true)
  }

  return (
    <div>
      <strong>Number of Cakes:</strong>
      {cakeCount}{" "}
      {!cakeAvailable && (
        <span style={{ color: "red" }}>Sorry! No cakes available now.</span>
      )}
      <br />
      <button onClick={handleCake}>Order Cake</button>
      <button onClick={handleRestockCake}>Restock Cake</button>
    </div>
  );
}
