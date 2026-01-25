import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderPastry, restockPastry } from "./pastrySlice";

export default function Pastry() {
  const [pastryAvailable, setPastryAvailable] = useState(true);
  const [restockPastries, setRestockPastries] = useState("");
  const pastryCount = useSelector((state) => {
    return state.pastry.numOfPastries;
  });
  const dispatch = useDispatch();

  const handlePastry = () => {
    if (pastryCount > 0) {
      dispatch(orderPastry());
    } else {
      setPastryAvailable(false);
    }
  };

  const handleRestockPastry = () => {
    const restockNumber = parseInt(restockPastries, 10);
    if (!isNaN(restockNumber) && restockNumber > 0) {
      dispatch(restockPastry(restockNumber));
      setPastryAvailable(true);
      setRestockPastries(""); // Clear input after restocking
    }
  };

  return (
    <div>
      <strong>Number of Pastries:</strong>
      {pastryCount}{" "}
      {!pastryAvailable && (
        <span style={{ color: "red" }}>Sorry! No pastry available now.</span>
      )}
      <br />
      <input
        type="number"
        placeholder="Enter restock amount"
        value={restockPastries}
        onChange={(e) => setRestockPastries(e.target.value)}
        min="1"
      />
      <br />
      <button onClick={handlePastry}>Order Pastry</button>
      <button onClick={handleRestockPastry}>Restock Pastry</button>
    </div>
  );
}
