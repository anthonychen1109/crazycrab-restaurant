import React from 'react';

const dirty = [
  {
    item: 'M1.',
    name: 'Blue Crab (Seasonal) 12 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M2.',
    name: 'Shrimp (No Head) 16 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M3.',
    name: 'Snow Crab Legs 17 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M4.',
    name: 'Crawfish 10 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M5.',
    name: 'Shrimp (Head On) 14 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M6.',
    name: 'Clams 10 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M7.',
    name: 'Manila Clams 9.5 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M8.',
    name: 'Green Mussel 12 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M9.',
    name: 'Black Mussel 12 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M10.',
    name: 'King Crab Legs 30 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M11.',
    name: 'Lobster 20 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M12.',
    name: 'Dungeness 24 LB',
    price: 'M/P',
    description: ''
  },
  {
    item: 'M13.',
    name: 'Stone Crab Claws SP LB',
    price: 'M/P',
    description: ''
  }
]

const Dirty = () => {
  const dirty_list = dirty.map((item, index) => {
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
      <h1>Get Your Hands Dirty</h1>
      {dirty_list}
    </div>
  )
}

export default Dirty;
