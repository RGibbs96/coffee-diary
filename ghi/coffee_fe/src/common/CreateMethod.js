import { useState } from 'react'

function CreateMethod(props) {

    const [method, setMethod] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.name = method
        const url = 'http://localhost:8000/api/brewmethods/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setMethod("")
            props.fetchMethod()
        }
    }

    const handleMethodChange = (event) => {
        const value = event.target.value
        setMethod(value)
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new method</h1>
                    <form onSubmit={handleSubmit} id="create-method">
                        <div className="form-floating mb-3">
                            <input value={origin} onChange={handleMethodChange} required type="text" name="method" id="method" className="form-control" />
                            <label>Brew Method</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default CreateMethod
