import { useState } from 'react'

function CreateBrewedCoffee(props) {
    const [dateTimeBrewed, setDateTimeBrewed] = useState("")
    const [method, setMethod] = useState("")
    const [bean, setBean] = useState("")
    const [water, setWater] = useState("")
    const [grinder, setGrinder] = useState("")
    const [brewer, setBrewer] = useState("")
    const [coffeeDose, setCoffeeDose] = useState("")
    const [liquidYield, setLiquidYield] = useState("")
    const [totalBrewTime, setTotalBrewTime] = useState("")
    const [grindSize, setGrindSize] = useState("")
    const [waterTemperature, setWaterTemperature] = useState("")
    const [preinfusion, setPreinfusion] = useState("")
    const [preinfusionTime, setPreinfusionTime] = useState("")
    const [pressureBar, setPressureBar] = useState("")
    const [bloom, setBloom] = useState("")
    const [creamer, setCreamer] = useState("")
    const [sweetener, setSweetener] = useState("")

    const handleDateTimeChange = (event) => {
        const value = event.target.value
        setDateTimeBrewed(value)
    }
    const handleMethodChange = (event) => {
        const value= event.target.value
        setMethod(value)
    }
    const handleBeanChange = (event) => {
        const value= event.target.value
        setBean(value)
    }
    const handleWaterChange = (event) => {
        const value= event.target.value
        setWater(value)
    }
    const handleGrinderChange = (event) => {
        const value= event.target.value
        setGrinder(value)
    }
    const handleBrewerChange = (event) => {
        const value= event.target.value
        setBrewer(value)
    }
    const handleCoffeeDoseChange = (event) => {
        const value= event.target.value
        setCoffeeDose(value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a coffee</h1>
                    <form onSubmit={handleSubmit} id="create-brewed-coffee">
                        <div className="form-floating mb-3">
                            <input value={dateTimeBrewed} onChange={handleDateTimeChange} required type="datetime-local" name="datetime" id="datetime" className="form-control" />
                            <label>Date/Time Brewed</label>
                        </div>
                        <div className="mb-3">
                            <label>Brew method</label>
                            <select value={method} onChange={handleMethodChange} required name="method" id="method" className="form-select">
                                <option value="">Select a method</option>
                                {props.methods.map(method=> {
                                    return (
                                        <option value={method.id} key={method.id}>
                                            {method.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select value={bean} onChange={handleBeanChange} required name="bean" id="bean" className="form-select">
                                <option value="">Select a bean</option>
                                {props.beans.map(bean=> {
                                    return (
                                        <option value={bean.id} key={bean.id}>
                                            {bean.name}, {bean.roaster.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select value={water} onChange={handleWaterChange} required name="water" id="water" className="form-select">
                                <option value="">Select a water blend</option>
                                {props.waterBlends.map(water=> {
                                    return (
                                        <option value={water.id} key={water.id}>
                                            {water.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select value={grinder} onChange={handleGrinderChange} required name="grinder" id="grinder" className="form-select">
                                <option value="">Select a grinder</option>
                                {props.grinders.map(grinder=> {
                                    return (
                                        <option value={grinder.id} key={grinder.id}>
                                            {grinder.make} {grinder.model}, {grinder.burrs} burrs
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select value={brewer} onChange={handleBrewerChange} required name="brewer" id="brewer" className="form-select">
                                <option value="">Select a brewer</option>
                                {props.brewers.map(brewer=> {
                                    return (
                                        <option value={brewer.id} key={brewer.id}>
                                            {brewer.make} {brewer.model}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={coffeeDose} onChange={handleCoffeeDoseChange} required type="number" name="coffee-dose" id="coffee-dose" className="form-control" />
                            <label>Coffee Dose, grams</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBrewedCoffee
