import React,{useState} from 'react'
import Sidebar from './sidebar'
import PageContent from './maincontent'
export default (props)=>
{
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
  const[hide,setHide]=useState(0)
  return(
    <div className="d-sm-flex flex-row">
    <div className="bg-primary" style={{minHeight:100+'vh'}}>
   <Sidebar hide={hide} sideitems={sideitems}/>
    </div>
    <div className="flex-grow-1">
    <PageContent hide={hide} setHide={setHide}/>
    </div>
    </div>
  )
}