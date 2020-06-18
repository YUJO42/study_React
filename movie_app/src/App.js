import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>;
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://media.vlpt.us/images/yujo/post/2243af27-16da-44d5-81f5-a715df9fdde5/leetcode-1299.png",
  },
  {
    name: "hambuger",
    image:
      "https://media.vlpt.us/images/yujo/post/32884cb2-5b96-4503-898b-0c853b4082ab/image.png",
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
