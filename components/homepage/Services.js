import React from 'react';
const services=[{
  icon:"https://rapidmed.com/wp-content/uploads/2018/11/X-ray-near-me.jpg",
  name:"x-ray service"
},
{
  "icon":"https://jacksonllp.com/sitefiles/wp-content/uploads/2019/05/Pharmacy_1200x628px-1024x536.jpg",
  "name":"pharmacy service"
},
{
  "icon":"https://www.pennmedicine.org/-/media/images/patient%20care/provider%20and%20patient/male_doctor_talking_to_female%20patient.ashx?mw=570&mh=375",
  "name":"personslized care service"
},
{
  "icon":"https://www.beatoapp.com/blog/wp-content/uploads/2018/10/emergency_accueil_0.jpg",
  "name":"accident & emergency"
},
{
  "icon":"https://y8g4h5p9.stackpathcdn.com/wp-content/uploads/2016/06/blood-bank-1.jpg",
  "name":"blood bank"
},
{
  "icon":"https://hcah.in/health-advantage/wp-content/uploads/2018/11/2.jpg",
  "name":"physiotherapy"
}




];
export default ()=>
<React.Fragment>
      
   <section id="service">
<div class="py-3" style={{backgroundColor:'#00796B ',opacity:1,minHeight:100+'vh'}} >
    <div class="h1 text-center text-white mt-5">Our Best Services</div>
  <div class="row px-5 pb-5">
  {services.map((item)=>
    <div class="col-sm-12 col-md-6 col-lg-4" style={{minWidth:300+'px'}}>
       <div class="card border-0 mt-5 mx-auto">
         <div class="card-body text-center p-0 pt-3">
           <img src={item.icon} class="img-thumbnail mb-2" style={{height:10.25+'rem',width:10.25+'rem',borderRadius:50+'%'}}/>   
            <div class=" p-2 "><b>{item.name}</b></div>
            <div class="text-justify p-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            </div>
         </div>  
       </div>
    </div>
   ) }
  </div>
</div>
</section>
</React.Fragment>