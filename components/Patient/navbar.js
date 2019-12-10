import React from 'react';
export default () =>
<React.Fragment>
<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-0 px-5">
  <a class="navbar-brand" href="#">Modi Hospital</a>
    <button className="btn" type="button" data-toggle="collapse" data-target=".mycollapse" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="fa fa-bars"></span>
  </button>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
     
      <a class="nav-item nav-link ml-3" href="#"><i class="fas fa-bell" aria-hidden="true"></i> <span class="position-absolute badge badge-danger" style={{top:0}}>5</span></a>
      <a class="nav-item nav-link ml-3" href="#"><i class="fa fa-calendar-plus-o position-relative" aria-hidden="true"></i>
</a>
      <a class="nav-item nav-link disabled ml-3" href="#" tabindex="-1" aria-disabled="true"><img class="prf-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBtyV3MAYOXLzs7dQJp1ttsioiNc5M4vRbjIxCw6zecRcMGU8x'/> <span class="pname ml-2">Anshul</span></a>
    </div>
  </div>
</nav>
</React.Fragment>