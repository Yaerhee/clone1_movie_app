import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

const foodILike = [
  {
    name: 'Pasta'
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/12/14/2e5a56658f3abe62fa741b2958e3354e1.jpg',
  },
  {
    name: 'Samgyeopsal'
    image: 'https://cdn.crowdpic.net/list-thumb/thumb_l_AB0566EA909B44D840ACC8520191F53B.jpg',
  },
];

function App() {
  return (
    <div>
      <h1>어서오세요.</h1>
    </div>
  );
}

export default App;
