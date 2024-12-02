import { useEffect, useState } from "react";

function PicOfDay() {
  const [pic, setPic] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/picofday")
      .then((response) => response.json())
      .then((dataResponse) => setPic(dataResponse));
  }, []);

  return <div>{pic && <img src={pic.url}></img>}</div>;
}

export default PicOfDay;
