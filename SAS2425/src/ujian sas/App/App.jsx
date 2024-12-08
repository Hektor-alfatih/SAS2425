import react from 'react';
import Card from './Card/card.jsx';
import { products } from './data/data.jsx';

function App() {
    return (
        <div className="container">
          {products
          .filter(
            (product) => parseInt(product.price.replace(/[\D]/g, "")) > 4000000
          )
          .map((product) => (
            <Card
              key={product.id}
              h2={product.name}
              h3={product.price}
              paragraph={product.description}
              src={product.imageUrl}
              alt={product.name}
            />
          ))}
        </div>

    );
}

export default App