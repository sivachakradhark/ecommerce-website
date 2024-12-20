import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.category} - {product.subCategory}</p>
            <p className="text-green-500 font-bold">₹{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
