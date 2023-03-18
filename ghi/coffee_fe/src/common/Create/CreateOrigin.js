import { useState } from 'react'

function CreateOrigin(props) {

    const [origin, setOrigin] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.name = origin
        const url = 'http://localhost:8000/api/origins/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setOrigin("")
            props.fetchOrigins()
        }
    }

    const handleOriginChange = (event) => {
        const value = event.target.value
        setOrigin(value)
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new origin</h1>
                    <form onSubmit={handleSubmit} id="create-origin">
                        <div className="form-floating mb-3">
                            <input value={origin} onChange={handleOriginChange} required type="text" name="origin" id="origin" className="form-control" />
                            <label>Coffee Origin</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default CreateOrigin
