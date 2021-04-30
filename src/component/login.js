import React,{useState,useEffect} from 'react'
import { useHistory,Link } from 'react-router-dom'
import './login.css'

function Login() {
    
    const history =useHistory()

    const [name,setName]=useState('')
    const [password,setPassword] = useState('')
 

    function login(name,password,e){
    if(!name || !password){
        alert('blank values')
        return
    }
        if(localStorage.getItem(name)===password){

            sessionStorage.setItem('loggedIn','Yes')
            history.push('/dashboard');
        }
        else{
            alert('User not found, please check username and password, or register if you havent')
        }

    
        e.preventDefault();
    }
    return (
        <div>
            <form>
                <h1>Login</h1>
                <h4>Name</h4>
            <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}></input>
              <h4>Password</h4>
            <input type="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <div className="parentOfLogin">
            <button className="loginButton" type="submit" onClick={(e)=>{
                login(name,password,e)
            }}>Login</button>
              <Link to="/register"><div>Register</div></Link>
            </div>
            </form>
            
            
        </div>
    )
}

export default Login
