import { useEffect, useState } from "react";

function PicOfDay() {
  const [pic, setPic] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/picofday")
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        setPic(dataResponse);
      });
  }, []);

  return (
    <div>
      {pic ? (
        <div className="w-4/6">
          <h1>{pic.title}</h1>
          <img className="w-5/6" src={pic.url}></img>
          <p>{pic.explanation}</p>
        </div>
      ) : (
        <h1>Loading</h1>
      )}{" "}
    </div>
  );
}

export default PicOfDay;
