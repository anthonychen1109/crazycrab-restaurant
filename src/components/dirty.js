import React from 'react';

const dirty = [
  {
    item: 'M1.',
    name: 'Blue Crab (Seasonal)',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M2.',
    name: 'Snow Crab Legs',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M3.',
    name: 'Dungeness Crab',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M4.',
    name: 'Stone Crab',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M5.',
    name: 'Red Crab',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M6.',
    name: 'Crawfish',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M7.',
    name: 'Shrimp (Head on)',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M8.',
    name: 'Shrimp (No head)',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M9.',
    name: 'Clams',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M10.',
    name: 'Manila Clams',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M11.',
    name: 'Green Mussel',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M12.',
    name: 'Black Mussel',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M13.',
    name: 'King Crab Legs',
    price: 'LB(M/P)',
    description: ''
  },
  {
    item: 'M14.',
    name: 'Lobster',
    price: 'LB(M/P)',
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

export default Dirty;
