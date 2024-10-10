import React from "react";
import moment from "moment";

export default function() {
  return <div>
            <h1>TOVID DFREI- Portfolio</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            Contact
          </div>;
  
}