import React from 'react';
export default (props)=>
{
  return(
   <nav className=' navbar-expand-lg wrapperp-0 p-0'>
   <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <div className='logowrapper d-flex flex-column'>
   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZMLwmKBqmee6k5_Uly9W3FS8gWc7EQ-uMer9Y_B_HF8twdwxY' className='img-fluid ' style={{height:'55px',width:'250px',display:(props.hide)?'block':'none'}}/>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZMLwmKBqmee6k5_Uly9W3FS8gWc7EQ-uMer9Y_B_HF8twdwxY' className='img-fluid m-0' style={{height:'55px',width:'55px',display:(!props.hide)?'block':'none'}}/>
    <ul class="d-flex  flex-column list-group p-0">
{
props.sideitems.map((item)=><button className='list-group-item list-group-item-action text-white bg-primary border border-top-0 border-left-0 border-right-0 pr-0'><i className={item.icon}></i><span style={{display:(props.hide)?'inline-block':'none'}} className='pl-3'>{item.name}</span></button>)
}
</ul>
</div>
</div>
   </nav>
  )
}