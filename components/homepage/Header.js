import React from 'react';
import BookMyAppointment from './BookMyAppointment';
import Login from './Login';
import Navbar from './Navbar';
import Carosal from './Carosal';
import About from './About'
import Services from './Services';
import Department from './Department';
import Doctors from './Doctors';
import Contact from './Contact';
import Footer from './footer';

export default ()=>
<React.Fragment>
<div class="position-fixed d-flex flex-column w-100" style={{zIndex:1}}>
< div className=' px-5 d-flex justify-content-between p-0 ' style={{backgroundColor:'#dfdfdf'}}>
<div className='d-flex align-items-center'>
   <div className='px-2'><i className='fa fa-mobile mx-1'></i>8960683822</div>
   <div className='px-2'><i className='fa fa-envelope-o mx-1'></i>email@gmail.com</div>
</div>
<div>
<button type="button" className="btn btn-primary mx-4 " data-toggle="modal" data-target="#bookappointment">
 Book Appointment
</button>
<button type="button" className="btn btn-primary mx-4" data-toggle="modal" data-target="#login">
 Login
</button>
</div>

</div>
<Navbar />
</div>
<BookMyAppointment />
<Login />
<Carosal />
<About/>
<Services />
<Department />
<Doctors />
<Contact />
<Footer />

</React.Fragment>