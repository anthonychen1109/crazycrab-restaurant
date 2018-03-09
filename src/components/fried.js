import React from 'react';

const fried = [
  {
    item: 'F1.',
    name: 'Fried Shrimp Basket (8)',
    price: '$10',
    description: ''
  },
  {
    item: 'F2.',
    name: 'Fried Tilapia Basket (4)',
    price: '$10',
    description: ''
  },
  {
    item: 'F3.',
    name: 'Fried Catfish Basket (4)',
    price: '$10',
    description: ''
  },
  {
    item: 'F4.',
    name: 'Fried Oyster Basket (10)',
    price: '$11',
    description: ''
  },
  {
    item: 'F5.',
    name: 'Chicken Tender Basket (4)',
    price: '$9',
    description: ''
  }
]

const Fried = () => {
  const fried_list = fried.map((item, index) => {
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
      <h1>Something Fried</h1>
      {fried_list}
    </div>
  )
}

export default Fried;
