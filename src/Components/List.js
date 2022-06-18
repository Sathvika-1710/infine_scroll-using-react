import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router'
import InfiniteScroll from 'react-infinite-scroll-component';




export const List = (props) => {
  const navigate = useNavigate();
  let clicker = () => {
    props.logout();
    navigate('/')


  }


  
  const [user, setuser] = useState([])
  const [index,setindex]=useState(6)
  const fetchdata = () => {
     
   
    fetch(`https://randomuser.me/api/?results=500`).then((response) => {
      return response.json()
    }).then((data) => {
      
     
    
      var ppp = data.results
      try{
      const pp = ppp?.slice(index-5,index);
      setuser([...user,...pp])
      setindex(index+6)
      }catch(e){
        return []

      }
  
        
     
    })
    
    
  }
  useEffect(() => {
    fetchdata();

  }, [])
  

  const fetchData=()=>{
    
  fetchdata()
  

 
  }

  
  
  return (
    <div>
      <h1 className='heading'>CONTACTS PAGE</h1>
      <button onClick={clicker}>LOGOUT</button>
      <br />
      <InfiniteScroll
        dataLength={user.length}
        next={fetchData}
        hasMore={index<100}
        loader={<h3>...Loading</h3>}
        endMessage={<h3>You have reached the end</h3>}
      >
        {
            <div className="clearfix">
            <div className="row">
              {user.map(data => (
                <div className="col-md-4 animated fadeIn" key={data.id.value}>
                  <div className="card">
                    <div className="card-body">
                      <div className="avatar">
                        <img
                          src={data.picture.large}
                          className="card-img-top"
                          alt=""
                        />
                      </div>
                      <h5 className="card-title">
                        {data.name.first +
                          " " +
                          data.name.last}
                      </h5>
                      <p className="card-text">
                        {data.location.city +
                          ", " +
                          data.location.state}
                        <br />
                        <span className="phone">{data.phone}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        
          </div>
        }
          </InfiniteScroll>
    </div>
  )
}


