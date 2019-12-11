import React from 'react';


export default ()=>
<React.Fragment>
<div class="container-fluid py-5  bg-white" style={{opacity:0.9}} id="about">
<div class="text-center h1 p-4 mt-1">About Our Center</div>
<ul class="nav nav-pills mb-3 pl-5 pr-5 justify-content-center" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="pills-about-tab" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-home" aria-selected="true"><b>About Hospital</b></a>
  </li>
   <li class="nav-item">
    <a class="nav-link" id="pills-vision-tab" data-toggle="pill" href="#pills-vision" role="tab" aria-controls="pills-home" aria-selected="true"><b>Vision & Mission</b></a>
  </li>
   <li class="nav-item">
    <a class="nav-link" id="pills-offer-tab" data-toggle="pill" href="#pills-offer" role="tab" aria-controls="pills-home" aria-selected="true"><b>What we offer</b></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-work-tab" data-toggle="pill" href="#pills-work" role="tab" aria-controls="pills-profile" aria-selected="false"><b>How We Work</b></a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">
<div class="row justify-content-between p-5">
<div class=" col-sm-12 col-md-6">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" class="img-fluid img-thumbnail" />
</div>
<div class="col-sm-12 col-md-6">
  <p class="text-justify" style={{fontStyle:'italic',lineHeight:2}}>
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
    <br />
    <button class="btn btn-outline-success">More Information</button>
</div>
</div>
  </div>
  <div class="tab-pane fade" id="pills-vision" role="tabpanel" aria-labelledby="pills-vision-tab">
    <div class="row justify-content-between p-5 ">
<div class=" col-sm-12 col-md-6">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" class="img-fluid img-thumbnail" />
</div>
<div class="col-sm-12 col-md-6">
  <p class="text-justify" style={{fontStyle:'italic',lineHeight:2}}>
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
    <br />
    <button class="btn btn-outline-success">More Information</button>
</div>
</div>
  </div>
  
  <div class="tab-pane fade" id="pills-offer" role="tabpanel" aria-labelledby="pills-offer-tab">
     <div class="row justify-content-between">
<div class=" col-sm-12 col-md-6 p-5">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" class="img-fluid img-thumbnail" />
</div>
<div class="col-sm-12 col-md-6">
  <p class="text-justify" style={{fontStyle:'italic',lineHeight:2}}>
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
    <br />
    <button class="btn btn-outline-success">More Information</button>
</div>
</div>
  </div>

   <div class="tab-pane fade" id="pills-work" role="tabpanel" aria-labelledby="pills-work-tab">
     <div class="row justify-content-between pl-5 pr-5">
<div class=" col-sm-12 col-md-6">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" class="img-fluid img-thumbnail" />
</div>
<div class="col-sm-12 col-md-6">
  <p class="text-justify" style={{fontStyle:'italic',lineHeight:2}}>
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
    <br />
    <button class="btn btn-outline-success">More Information</button>
</div>
</div>
   </div>
 
</div>
</div>

</React.Fragment>
