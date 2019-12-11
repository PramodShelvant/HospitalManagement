import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
export default () =>
<div className='row px-5 pb-5' id="contact">
<div className='col-md-6 col-sm-12 px-5 py-2 border-right'>
<ContactForm />
</div>
<div className='col-md-6 col-sm-12 px-5 py-2'>
<ContactDetails />
</div>
</div>