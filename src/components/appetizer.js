import React from 'react';

const appetizer = [
  {
    item: 'A1.',
    name: 'Kani Salad',
    price: '$6.50',
    description: ''
  },
  {
    item: 'A2.',
    name: 'Cocktail Shrimp (10)',
    price: '$8.50',
    description: ''
  },
  {
    item: 'A3.',
    name: 'Hush Puppies(10)',
    price: '$3.50',
    description: ''
  },
  {
    item: 'A4.',
    name: 'Fried Cheese Stick (6)',
    price: '$5.50',
    description: ''
  },
  {
    item: 'A5.',
    name: 'Onion Rings',
    price: '$4.50',
    description: ''
  },
  {
    item: 'A6.',
    name: 'Fried Calamari (15)',
    price: '$7',
    description: ''
  },
  {
    item: 'A7.',
    name: 'Chicken Wings',
    price: '(6) $5.50 / (12) $9.50',
    description: '(Breaded, BBQ, Buffalo Cajun, Lemon Pepper)'
  },
  {
    item: 'A8.',
    name: 'Raw Oyster',
    price: '(6) $9 / (12) $17',
    description: ''
  }
]

const Appetizer = () => {
  const appetizer_list = appetizer.map((item, index) => {
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
      <h1>Appetizer</h1>
      {appetizer_list}
    </div>
  )
}

export default Appetizer;
