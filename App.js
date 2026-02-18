import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Wheatherdata from './components/Wheatherdata';
import React, { useState, useRef } from "react";



function App() {
  let [city, setCity] = useState("");
  const weatherFn = useRef(null);
  return (
    <>
      <Header />
      <div className='flex justify-center mt-10'>
        <input
          type="text"
          placeholder="Search..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={() => weatherFn.current && weatherFn.current()}
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Search
        </button>

      </div>
      <Wheatherdata city={city} setCity={setCity} onSearch={weatherFn}/>
    </>
  );
}

export default App;
