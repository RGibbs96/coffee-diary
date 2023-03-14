import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateOrigin from './common/CreateOrigin';
import DisplayCoffeeCards from './common/CoffeeCards';
import CreateBrewedCoffee from './common/CreateBrewedCoffee';
import CreateBean from './common/CreateNewBean';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const [brewedCoffees, setBrewedCoffees] = useState([])
  const [methods, setMethods] = useState([])
  const [beans, setBeans] = useState([])
  const [waterBlends, setWaterBlends] = useState([])
  const [grinders, setGrinders] = useState([])
  const [brewers, setBrewers] = useState([])
  const [creamers, setCreamers] = useState([])
  const [sweeteners, setSweeteners] = useState([])
  const [brewedCoffeeProps, setBrewedCoffeeProps] = useState({})



  const fetchBrewedCoffees = async () => {
    const url = 'http://localhost:8000/api/brewedcoffees/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setBrewedCoffees(data.brewed_coffees)
    }
  }
  const fetchMethods = async () => {
    const url = 'http://localhost:8000/api/brewmethods/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setMethods(data.brew_methods)
    }
  }
  const fetchBeans = async () => {
    const url = 'http://localhost:8000/api/coffeebeans/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setBeans(data.coffee_beans)
    }
  }
  const fetchWaterBlends = async () => {
    const url = 'http://localhost:8000/api/waterblends/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setWaterBlends(data.water_blends)
    }
  }
  const fetchGrinders = async () => {
    const url = 'http://localhost:8000/api/grinders/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setGrinders(data.grinders)
    }
  }
  const fetchBrewers = async () => {
    const url = 'http://localhost:8000/api/brewers/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setBrewers(data.brewers)
    }
  }
  const fetchCreamers = async () => {
    const url = 'http://localhost:8000/api/creamers/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setCreamers(data.creamers)
    }
  }
  const fetchSweeteners = async () => {
    const url = 'http://localhost:8000/api/sweeteners/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setSweeteners(data.sweeteners)
    }
  }



  useEffect(() => {
    fetchBrewedCoffees()
    fetchMethods()
    fetchBeans()
    fetchWaterBlends()
    fetchGrinders()
    fetchBrewers()
    fetchCreamers()
    fetchSweeteners()
  }, [])

  return (
    <GoogleOAuthProvider clientId="819294710629-ouanbg5vrbbc61dqf9rh8g39kfkl2946.apps.googleusercontent.com">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
              <Route path="/" element={<DisplayCoffeeCards brewedCoffees={brewedCoffees} methods={methods} beans={beans} waterBlends={waterBlends} grinders={grinders} brewers={brewers} sweeteners={sweeteners} creamers={creamers} brewedCoffeeProps={brewedCoffeeProps} fetchBrewedCoffees={fetchBrewedCoffees} />} />
              <Route path="/addnewbrewedcoffee/" element={<CreateBrewedCoffee methods={methods} beans={beans} waterBlends={waterBlends} grinders={grinders} brewers={brewers} sweeteners={sweeteners} creamers={creamers} brewedCoffeeProps={brewedCoffeeProps} fetchBrewedCoffees={fetchBrewedCoffees} />} />
              <Route path="/newbean" element={<CreateBean />} />
          </Routes>
          {/*<CreateOrigin /> */}
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
