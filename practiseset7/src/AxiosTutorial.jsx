import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function AxiosTutorial() {
    const[userData,setUserData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data);
            setUserData(response.data)
        })
        
    }, []);

    return (
        <div>
            <div>Axios tutorial</div>
            {
                userData.map((data)=>{
                    return(
                        <li>{data.name}</li>
                    )
                })
            }
        </div>
    );
}

export default AxiosTutorial;
