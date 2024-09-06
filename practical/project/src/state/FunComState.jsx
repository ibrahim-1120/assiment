import React, { useState } from "react";
import { Button } from "reactstrap";

let count = { a: 90 };
count = 91;

count = { a: count.a + 1 };
count = { a: count.a - 1 };
count = { a: count.a + 10 };

export default function FunComState() {
  // let [ state, method to chnage state] = useState(inital value)
  let [x, setX] = useState(100);
  let [count, setCount] = useState({ a: 90, b: 20 });
  // console.log("-----------  count----------->", count);

  function incrementX(params) {
    setX(x + 1);
  }

  function decreaseX(params) {
    setX(x - 1);
  }

  function plusfiveX(params) {
    setX(x - 5);
  }
  function minusfiveX(params) {
    setX(x - 5);
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const incrementCount = () => {
    console.log("--->");
    // ... for copy old data while state is an object or array
    setCount({ ...count, a: count.a + 1 });
  };

  const minus1 = () => {
    setCount({ ...count, a: count.a - 1 });
  };
  const plus10 = () => {
    setCount({ ...count, a: count.a + 10 });
  };
  const Bminus1 = () => {
    setCount({ ...count, b: count.b - 1 });
  };
  const Bplus10 = () => {
    setCount({ ...count, b: count.b + 10 });
  };




  return (
    <div>
      <h1>X is {x}</h1>
      <Button onClick={() => incrementX()}>X+1</Button>
      {/* <Button onClick={incrementX}>X+</Button> */}
      <Button onClick={() => decreaseX()}>X-1</Button>


      <Button onClick={() => plusfiveX()}>X-5</Button>
      <Button onClick={() => minusfiveX()}>X+5</Button>

      <hr />

      <h1>count-A is {count.a}</h1>
      <Button onClick={() => incrementCount()}>Count-A + 1</Button>
      <Button onClick={() => minus1()}>Count-A - 1</Button>
      <Button onClick={() => plus10()}>Count-A + 10 </Button>


      <hr />
      <h1>count-B is {count.b}</h1>
      <Button onClick={() => setCount({ ...count, b: count.b + 1 })}>
        Count-B +
      </Button>

      <Button onClick={() => Bminus1()}>Count-B - 1</Button>
      <Button onClick={() => Bplus10()}>Count-B + 10 </Button>
    </div>
  );
}
