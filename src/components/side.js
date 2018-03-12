import React from 'react';

const side = [
  {
    item: 'S1.',
    name: 'Corn',
    price: '$0.75/pc',
    description: ''
  },
  {
    item: 'S2.',
    name: 'Potato',
    price: '$0.75/pc',
    description: ''
  },
  {
    item: 'S3.',
    name: 'Cajun Fries',
    price: '$3.00',
    description: ''
  },
  {
    item: 'S4.',
    name: 'Sweet Potato Fries',
    price: '$4.00',
    description: ''
  },
  {
    item: 'S5.',
    name: 'French Fries',
    price: '$3.00',
    description: ''
  },
  {
    item: 'S6.',
    name: 'Steamed Rice',
    price: '$2.00',
    description: ''
  },
  {
    item: 'S7.',
    name: 'Sausage (1/2 LB)',
    price: '$4.00',
    description: ''
  },
  {
    item: 'S8.',
    name: 'Sausage (4.5 LB)',
    price: '$8.00/LB',
    description: ''
  },
  {
    item: 'S9.',
    name: 'Extra Condiments',
    price: '$0.50',
    description: '(Garlic Butter, BBQ, Buffalo)'
  },
  {
    item: 'S10.',
    name: 'Clam Chowder',
    price: '$5.50',
    description: ''
  },
  {
    item: 'S11.',
    name: 'House Seafood Soup',
    price: '$5.50',
    description: ''
  },
]

const Side = () => {
  const side_list = side.map((item, index) => {
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
      <h1>Sides/Soup</h1>
      {side_list}
      <p>* Raw or undercooked foods may cause illness!</p>
    </div>
  )
}

export default Side;
