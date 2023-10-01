import { useState } from "react";
import Button from "../Button/Button";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="container d-flex flex-column mt-5">
      <div className="d-inline-flex mx-auto">
        <Button
          className="btn btn-secondary"
          label="Random Number"
          onClick={generateRandomNumber}
        />
      </div>
      {randomNumber !== null && (
        <p className="mt-3 text-center">
          Generate Random Number : <b>{randomNumber}</b>
        </p>
      )}
    </div>
  );
};

export default RandomNumber;
