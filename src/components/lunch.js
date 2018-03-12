import React from 'react';

const lunch = [
  {
    item: 'L1.',
    name: 'Fried Flouder',
    price: '$7.99',
    description: ''
  },
  {
    item: 'L2.',
    name: 'Fried Tilapia',
    price: '$7.99',
    description: ''
  },
  {
    item: 'L3.',
    name: 'Fried Shrimp',
    price: '$7.99',
    description: ''
  },
  {
    item: 'L4.',
    name: 'Chicken Wing',
    price: '$7.99',
    description: ''
  },
  {
    item: 'L5.',
    name: 'Shrimp (Head on)',
    price: '$8.50',
    description: ''
  },
  {
    item: 'L6.',
    name: 'Crawfish',
    price: '$8.50',
    description: ''
  },
  {
    item: 'L7.',
    name: 'Green Mussel',
    price: '$7.99',
    description: ''
  },
  {
    item: 'L8.',
    name: 'Black Mussel',
    price: '$7.99',
    description: ''
  }
]

const Lunch = () => {
  const lunch_list = lunch.map((item, index) => {
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
      <h1>Lunch Specials</h1>
      <p>Mon - Fri from 11:00 AM - 3:00 PM only</p>
      <p>All lunch specials include French Fries and salad.</p>
      {lunch_list}
    </div>
  )
}

export default Lunch;
