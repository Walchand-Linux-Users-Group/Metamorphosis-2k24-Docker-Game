import React, { useState } from 'react' 
import axios from 'axios'
const Submit = () => {
    const [username, setUsername] = useState('')
    const [flag, setFlag] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/v1/submit', {
            username: username,
            flag: flag
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })     
    }
    const handlesUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleFlag = (e) => {
        setFlag(e.target.value)
    }

    return (
        <div className="ring">
            <i style={{ '--clr': '#d900ff' }}></i>
            <i style={{ '--clr': '#1fbfdb' }}></i>
            <i style={{ '--clr': '#a60074' }}></i>
            <form action="submit" onSubmit={handleFormSubmit} className='login'>
                <div className="login"   >
                    <h2>CONTAINERS</h2>
                    <div className="inputBx" onChange={handlesUsername}>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="inputBx">
                        <input type="text" placeholder="Flag" onChange={handleFlag} />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Submit Flag" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Submit
