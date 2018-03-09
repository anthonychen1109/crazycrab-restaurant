import React from 'react';

const side = [
  {
    item: 'S1.',
    name: 'Corn On The Cob (3)',
    price: '$2.50',
    description: ''
  },
  {
    item: 'S2.',
    name: 'Potato (3)',
    price: '$2.00',
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
    name: 'Sausage (1 LB)',
    price: '$8.00',
    description: ''
  },
  {
    item: 'S9.',
    name: 'Extra Condiments',
    price: '$0.50',
    description: '(Garlic Butter, BBQ, Buffalo)'
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
      <h1>Sides</h1>
      {side_list}
    </div>
  )
}

export default Side;
