import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyProduct, sellProduct } from '../actions';

const products = [
  { 
    id: 1, 
    name: 'SpaceX Ticket', 
    price: 55000000,
    image: '/images/space x.jpg' 
  },
  { 
    id: 2, 
    name: 'ChatGpt', 
    price: 90400000000, 
    image: '/images/chat.jpg' 
  }, 
  { 
    id: 3, 
    name: 'Superyacht', 
    price: 100000000,  
    image: '/images/super.jpg' 
  },  
  { 
    id: 4, 
    name: 'Tesla Model S', 
    price: 80000,
    image: '/images/tesla.jpg' 
  },
  { 
    id: 5, 
    name: 'Private Jet', 
    price: 10000000,
    image: '/images/jet.jpg' 
  },
  { 
    id: 6, 
    name: 'Luxury Yacht', 
    price: 50000000,
    image: '/images/luxury.jpg' 
  },
  { 
    id: 7, 
    name: 'New York Knicks (NBA Team)', 
    price: 4500000000,
    image: '/images/knicks.jpg' 
  },
  { 
    id: 8, 
    name: 'Gold Bar (1kg)', 
    price: 60000,
    image: '/images/gold.jpg' 
  },
  { 
    id: 9, 
    name: 'Diamond Ring (5 Carat)', 
    price: 1000000,
    image: '/images/ring.jpg' 
  },
  { 
    id: 10, 
    name: 'Rolex Watch', 
    price: 15000,
    image: '/images/rolex.jpg' 
  },
  { 
    id: 11, 
    name: 'Small Island', 
    price: 20000000,
    image: '/images/island.jpg' 
  },
  { 
    id: 12, 
    name: 'Twitter', 
    price: 15000000000,
    image: '/images/twitter.png' 
  },
  { 
    id: 13, 
    name: 'Super Bowl Ad (30 Seconds)', 
    price: 7000000,
    image: '/images/superbowl.jpg' 
  },
  { 
    id: 14, 
    name: 'Painting by Picasso', 
    price: 150000000,
    image: '/images/picasso.jpg'
  },
  { 
    id: 15, 
    name: 'Rare Stamp Collection', 
    price: 2500000,
    image: '/images/rare.jpg'
  },
];

function Products() {
  const balance = useSelector(state => state.balance);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleBuy = (product) => {
    if (balance >= product.price) {
      dispatch(buyProduct(product));
    } else {
      alert("Not enough money!");
    }
  }

  const handleSell = (product) => {
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
      dispatch(sellProduct(product));
    }
  }

  return (
    <div>
      <h2>Balance: ${balance.toLocaleString()}</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price.toLocaleString()}</p>
            </div>
            <div className="product-buttons">
              <button onClick={() => handleBuy(product)}>Buy</button>
              <button onClick={() => handleSell(product)}>Sell</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;