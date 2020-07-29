import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Pasta',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/12/14/2e5a56658f3abe62fa741b2958e3354e1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.crowdpic.net/list-thumb/thumb_l_AB0566EA909B44D840ACC8520191F53B.jpg',
    rating: 4.9,
  },
];


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
