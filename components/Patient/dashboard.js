import React,{useState} from 'react';
import Sidebar from './sidebar';
import Profile from './profile';
import Navbar from './navbar';
import Table from './table';
export default () =>{
  const [hide,setHide]=useState(0);
return(<React.Fragment>
<Navbar hide={hide} setHide={setHide}/>
<div className='d-flex'>
<Sidebar hide={hide}/>
<div className='flex-grow-1 m-5'>

<Table />
</div>
</div>
</React.Fragment>)
}
