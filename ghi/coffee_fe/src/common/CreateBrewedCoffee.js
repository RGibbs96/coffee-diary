import { useState } from 'react'
import Checkbox from './Checkbox'
import Slider from '@mui/material/Slider'
import Button from 'react-bootstrap/Button'

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
    const [bitterness, setBitterness] = useState(5)
    const [acidity, setAcidity] = useState(5)
    const [brightness, setBrightness] = useState(5)
    const [sweetness, setSweetness] = useState(5)
    const [body, setBody] = useState(5)
    const [clarity, setClarity] = useState(5)
    const [rating, setRating] = useState(5)
    const [generalNotes, setGeneralNotes] = useState("")

    const preinfusion_choices = [{"value": false,"string":"No"},{"value": true,"string":"Yes"}]
    const bloom_choices = [{"value": false,"string":"No"},{"value": true,"string":"Yes"}]

    const handleDateTimeChange = (event) => {
        const value = event.target.value
        setDateTimeBrewed(value)
    }
    const handleMethodChange = (event) => {
        const value = event.target.value
        setMethod(value)
    }
    const handleBeanChange = (event) => {
        const value = event.target.value
        setBean(value)
    }
    const handleWaterChange = (event) => {
        const value = event.target.value
        setWater(value)
    }
    const handleGrinderChange = (event) => {
        const value = event.target.value
        setGrinder(value)
    }
    const handleBrewerChange = (event) => {
        const value = event.target.value
        setBrewer(value)
    }
    const handleCoffeeDoseChange = (event) => {
        const value = event.target.value
        setCoffeeDose(value)
    }
    const handleLiquidYieldChange = (event) => {
        const value = event.target.value
        setLiquidYield(value)
    }
    const handleTotalBrewTimeChange = (event) => {
        const value = event.target.value
        setTotalBrewTime(value)
    }
    const handleGrindSizeChange = (event) => {
        const value = event.target.value
        setGrindSize(value)
    }
    const handleWaterTemperatureChange = (event) => {
        const value = event.target.value
        setWaterTemperature(value)
    }
    const handlePreinfusionChange = (event) => {
        const value = event.target.value
        setPreinfusion(value)
    }
    const handlePreinfusionTimeChange = (event) => {
        const value = event.target.value
        setPreinfusionTime(value)
    }
    const handlePressureChange = (event) => {
        const value = event.target.value
        setPressureBar(value)
    }
    const handleBloomChange = (event) => {
        const value = event.target.value
        setBloom(value)
    }
    const handleCreamerChange = (event) => {
        const value = event.target.value
        setCreamer(value)
    }
    const handleSweetenerChange = (event) => {
        const value = event.target.value
        setSweetener(value)
    }
    const handleBitternessChange = (event) => {
        const value = event.target.value
        setBitterness(value)
    }
    const handleAcidityChange = (event) => {
        const value = event.target.value
        setAcidity(value)
    }
    const handleBrightnessChange = (event) => {
        const value = event.target.value
        setBrightness(value)
    }
    const handleSweetnessChange = (event) => {
        const value = event.target.value
        setSweetness(value)
    }
    const handleBodyChange = (event) => {
        const value = event.target.value
        setBody(value)
    }
    const handleClarityChange = (event) => {
        const value = event.target.value
        setClarity(value)
    }
    const handleRatingChange = (event) => {
        const value = event.target.value
        setRating(value)
    }
    const handleGeneralNotesChange = (event) => {
        const value = event.target.value
        setGeneralNotes(value)
    }
    const handleClick = (event) => {
        console.log("hi")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.date_time_brewed = dateTimeBrewed
        data.method_id = Number(method)
        data.bean_id = Number(bean)
        data.water_id = Number(water)
        data.grinder_id = Number(grinder)
        data.brewer_id = Number(brewer)
        data.coffee_dose_g = Number(coffeeDose)
        data.liquid_yield_g = Number(liquidYield)
        data.total_brew_time_s = Number(totalBrewTime)
        data.grind_size = Number(grindSize)
        data.water_temperature = Number(waterTemperature)
        data.preinfusion = (preinfusion === "true")
        data.pressure_bar = Number(pressureBar)
        data.bloom = (bloom === "true")
        data.bitterness = bitterness
        data.acidity = acidity
        data.brightness = brightness
        data.sweetness = sweetness
        data.body = body
        data.clarity = clarity
        data.rating = rating
        data.general_notes = generalNotes

        if (preinfusionTime == ""){
            data.preinfusion_time_s = null
        } else {
            data.preinfusion_time_s = Number(preinfusionTime)
        }
        data.pressure_bar = Number(pressureBar)
        data.bloom = (bloom === "true")
        if (creamer == ""){
            data.creamer = null
        } else {
            data.creamer = Number(creamer)
        }
        if (sweetener == ""){
            data.sweetener = null
        } else {
            data.sweetener = Number(sweetener)
        }
        console.log(data)

        const url = "http://localhost:8000/api/brewedcoffees/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setDateTimeBrewed("")
            setCoffeeDose("")
            setLiquidYield("")
            setTotalBrewTime("")
            setGrindSize("")
            setPreinfusion("")
            setBloom("")
            setCreamer("")
            setSweetener("")
            props.fetchBrewedCoffees()
        }


    }

    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a coffee</h1>
                    <Button className="mb-3" onClick={console.log("hi")}>Load previous coffee</Button>
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
                        <div className="form-floating mb-3">
                            <input value={liquidYield} onChange={handleLiquidYieldChange} required type="number" name="liquid-yield" id="liquid-yield" className="form-control" />
                            <label>Liquid Yield, grams</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={totalBrewTime} onChange={handleTotalBrewTimeChange} required type="number" name="total-brew-time" id="total-brew-time" className="form-control" />
                            <label>Total Brew Time, seconds</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={grindSize} onChange={handleGrindSizeChange} required type="number" name="grind-size" id="grind-size" className="form-control" />
                            <label>Grind Setting</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={waterTemperature} onChange={handleWaterTemperatureChange} type="number" name="water-temp" id="water-temp" className="form-control" />
                            <label>Water Temperature, C</label>
                        </div>
                        <div className="mb-3">
                            Preinfusion
                            <select value={preinfusion} onChange={handlePreinfusionChange} required name="preinfusion" id="preinfusion" className="form-select">
                                <option value="">Preinfusion?</option>
                                {preinfusion_choices.map(choice=> {
                                    return (
                                        <option value={choice.value} key={choice.value}>
                                            {choice.string}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={preinfusionTime} onChange={handlePreinfusionTimeChange} type="number" name="preinfusion-time" id="preinfusion-time" className="form-control" />
                            <label>Preinfusion Time, seconds</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={pressureBar} onChange={handlePressureChange} required type="number" name="pressure" id="pressure" className="form-control" />
                            <label>Group Pressure, bar</label>
                        </div>
                        <div className="mb-3">
                            Bloom
                            <select value={bloom} onChange={handleBloomChange} required name="bloom" id="bloom" className="form-select">
                                <option value="">Bloom?</option>
                                {bloom_choices.map(bloom=> {
                                    return (
                                        <option value={bloom.value} key={bloom.value}>
                                            {bloom.string}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            Creamer
                            <select value={creamer} onChange={handleCreamerChange} name="creamer" id="creamer" className="form-select">
                                <option value="">No Creamer</option>
                                {props.creamers.map(creamer=> {
                                    return (
                                        <option value={creamer.id} key={creamer.id}>
                                            {creamer.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            Sweetener
                            <select value={sweetener} onChange={handleSweetenerChange} name="sweetener" id="sweetener" className="form-select">
                                <option value="">No Sweetener</option>
                                {props.sweeteners.map(sweetener=> {
                                    return (
                                        <option value={sweetener.id} key={sweetener.id}>
                                            {sweetener.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                        Bitterness
                        <Slider
                            aria-label="bitterness" defaultValue={5} value={bitterness} onChange={handleBitternessChange}
                            valueLabelDisplay="auto" step={1} marks min={1} max={10} />
                        </div>
                        <div className="mb-3">
                        Acidity
                        <Slider
                            aria-label="acidity" defaultValue={5} value={acidity} onChange={handleAcidityChange}
                            valueLabelDisplay="auto" step={1} marks min={1} max={10} />
                        </div>
                        <div className="mb-3">
                        Brightness
                        <Slider
                            aria-label="brightness" defaultValue={5} value={brightness} onChange={handleBrightnessChange}
                            valueLabelDisplay="auto" step={1} marks min={1} max={10} />
                        </div>
                        <div className="mb-3">
                        Sweetness
                        <Slider
                            aria-label="sweetness" defaultValue={5} value={sweetness} onChange={handleSweetnessChange}
                            valueLabelDisplay="auto" step={1} marks min={1} max={10} />
                        </div>
                        <div className="mb-3">
                        Body
                        <Slider
                            aria-label="body" defaultValue={5} value={body} onChange={handleBodyChange}
                            valueLabelDisplay="auto" step={1} marks min={1} max={10} />
                        </div>
                        <div className="mb-3">
                        Clarity
                        <Slider
                            aria-label="clarity" defaultValue={5} value={clarity} onChange={handleClarityChange}
                            valueLabelDisplay="auto" step={1} marks min={1} max={10} />
                        </div>
                        <div className="mb-3">
                        Overall Rating
                        <Slider
                            aria-label="body" defaultValue={5} value={rating} onChange={handleRatingChange}
                            valueLabelDisplay="auto" step={0.1} min={1.0} max={10.0} />
                        </div>
                        <div className="form-floating mb-3">
                        General Notes:
                            <textarea className="form-control" rows="5" id="general-notes" onChange={handleGeneralNotesChange}></textarea>
                        </div>

                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBrewedCoffee
