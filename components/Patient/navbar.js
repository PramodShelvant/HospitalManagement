import React from 'react';
export default () =>
<React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-0 px-5">
  <a className="navbar-brand" href="#">Modi Hospital</a>
    <button classNameName="btn" type="button" data-toggle="collapse" data-target=".mycollapse" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="fa fa-bars"></span>
  </button>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
     
      <a className="nav-item nav-link ml-3" href="#"><i className="fas fa-bell" aria-hidden="true"></i> <span className="position-absolute badge badge-danger" style={{top:0}}>5</span></a>
      <a className="nav-item nav-link ml-3" href="#"><i className="fa fa-calendar-plus-o position-relative" aria-hidden="true"></i>
</a>
      <a className="nav-item nav-link disabled ml-3" href="#" tabindex="-1" aria-disabled="true"><img style={{width:'30px',height:'30px'}} className="prf-img rounded-circle" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBtyV3MAYOXLzs7dQJp1ttsioiNc5M4vRbjIxCw6zecRcMGU8x'/> <span className="pname  ml-2">Anshul</span></a>
    </div>
  </div>
</nav>
</React.Fragment>