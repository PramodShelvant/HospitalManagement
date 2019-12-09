import React from 'react';
import BookMyAppointment from './BookMyAppointment';
import Login from './Login';
import Navbar from './Navbar';
import Carosal from './Carosal';
import About from './About'
import Services from './Services';
import Department from './Department';
import Doctors from './Doctors';
export default ()=>
<React.Fragment>

< div className='container-fluid bg-transparent d-flex justify-content-end p-0 '>
<div className="btn-group">
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#bookappointment">
 Book Appointment
</button>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
 Login
</button>
</ div>
</div>
<div class="position-fixed w-100" style={{zIndex:10}}>
<Navbar />
</div>
<BookMyAppointment />
<Login />
<Carosal />
<div class="vh-100 vw-100"></div>
<About/>
<Services />
<Department />
<Doctors />


</React.Fragment>