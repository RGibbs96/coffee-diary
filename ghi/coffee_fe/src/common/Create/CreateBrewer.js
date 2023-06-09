import { useState } from 'react'

function CreateBrewer(props) {

    const [make, setMake] = useState("")
    const [model, setModel] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.make = make
        data.model = model
        data.user_id = localStorage.getItem('user_id')
        const url = 'http://localhost:8000/api/brewers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setMake("")
            setModel("")
            props.fetchBrewers()
        }
    }

    const handleMakeChange = (event) => {
        const value = event.target.value
        setMake(value)
    }
    const handleModelChange = (event) => {
        const value = event.target.value
        setModel(value)
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new brewer</h1>
                    <form onSubmit={handleSubmit} id="create-brewer">
                        <div className="form-floating mb-3">
                            <input value={make} onChange={handleMakeChange} required type="text" name="make" id="make" className="form-control" />
                            <label>Make</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={model} onChange={handleModelChange} required type="text" name="model" id="model" className="form-control" />
                            <label>Model</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default CreateBrewer
