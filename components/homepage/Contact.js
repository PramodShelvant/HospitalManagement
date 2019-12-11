import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
export default () =>
<div className='row'>
<div className='col-md-6 col-sm-12 px-5 py-2'>
<ContactForm />
</div>
<div className='col-md-6 col-sm-12 px-5 py-2'>
<ContactDetails />
</div>
</div>