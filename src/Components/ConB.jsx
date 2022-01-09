import React, { useContext } from "react";
import { FirstName, LastName } from "../App";

function ConB() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <div>
      <p>
        My name is
        <strong>
          {fname} {lname}
        </strong>
      </p>
    </div>
  );
}

export default ConB;
