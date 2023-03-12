import { useEffect, useState } from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateOrigin from './common/CreateOrigin';
import DisplayCoffeeCards from './common/CoffeeCards';
import CreateBrewedCoffee from './common/CreateBrewedCoffee';
import CreateBean from './common/CreateNewBean';
import CreateRoaster from './common/CreateRoaster';
import IconSidebar from './components/IconSidebar';
import CreateBrewer from './common/CreateBrewer';

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
    fetchBrewedCoffees()
    fetchMethods()
    fetchBeans()
    fetchWaterBlends()
    fetchGrinders()
    fetchBrewers()
    fetchCreamers()
    fetchSweeteners()
    fetchRoasters()
    fetchOrigins()
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
            <Route path="/" element={<DisplayCoffeeCards brewedCoffees={brewedCoffees} methods={methods} beans={beans} waterBlends={waterBlends} grinders={grinders} brewers={brewers} sweeteners={sweeteners} creamers={creamers} fetchBrewedCoffees={fetchBrewedCoffees} />} />
            <Route path="/coffee/" element={<CreateBrewedCoffee methods={methods} beans={beans} waterBlends={waterBlends} grinders={grinders} brewers={brewers} sweeteners={sweeteners} creamers={creamers} fetchBrewedCoffees={fetchBrewedCoffees} />} />
            <Route path="/beans/new" element={<CreateBean roasters={roasters} origins={origins} fetchBeans={fetchBeans} />} />
            <Route path="/brewers/new" element={<CreateBrewer />} />
            <Route path="/origins/new" element={<CreateOrigin fetchOrigins={fetchOrigins}/>} />
            <Route path="/roasters/new" element={<CreateRoaster fetchRoasters={fetchRoasters} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
