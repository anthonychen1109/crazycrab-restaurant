import React from 'react';

const own = [
  {
    item: 'C1.',
    name: 'Blue Crab (Seasonal)',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C2.',
    name: 'Shrimp (No Head)',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C3.',
    name: 'Snow Crab Legs',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C4.',
    name: 'Crawfish',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C5.',
    name: 'Shrimp (Head On)',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C6.',
    name: 'Clams',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C7.',
    name: 'Manila Clams',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C8.',
    name: 'Green Mussel',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C9.',
    name: 'Black Mussel',
    price: '1/2 LB (M/P)',
    description: ''
  },
  {
    item: 'C10.',
    name: 'Sausage',
    price: '1/2 LB $4.00',
    description: ''
  },
]

const Own = () => {
  const own_list = own.map((item, index) => {
    return (
      <div key={item+index}>
        <div className="menu-items animated bounceIn">
          <p className="menu-item-item">{item.item}</p>
          <p>{item.name}</p>
          <p className="menu-item-price">{item.price}</p>
        </div>
        <div className="menu-description">
          <p>{item.description.length > 0 && item.description}</p>
        </div>
      </div>
    )
  })
  return (
    <div className="menu-items-container container">
      <h1>Make Your Own Seafood Combo</h1>
      {own_list}
      <br />
      <h5>What Seasoning Would You Like?</h5>
      <p>Cajun, Garlic Butter, Lemon Pepper, Crazy Special (All of the above)</p>
      <br />
      <h5>Spicy Level</h5>
      <ul className="spicy-level">
        <p>Mild</p>
        <p>Medium</p>
        <p>Hot</p>
        <p>Extra Spicy</p>
      </ul>
    </div>
  )
}

export default Own;
