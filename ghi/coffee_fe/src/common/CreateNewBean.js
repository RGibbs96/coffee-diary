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
    const [singleOrigin, setSingleOrigin] = useState("")
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
        data.elevation1 = elevation1
        data.elevation2 = elevation2
        data.process = process
        data.single_origin = singleOrigin
        data.note1 = note1
        data.note2 = note2
        data.note3 = note3
        data.origin_id1 = originId1
        data.origin_id2 = originId2
        data.origin_id3 = originId3
        data.roaster_id = roasterId

        console.log(data)

        /**
        const url = 'http://localhost:8000/api/grinders/'
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
            props.fetchGrinders()
        }
        */
    }

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
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
    const handleElevation1Change = (event) => {
        const value = event.target.value
        setElevation1(value)
    }
    const handleElevation2Change = (event) => {
        const value = event.target.value
        setElevation2(value)
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create new coffee beans</h1>
                    <form onSubmit={handleSubmit} id="create-grinder">
                        <div className="form-floating mb-3">
                            <input value={name} onChange={handleNameChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Name</label>
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
                        <Row className="g-2">
                            <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Low Elevation">
                                <Form.Control value={elevation1} onChange={handleElevation1Change} required type="number" placeholder="" />
                            </FloatingLabel>
                            </Col>
                            <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="High Elevation">
                                <Form.Control value={elevation2} onChange={handleElevation2Change} required type="number" placeholder="" />
                            </FloatingLabel>
                            </Col>
                        </Row>
                        {/**
                        <div className="form-floating mb-3">
                            <input value={elevation1} onChange={handleElevation1Change} required type="text" name="elevation1" id="elevation1" className="form-inline" />
                            -
                            <input value={elevation2} onChange={handleElevation2Change} required type="text" name="elevation2" id="elevation2" className="form-inline" />
                        </div>
                        */}

                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default CreateBean
