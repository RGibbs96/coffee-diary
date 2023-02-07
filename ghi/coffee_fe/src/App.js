import { useEffect, useState } from 'react'
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateOrigin from './common/CreateOrigin';
import DisplayCoffeeCards from './common/CoffeeCards';

function App() {

  const [brewedCoffees, setBrewedCoffees] = useState([])

  const fetchBrewedCoffees = async () => {
    const url = 'http://localhost:8000/api/brewedcoffees/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setBrewedCoffees(data.brewed_coffees)
    }
  }

  useEffect(() => {
    fetchBrewedCoffees()
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
            <Route path="/" element={<DisplayCoffeeCards brewedCoffees={brewedCoffees} fetchBrewedCoffees={fetchBrewedCoffees} />} />
        </Routes>
        {/*<CreateOrigin /> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
