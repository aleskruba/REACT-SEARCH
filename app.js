import * as React from 'react';
import './style.css';
import Table1 from "./Table1";


export default function App() {
  
const [query,setQuery] = React.useState('')
const [data,setData] = React.useState([])

React.useEffect(()=>{
  const fetchUsers = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
    let data = await res.json()
    setData(data.splice(0,10))
  }
  if (query.length ===0 || query.length > 2) fetchUsers()
},[query])

console.log(query)
  return (
  <div>
    <input type='text' placeholder='Search...' className='search' onChange={e=> setQuery(e.target.value)}
     />
    
    <Table1 data={data}/>
  </div>
  
  );
}
