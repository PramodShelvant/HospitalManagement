import React from 'react';
import Myprofilecard from './pfimg';
const sideitems=[
  
  {
    icon:'fa fa-calendar',
    name:'My Appointment'
  },
   {
    icon:'fa fa-stethoscope',
    name:'OPD'
  },
   {
    icon:'fa fa-bed',
    name:'IPD'
  },
   {
    icon:'fa fa-medkit',
    name:'Pharmacy'
  },
   {
    icon:'fa fa-flask',
    name:'Pathology'
  },
   {
    icon:'fas fa-microscope',
    name:'Radiology'
  },
   {
    icon:'fa fa-cut',
    name:'Operation Theatre'
  },
  
   {
    icon:'fa fa-ambulance',
    name:'Ambulance'
  },
  
   {
    icon:'fa fa-tint',
    name:'Blood bank'
  }

];

export default () =>
<React.Fragment>
<div>

<Myprofilecard />
               <div class=''>{sideitems.map((item)=>
                            <a className='d-block p-2 px-3 border-bottom border-right list-group-item-action' ><i className={'mr-1'+' '+item.icon} ></i><span className='mycollapse'>{item.name}</span>
                            </a>)}               
                    </div >    
                    </div>                         
</React.Fragment>