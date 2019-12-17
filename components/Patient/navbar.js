import React from 'react';
export default (prop) =>
<React.Fragment>
<nav className="d-flex navbar-expand-lg navbar-light bg-light justify-content-between p-0 ">
  <a className="navbar-brand p-0 m-0" href="#">
  <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM6wY43YybPTkltLj9f2SfhfrA8hjdE7RQ9p7ss8-cN_3qe-tR' width='200' height='50' style={{display:(!prop.hide)?'inline-block':'none'}}/>
  <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM6wY43YybPTkltLj9f2SfhfrA8hjdE7RQ9p7ss8-cN_3qe-tR' width='50' height='50' style={{display:(prop.hide)?'inline-block':'none'}}/>
  </a>
    <button className="btn btn-link" type="button" onClick={()=>{prop.setHide(!prop.hide)}} >
    <span className="fa fa-bars"></span>
  </button>

 
    <div className="navbar-nav ml-auto">
     
      <a className="nav-item nav-link ml-3" href="#"><i className="fas fa-bell" aria-hidden="true"></i> <span className="position-absolute badge badge-danger" style={{top:0}}>5</span></a>
      <a className="nav-item nav-link ml-3" href="#"><i className="fa fa-calendar-plus-o position-relative" aria-hidden="true"></i>
</a>
      <a className="nav-item nav-link disabled ml-3" href="#" tabindex="-1" aria-disabled="true"><img style={{width:'30px',height:'30px'}} className="prf-img rounded-circle" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBtyV3MAYOXLzs7dQJp1ttsioiNc5M4vRbjIxCw6zecRcMGU8x'/> <span className="pname  ml-2">Anshul</span></a>
    </div>
 
</nav>
</React.Fragment>