import React from 'react';

const own = [
  {
    item: 'C1.',
    name: 'Blue Crab (Seasonal) 6.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C2.',
    name: 'Shrimp (No Head) 8.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C3.',
    name: 'Snow Crab Legs 8.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C4.',
    name: 'Crawfish 7.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C5.',
    name: 'Shrimp (Head On) 7.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C6.',
    name: 'Clams 6.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C7.',
    name: 'Manila Clams 4.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C8.',
    name: 'Green Mussel 6.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C9.',
    name: 'Black Mussel 6.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'C10.',
    name: 'Sausage 4.5 LB',
    price: 'M/P',
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
    </div>
  )
}

export default Own;
