import React from 'react';

const seasonal = [
  {
    item: '1.',
    name: 'Lobster',
    price: 'SP',
    description: ''
  },
  {
    item: '2.',
    name: 'King Crab',
    price: 'SP',
    description: ''
  },
  {
    item: '3.',
    name: 'Snow Crab',
    price: 'SP',
    description: ''
  },
  {
    item: '4.',
    name: 'Dungeness Crab',
    price: 'SP',
    description: ''
  }
]

const Seasonal = () => {
  const seasonal_list = seasonal.map((item, index) => {
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
      <h1>Seasonal Seafood</h1>
      {seasonal_list}
    </div>
  )
}

export default Seasonal;
