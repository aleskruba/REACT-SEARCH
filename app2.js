import * as React from 'react';
import './style.css';
import {Users} from './users'
import Table from "./Table";

export default function App() {
  
const [query,setQuery] = React.useState('')
const keys = ["first_name","last_name","email"]


const search = (data) => {
  return data.filter( (item)=> keys.some(key=> item[key].toLowerCase().includes(query))  )}

  return (
  <div>
    <input type='text' placeholder='Search...' className='search' onChange={e=> setQuery(e.target.value)} />

  <Table data={search(Users)}/>
  </div>
  
  );
}
