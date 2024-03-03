import React, { useState } from 'react'
import axios from 'axios'
const Submit = () => {
    const [username, setUsername] = useState('')
    const [flag, setFlag] = useState('')
    // const [responses, setResponses] = useState(0)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('https://dmeta2024games.onrender.com/api/v1/submit', {
            username: username,
            flag: flag
        })
            .then((response) => {
                alert('Correct Flag')
            })
            .catch((error) => {
                alert('Invalid Flag or invalid username')
            })
    }
    const handlesUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleFlag = (e) => {
        setFlag(e.target.value)
    }

    return (
        <>
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
        </>
    )
}

export default Submit
