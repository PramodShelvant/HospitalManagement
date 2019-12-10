import React from 'react';
import Sidebar from './sidebar';
import Profile from './profile';
import Navbar from './navbar';
import Sidecontent from './sidecontent';
export default () =>
<React.Fragment>
<Navbar />
<div className='d-flex'>
<Sidebar />
<div className='flex-grow-1 m-5'>

<Sidecontent />
</div>
</div>
</React.Fragment>