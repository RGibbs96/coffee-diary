import { useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CreateBean(props) {

    const [name, setName] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    const [roastDate, setRoastDate] = useState("")
    const [roastLevel, setRoastLevel] = useState("")
    const [elevation1, setElevation1] = useState("")
    const [elevation2, setElevation2] = useState("")
    const [process, setProcess] = useState("")
    const [singleOrigin, setSingleOrigin] = useState(false)
    const [note1, setNote1] = useState("")
    const [note2, setNote2] = useState("")
    const [note3, setNote3] = useState("")
    const [originId1, setOriginId1] = useState("")
    const [originId2, setOriginId2] = useState("")
    const [originId3, setOriginId3] = useState("")
    const [roasterId, setRoasterId] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.name = name
        data.picture_url = pictureUrl
        data.roast_date = roastDate
        data.roast_level = roastLevel
        if (elevation1 === ""){
            data.elevation1 = null
        } else {
            data.elevation1 = elevation1
        }
        if (elevation2 === ""){
            data.elevation2 = null
        } else {
            data.elevation2 = elevation2
        }
        data.process = process
        data.single_origin = singleOrigin
        data.note1 = note1
        data.note2 = note2
        data.note3 = note3

        if (originId1 === ""){
            data.origin_id1 = null
        } else {
            data.origin_id1 = Number(originId1)
        }
        if (originId2 === ""){
            data.origin_id2 = null
        } else {
            data.origin_id2 = Number(originId2)
        }
        if (originId3 === ""){
            data.origin_id3 = null
        } else {
            data.origin_id3 = Number(originId3)
        }
        if (data.single_origin === true){
            data.origin_id2 = null
            data.origin_id3 = null
        }
        data.roaster_id = Number(roasterId)

        console.log(data)


        const url = 'http://localhost:8000/api/coffeebeans/'
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
            setPictureUrl("")
            setRoastDate("")
            setRoastLevel("")
            setElevation1("")
            setElevation2("")
            setProcess("")
            setSingleOrigin(false)
            setNote1("")
            setNote2("")
            setNote3("")
            setOriginId1("")
            setOriginId2("")
            setOriginId3("")
            setRoasterId("")
            props.fetchBeans()
        }

    }

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }
    const handleRoasterIDChange = (event) => {
        const value = event.target.value
        setRoasterId(value)
    }
    const handlePictureUrlChange = (event) => {
        const value = event.target.value
        setPictureUrl(value)
    }
    const handleRoastDateChange = (event) => {
        const value = event.target.value
        setRoastDate(value)
    }
    const handleRoastLevelChange = (event) => {
        const value = event.target.value
        setRoastLevel(value)
    }
    const handleProcessChange = (event) => {
        const value = event.target.value
        setProcess(value)
    }
    const handleSingleOriginChange = (event) => {
        setSingleOrigin(!singleOrigin)
    }
    const handleOriginId1Change = (event) => {
        const value = event.target.value
        setOriginId1(value)
    }
    const handleOriginId2Change = (event) => {
        const value = event.target.value
        setOriginId2(value)
    }
    const handleOriginId3Change = (event) => {
        const value = event.target.value
        setOriginId3(value)
    }
    const handleElevation1Change = (event) => {
        const value = event.target.value
        setElevation1(value)
    }
    const handleElevation2Change = (event) => {
        const value = event.target.value
        setElevation2(value)
    }
    const handleNote1Change = (event) => {
        const value = event.target.value
        setNote1(value)
    }
    const handleNote2Change = (event) => {
        const value = event.target.value
        setNote2(value)
    }
    const handleNote3Change = (event) => {
        const value = event.target.value
        setNote3(value)
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a new coffee bean</h1>
                    <form onSubmit={handleSubmit} id="add-bean">
                        <div className="form-floating mb-3">
                            <input value={name} onChange={handleNameChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Name</label>
                        </div>
                        <div className="mb-3">
                            <select
                                    onChange={handleRoasterIDChange}
                                    value={roasterId}
                                    required
                                    type="text"
                                    name="roaster"
                                    id="roaster"
                                    className="form-select">
                                    <option >Select the roaster</option>
                                    {props.roasters.map(roaster => {
                                        return (
                                            <option key={roaster.id} value={roaster.id}>
                                                {roaster.name}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={pictureUrl} onChange={handlePictureUrlChange} required type="text" name="picture-url" id="picture-url" className="form-control" />
                            <label>Picture URL</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={roastDate} onChange={handleRoastDateChange} required type="date" name="roast-date" id="roast-date" className="form-control" />
                            <label>Roast Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={roastLevel} onChange={handleRoastLevelChange} required type="text" name="roast-level" id="roast-level" className="form-control" />
                            <label>Roast Level</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={process} onChange={handleProcessChange} required type="text" name="process" id="process" className="form-control" />
                            <label>Process</label>
                        </div>
                        <div className="form-floating mb-3">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Single Origin"
                                onChange={handleSingleOriginChange}
                            />
                        </div>
                        {/* Display multiple origin options if single origin is false */}
                        {singleOrigin ?
                        <div className="mb-3">
                            <select
                                onChange={handleOriginId1Change}
                                value={originId1}
                                required
                                type="text"
                                name="roaster"
                                id="roaster"
                                className="form-select">
                                <option value="" >Origin 1*</option>
                                {props.origins.map(origin => {
                                    return (
                                        <option key={origin.id} value={origin.id}>
                                            {origin.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        :
                        <div>
                            <div className="mb-3">
                            <select
                                    onChange={handleOriginId1Change}
                                    value={originId1}
                                    required
                                    type="text"
                                    name="roaster"
                                    id="roaster"
                                    className="form-select">
                                    <option value="" >Origin 1*</option>
                                    {props.origins.map(origin => {
                                        return (
                                            <option key={origin.id} value={origin.id}>
                                                {origin.name}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select
                                    onChange={handleOriginId2Change}
                                    value={originId2}
                                    type="text"
                                    name="roaster"
                                    id="roaster"
                                    className="form-select">
                                    <option value="">Origin 2</option>
                                    {props.origins.map(origin => {
                                        return (
                                            <option key={origin.id} value={origin.id}>
                                                {origin.name}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select
                                    onChange={handleOriginId3Change}
                                    value={originId3}
                                    type="text"
                                    name="roaster"
                                    id="roaster"
                                    className="form-select">
                                    <option value="">Origin 3</option>
                                    {props.origins.map(origin => {
                                        return (
                                            <option key={origin.id} value={origin.id}>
                                                {origin.name}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                    </div>
                    }

                        <div className="form-floating mb-3">
                            <Row className="g-2">
                                <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Low Elevation">
                                    <Form.Control value={elevation1} onChange={handleElevation1Change} type="number" placeholder="" />
                                </FloatingLabel>
                                </Col>
                                <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="High Elevation">
                                    <Form.Control value={elevation2} onChange={handleElevation2Change} type="number" placeholder="" />
                                </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={note1} onChange={handleNote1Change} required type="text" name="note1" id="note1" className="form-control" />
                            <label>Note 1</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={note2} onChange={handleNote2Change} required type="text" name="note2" id="note2" className="form-control" />
                            <label>Note 2</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={note3} onChange={handleNote3Change} required type="text" name="note3" id="note3" className="form-control" />
                            <label>Note 3</label>
                        </div>



                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default CreateBean
