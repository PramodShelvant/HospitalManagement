import React from 'react';
import './Doctors.css';

const doctor=[
  {
    name:'DR.Reddy',
    email:'Reddy@gmail.com',
    mobno:'9878675434',
    specialization:'Ent',
    specializationimg:'https://www.omhospital.org/wp-content/uploads/2016/02/ENT.jpg',
    Profileimg:'https://www.thehealthy.com/wp-content/uploads/2017/09/02_doctor_Insider-Tips-to-Choosing-the-Best-Primary-Care-Doctor_519507367_Stokkete.jpg'
  },
  {
    name:'DR.Gowda',
    email:'Gowda@gmail.com',
    mobno:'8976564532',
    specialization:'General Surgery',
    specializationimg:'https://college.mayo.edu/media/mccms/content-assets/academics/residencies-and-fellowships/general-surgery-residency-florida/6c3afd388fbd4963b50840def879c6ba.jpg',
    Profileimg:'https://img.medscape.com/thumbnail_library/dt_140605_serious_male_doctor_hospital_800x600.jpg'
  },
  {
    name:'DR.Singh',
    email:'Singh@gmail.com',
    mobno:'7689045367',
    specialization:'Dermatalogy',
    specializationimg:'http://thomasderm.com/wp-content/uploads/2015/12/slide4-2-1319x536.jpg',
    Profileimg:'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555923840/shape/mentalfloss/164609725.jpg'
  },
  {
    name:'DR.Siddiqui',
    email:'Siddiqui@gmail.com',
    mobno:'9876543210',
    specialization:'Urology',
    specializationimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpata5N2OQPaE6C-5UX_aOk9cSIGg5QQ7wGl3AyMuyUQuxNVCQDg&s',
    Profileimg:'https://www.medlife.com/doctors-enrollment/images/online-doctor-consultation-3x.png'
  },
  {
    name:'DR.Jhony Sin',
    email:'JhonySin@sunny.com',
    mobno:'9998887775',
    specialization:'Radiology',
    specializationimg:'https://www.bcmch.org/uploads/photo/radiology-img.jpg',
    Profileimg:'https://assets.change.org/photos/4/km/cc/wKkmCCyqrpZVCZn-800x450-noPad.jpg?1542071468'
  },
  {
    name:'DR.Sunny',
    email:'Sunny@gmail.com',
    mobno:'923456787',
    specialization:'Nueclear Medicine',
    specializationimg:'http://clinicahaya.com.br/wp-content/uploads/2017/03/%C3%81tomo-3-555x510.jpg',
    Profileimg:'https://www.newsone.tv/wp-content/uploads/2016/10/Sunny.jpg'
  }
]
export default () =>
<React.Fragment>
      
   <section id="docter">
  <div class="py-5" style={{backgroundColor:'#00796B',opacity:1}} >
    <div class="h1 text-center text-white mt-5">Professional Doctors</div>
  <div class="row mx-auto w-75 pb-5">
  {doctor.map((item)=>
    <div class="col-sm-12 col-md-6 col-lg-4 mx-5 mt-5" style={{maxWidth:15+'rem'}} >
       <div class="card border-0">
         <div class="card-body text-center p-0 pt-3">
           <img src={item.Profileimg} class="img-thumbnail mb-2" style={{height:6.25+'rem',width:6.25+'rem',borderRadius:50+'%'}}/>
            <div class="h5 text-danger mb-1" style={{fontSize:1.5+'rem'}}>{item.name}</div>
            <span class="d-block mb-1 " style={{fontSize:1.25+'rem'}}>{item.email}</span>
            <span class="d-block mb-1 " style={{fontSize:1+'rem'}}>{item.mobno}</span>
            <div class="p-2 bg-primary mt-3 text-white font-weight-bold" ><img class="img-fluid mr-2" src={item.specializationimg} style={{height:30+'px',width:30+'px',borderRadius:50+'%'}}/>{item.specialization}</div>
         </div>  
       </div>
    </div>
    )}
  </div>
</div>
</section>
</React.Fragment>