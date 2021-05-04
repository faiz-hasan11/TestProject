import React , {useEffect, useState} from 'react'
import {useDispatch} from "react-redux"
import {useLocation , useHistory} from 'react-router-dom'
import "./styles.css"

function Home() {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    const logout = () =>
    {
        dispatch({type: 'LOGOUT'})
        history.push("/")
    }

    useEffect(() => {
        const message = user?.message
        if(message)
        {
            alert(message)
            history.push("/")
        }
        else
        {
            setUser(JSON.parse(localStorage.getItem("profile")))
        }        
    },[location,history,user?.message])


    return (
        <div className="container">
            {
                user?.token && (
                    <>
                        <div className="card">
                <h1>{user.result.name}</h1>
                <p className="title">{user.result.username}</p>
                <p><b>Address:</b> {user.result.address}</p>
                <p><b>Contact:</b> {user.result.mobile}</p>
                <p><b>Email:</b> {user.result.email}</p>
            </div>
            <br></br>
            <button type="button" className="btn" onClick={logout}>LogOut</button>.
            </>
                )
            }
            
            
        </div>
    )
}

export default Home
