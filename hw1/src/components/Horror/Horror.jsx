import React from "react";

const Horror = () => {
  const HorrorText = (event) => {
    const text = event.target.value;
    console.log(text + " ОБЕРНИСЬЬЬЬ⛧....проклятие сработало⛧  ");
  };

  return (
    <input type="text" onChange={HorrorText} placeholder="Введите свое имя..." />
  );
};

export default Horror;