

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProductCard from './ProductCard';
import TodoApp from './TodoApp';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Render Todo App above the product section */}
      <TodoApp />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <ProductCard
            name="Wireless Headphones"
            price={99.99}
            description="High-quality wireless headphones with noise cancellation."
            inStock={true}
            image="https://cdn-icons-png.flaticon.com/512/727/727245.png"
          />
          <ProductCard
            name="Smart Watch"
            price={149.99}
            description="Track your fitness and notifications on the go."
            inStock={false}
            image="https://cdn-icons-png.flaticon.com/512/2920/2920257.png"
          />
          <ProductCard
            name="Bluetooth Speaker"
            price={59.99}
            description="Portable speaker with deep bass and long battery life."
            inStock={true}
            image="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
          />
        </div>
      </div>
    </>
  );
}

export default App
