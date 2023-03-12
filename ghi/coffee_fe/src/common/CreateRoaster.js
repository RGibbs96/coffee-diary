import { useState } from 'react'

function CreateRoaster(props) {

    const [name, setName] = useState("")
    const [roasterUrl, setRoasterUrl] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.name = name
        data.url = roasterUrl
        const url = 'http://localhost:8000/api/roasters/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setName("")
            setRoasterUrl("")
            props.fetchRoasters()
        }
    }

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }
    const handleRoasterUrlChange = (event) => {
        const value = event.target.value
        setRoasterUrl(value)
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a roaster</h1>
                    <form onSubmit={handleSubmit} id="create-method">
                        <div className="form-floating mb-3">
                            <input value={name} onChange={handleNameChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Roaster name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={roasterUrl} onChange={handleRoasterUrlChange} required type="text" name="roaster-url" id="roaster-url" className="form-control" />
                            <label>Web Address</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default CreateRoaster
