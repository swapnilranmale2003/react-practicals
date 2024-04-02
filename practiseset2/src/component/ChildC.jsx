import React, { useContext } from "react";
import { data , data1} from "../App";

function ChildC() {
    const name = useContext (data);
    const gender = useContext(data1);
  return (
    <>
    {/* Context API */}
      {/* <data.Consumer>
        {(name) => {
          return (
                <data1.Consumer>
                    {
                        (gender)=>{
                            return(
                                <h1>My name is {name} and gender is {gender}</h1>
                            )
                        }
                    }
                </data1.Consumer>
          )
        }}
      </data.Consumer> */}
      <h1>My name is {name} and gender is {gender}</h1>
    </>
  );
}

export default ChildC;
