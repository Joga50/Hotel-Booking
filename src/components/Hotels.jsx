import React from "react";
import hotelsData from "../assets/scripts/data";
import Card from "./Card";

function Hotels(props) {
  return (
    <div className="hotelsContainer">
      <div>
        {hotelsData.map((eachHotel) => (
          <div>
            <Card hotel={eachHotel} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hotels;
