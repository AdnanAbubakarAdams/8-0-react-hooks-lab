import React, {useState} from "react";
import "./NumberOfPets.css";

// class NumberOfPets extends React.Component {
//   render() {
//     return (
//       <section className="num-of-pets">
//         <h4>Number of Pets</h4>
//         <h5>numOfPets</h5>
//         <div>
//           <button id="less">-</button>
//           <button id="more">+</button>
//         </div>
//       </section>
//     );
//   }
// }




const NumberOfPets = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num+1)
  }
  const decrease = () => {
    if (num <= 0) {
      setNum(0)
    } else {
      setNum(num-1)
    }
    
  }

  return (
          <section className="num-of-pets">
            <h4>Number of Pets</h4>
            <h5>{num}</h5>
            <div>
              <button onClick= {decrease} id="less">-</button>
              <button onClick={increase} id="more">+</button>
            </div>
          </section>
        );
}


export default NumberOfPets;
