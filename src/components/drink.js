import React from 'react';

const drink = [
  {
    item: '1.',
    name: 'Bottle Water',
    price: '$2.00',
    description: ''
  },
  {
    item: '2.',
    name: 'Soda (Free refills, one size)',
    price: '$2.75',
    description: '(Coke, Diet Coke, Sprite, Orange, Lemonade, Rootbeer, Sweet Tea)'
  },
  {
    item: '3.',
    name: 'Domestic Beer',
    price: '$3.00',
    description: '(Budweiser, Bud Light, Miller Light)'
  },
  {
    item: '4.',
    name: 'Imported Beer',
    price: '??',
    description: '(Heineken, Heineken Light, Corona, Corona Light, Sapparo, Shocktop, Landshark)'
  }
]

const Drink = () => {
  const drink_list = drink.map((item, index) => {
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
      <h1>Drinks</h1>
      {drink_list}
    </div>
  )
}

export default Drink;
