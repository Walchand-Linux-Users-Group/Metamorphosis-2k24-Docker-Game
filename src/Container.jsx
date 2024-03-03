import React, { useEffect, useState } from 'react'

const Container = () => {
    const [user,setUser] = useState([])
    const [x,setX] = useState(30)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setX(x-1)
        }, 1000);
        if(x===0){
            setX(30)
        }
        return () => clearInterval(intervalId);
    }, [x]);
    useEffect(() => {
        const fetchData = () => {
            fetch('https://dmeta2024games.onrender.com/api/v1/gettop10')
                .then(res => res.json())
                .then(data => {
                    setUser(data.top10);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };
        fetchData();
        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='rank'>
        <h1>Ranklist</h1>
        <div className='outer'>
            <div className='inner'>
                <h3>Username</h3>
                <h3>Rank</h3>
            </div>
            {
                user.map((idx,it)=>{
                    // console.log(idx);
                    return <div className='inner'>
                        <h3>{idx.username}</h3>
                        <h3>{it+1}</h3>
                    </div>
                })
            }
            <>.
            </>
            <div className='bottom'>
                Fetching New Ranklist in {x} seconds
            </div>
        </div>
    </div>
  )
}

export default Container