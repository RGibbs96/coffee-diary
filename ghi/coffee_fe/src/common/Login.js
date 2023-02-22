import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Cookies from 'js-cookie'

function LoginUser(props) {

    var csrftoken = Cookies.get('csrftoken')
    console.log(csrftoken)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        let formData = new FormData()
        formData.append('username', userName)
        formData.append('password', password)
        for (var p of formData){
            let name = p[0]
            let value = p[1]
            console.log(name, value)
        }
        const fetchOptions = {
            method: 'post',
            body: formData,
            credentials: 'include'
        }

        const url = 'http://localhost:8000/login/'
        const response = await fetch(url, fetchOptions)
        if (response.ok) {
            console.log("Congrats you have a JWT token now")
        }
        else {
            console.error(response)
        }
    }
    const handleLogout = async (event) => {
        event.preventDefault()
        let formData = new FormData()
        formData.append('jwt_type','refresh')

        const fetchOptions = {
            method: 'post',
            headers: {
                'REFERER': 'http://localhost:8000',
                'X-CSRFToken': csrftoken
            },
            body: formData,
            credentials: 'include',
        }
        const url = 'http://localhost:8000/api/token/refresh/logout/'
        const response = await fetch(url, fetchOptions)
        if (response.ok) {
            console.log("JWT token blacklisted")
            const fetchOptionsDelete = {
                method: 'delete',
                headers: {
                    'REFERER': 'http://localhost:8000',
                    'X-CSRFToken': csrftoken
                },
                body: formData,
                credentials: 'include',
            }
            const deleteResponse = await fetch(url,fetchOptionsDelete)
            if (deleteResponse.ok) {
                console.log("JWT token deleted")
            }
            else {
                console.log("delete fail")
                console.log(deleteResponse)
            }
        }
        else {
            console.log('failed attempt')
            console.error(response)
        }


    }

    const handleUserNameChange = (event) => {
        const value = event.target.value
        setUserName(value)
    }
    const handlePasswordChange = (event) => {
        const value = event.target.value
        setPassword(value)
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Enter credentials</h1>
                    <form onSubmit={handleSubmit} id="create-origin">
                        <div className="form-floating mb-3">
                            <input value={userName} onChange={handleUserNameChange} required type="text" name="username" id="username" className="form-control" />
                            <label>Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={password} onChange={handlePasswordChange} required type="text" name="username" id="username" className="form-control" />
                            <label>Password</label>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </div>
    );


}

export default LoginUser
