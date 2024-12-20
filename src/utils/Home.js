import React from 'react';
import { products } from '../utils/data';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
