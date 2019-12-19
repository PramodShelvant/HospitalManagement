import React,{useState} from 'react';
import Sidebar from './sidebar';
import Profile from './profile';
import Navbar from './navbar';
import Table from './table';
export default (prop) =>{
  const [hide,setHide]=useState(0);
  //alert(prop.items);
return(<React.Fragment>
<Navbar hide={hide} setHide={setHide}/>
<div className='d-flex'>
<Sidebar hide={hide} items={prop.items}/>
<div className='flex-grow-1 m-5'>

<Table />
</div>
</div>
</React.Fragment>)
}
