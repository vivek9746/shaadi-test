import React,{useState,useEffect} from 'react'

import { useHistory,Link } from 'react-router-dom'
import './login.css'


function Register() {
    const history = useHistory()
    const [name,setName]=useState('')
    const [password,setPassword] = useState('')

    function createUser(e){
        const user = {name:name,
        password:password}
            console.log(user)
        if(!localStorage.getItem(user.name)){
        localStorage.setItem(user.name,user.password)
        alert('User Created')
        history.push('/')
        }
      e.preventDefault()
    }
    return (

        <div>
            <form>
                <h1>Register</h1>
                <h4>Name</h4>
            <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}></input>
             <h4>Password</h4>
            <input type="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
             <div className="parentOfLogin">
            <button className="registerButton" type="submit" onClick={(e)=>createUser(e)}>Register</button>
            <Link to="/">Login</Link>
            </div>
            </form>
            
        </div>
    )
}

export default Register
