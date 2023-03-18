import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateOrigin from './common/Create/CreateOrigin';
import DisplayCoffeeCards from './common/CoffeeCards';
import CreateBrewedCoffee from './common/Create/CreateBrewedCoffee';
import CreateBean from './common/Create/CreateNewBean';
import Login from './auth/Login';
import Signup from './auth/Signup';
import CreateRoaster from './common/Create/CreateRoaster';
import CreateBrewer from './common/Create/CreateBrewer';
import CreateGrinder from './common/Create/CreateGrinder';

 function App() {

  const [brewedCoffees, setBrewedCoffees] = useState([])
  const [methods, setMethods] = useState([])
  const [beans, setBeans] = useState([])
  const [waterBlends, setWaterBlends] = useState([])
  const [grinders, setGrinders] = useState([])
  const [brewers, setBrewers] = useState([])
  const [creamers, setCreamers] = useState([])
  const [sweeteners, setSweeteners] = useState([])
  const [roasters, setRoasters] = useState([])
  const [origins, setOrigins] = useState([])

  const fetchCurrentUser = async () => {
    const url = 'http://localhost:8000/accounts/auth/user/'
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token')
      const fetchConfig = {
        method: 'get',
        headers: {
          'Authorization': `Token ${token}`
        }
      }
      const response = await fetch(url, fetchConfig)
      if (response.ok) {
        const user = await response.json()
        localStorage.setItem('user_id', user.pk)
      }
  }
}
fetchCurrentUser()
const user_id = localStorage.getItem('user_id')

  const fetchBrewedCoffees = async () => {
    if (user_id !== null){
      const user_id = localStorage.getItem('user_id')
      const url = `http://localhost:8000/api/brewedcoffees/${user_id}/`
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        setBrewedCoffees(data.brewed_coffees)
      }
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
    const user_id = localStorage.getItem('user_id')
    if (user_id !== null){
      const url = `http://localhost:8000/api/waterblends/${user_id}/`
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        setWaterBlends(data.water_blends)
      }
  }
  }
  const fetchGrinders = async () => {
    const user_id = localStorage.getItem('user_id')
    if (user_id !== null){
      const url = `http://localhost:8000/api/grinders/${user_id}/`
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        setGrinders(data.grinders)
      }
    }
  }
  const fetchBrewers = async () => {
    const user_id = localStorage.getItem('user_id')
    if (user_id !== null){
      const url = `http://localhost:8000/api/brewers/${user_id}/`
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        setBrewers(data.brewers)
      }
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
  const fetchRoasters = async () => {
    const url = 'http://localhost:8000/api/roasters/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setRoasters(data.roasters)
    }
  }
  const fetchOrigins = async () => {
    const url = 'http://localhost:8000/api/origins/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setOrigins(data.origins)
    }
  }

  useEffect(() => {
    console.log("running use effect")
    if (localStorage.getItem('token') !== null) {
    fetchBrewedCoffees()
    fetchWaterBlends()
    fetchGrinders()
    fetchBrewers()
  }
    fetchMethods()
    fetchBeans()
    fetchCreamers()
    fetchSweeteners()
    fetchRoasters()
    fetchOrigins()
  }, [user_id])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
            <Route path="/login/" element={ <Login />} />
            <Route path="/signup/" element={ <Signup />} />
            <Route path="/" element={<DisplayCoffeeCards brewedCoffees={brewedCoffees} methods={methods} beans={beans} waterBlends={waterBlends} grinders={grinders} brewers={brewers} sweeteners={sweeteners} creamers={creamers} fetchBrewedCoffees={fetchBrewedCoffees} />} />
            <Route path="/brewedcoffees/new/" element={<CreateBrewedCoffee methods={methods} beans={beans} waterBlends={waterBlends} grinders={grinders} brewers={brewers} sweeteners={sweeteners} creamers={creamers} fetchBrewedCoffees={fetchBrewedCoffees} />} />
            <Route path="/coffee/" element={<CreateBrewedCoffee methods={methods} beans={beans} waterBlends={waterBlends} grinders={grinders} brewers={brewers} sweeteners={sweeteners} creamers={creamers} fetchBrewedCoffees={fetchBrewedCoffees} />} />
            <Route path="/beans/new" element={<CreateBean roasters={roasters} origins={origins} fetchBeans={fetchBeans} />} />
            <Route path="/brewers/new" element={<CreateBrewer fetchBrewers={fetchBrewers} />} />
            <Route path="/grinders/new" element={<CreateGrinder fetchGrinders={fetchGrinders} />} />
            <Route path="/origins/new" element={<CreateOrigin fetchOrigins={fetchOrigins}/>} />
            <Route path="/roasters/new" element={<CreateRoaster fetchRoasters={fetchRoasters} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
