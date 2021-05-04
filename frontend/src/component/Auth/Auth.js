import React , {useState}  from 'react'
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {signup , signin} from "../../actions/auth"
import "./styles.css"
function Auth() {
    const [isSignup,setIsSignup] = useState(true)
    const initialState = {username:"",name:"",address:"",mobile:"",email:"",password:"",confirmpassword:""}
    const [formData,setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(isSignup)
        {
            dispatch(signup(formData,history))
        }
        else
        {
            dispatch(signin(formData,history))
        }
    }
    const handleChange = (e) =>
    {   
        setFormData({...formData , [e.target.name]:e.target.value})
    }
    const switchMode = () =>
    {
        setIsSignup(!isSignup)
    }
    return (
        <div>
                        <form onSubmit={handleSubmit}>
                            <div className="container">                                
                                <h1>{ isSignup ? "Register" : "Login"}</h1>    
                                {
                                    isSignup && 
                                    (
                                        <>
                                        <label><b>Username</b></label>
                                        <input type="text" placeholder="Enter Username" name="username" id="username" required onChange={handleChange}/>
                                        <br/>
                                        <label><b>Name</b></label>
                                        <input type="text" placeholder="Enter Name" name="name" id="name" required onChange={handleChange}/>
                                        <br/>
                                        <label><b>Address</b></label>
                                        <input type="text" placeholder="Enter Address" name="address" id="address" required onChange={handleChange}/>
                                        <br/>
                                        <label><b>Mobile Number</b></label>
                                        <input type="text" placeholder="Enter Mobile" name="mobile" id="mobile" required onChange={handleChange}/>
                                        <br/>
                                        </>
                                    )
                                }                    
                                <label><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={handleChange}/>
                                <br/>
                                <label><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="password" id="password" required onChange={handleChange}/>
                                <br/>
                                {isSignup && 
                                    <>
                                    <label><b>Confirm Password</b></label>
                                    <input type="password" placeholder="Confirm Password" name="confirmpassword" id="confirmpassword" required onChange={handleChange}/>
                                    </>}                    
                                <button type="submit" className="registerbtn">{ isSignup ? "Register" : "Login"}</button>
                            </div>
                            <div className="container signin">
                                <p>{isSignup ? "Already have an account?" : "Create New Account!"} <button type="button" className="btn" onClick={switchMode}>{ isSignup ? "Login" : "Register"}</button>.</p>
                            </div>
                        </form>
                    </div>
    )
}

export default Auth
