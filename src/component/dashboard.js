import React, { useState, useRef, useCallback } from 'react'
import { useHistory,Link } from 'react-router-dom'
import useUserSearch from './useUserSearch'
import './dashboard.css';
function Dashboard() {
    const history = useHistory()
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const logged = sessionStorage.getItem('loggedIn')
    const {
      users,
      hasMore,
      loading,
      error
    } = useUserSearch(query, pageNumber)
  
    const observer = useRef()
    const lastUserElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading, hasMore])
  
    function handleSearch(e) {
      setQuery(e.target.value)
      setPageNumber(1)
    }

    if(logged==='Yes'){

    return (
        
        <div className="dashboardDiv">
          <header>            
            <h1>Dashboard</h1>
            <button onClick={()=>{
                sessionStorage.setItem('loggedIn','No')
                history.push('/')
            }} className="signout">Sign Out</button>
            </header>


    <>

      {

      users.map((user, index) => {
        if (users.length === index + 1) {
          return <div className="parentDiv" ref={lastUserElementRef} key={user.id.value}>
              <div>
              <img src={user.picture.thumbnail} alt={user.name.first}/>
        </div>    
          <div>
          {user.name.first+' '+ user.name.last}
          </div>

       
          <div>
          {user.dob.age}
          </div>
              </div>
        } else {
          return <div className="parentDiv"  key={user.name.first+user.name.last}>
          <span>
              <img src={user.picture.thumbnail}/>
         
          <span>
          <strong>{user.name.first+' '+ user.name.last}</strong>
          </span>
          </span> 
          {/* <div>
          {user.name.last}
          </div>
        */}
          <div>
          {user.dob.age}
          </div>
          </div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
            
        </div>
    )
    }
    else{
        return (
            <>
        <h1>User not logged In</h1>
            <Link to="/">Login</Link>
            </>
        )
    }
}

export default Dashboard
