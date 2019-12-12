import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
export default () =>
<div className='container' style={{paddingTop:90+'px'}} id="contact">
<div className='row ' >
<div className='col-md-6 col-sm-12 border-right '>
<ContactForm />
</div>
<div className='col-md-6 col-sm-12 '>
<ContactDetails />
</div>
</div>
</div>