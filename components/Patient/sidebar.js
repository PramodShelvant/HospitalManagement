import React from 'react';
import Myprofilecard from './pfimg';

export default (prop) =>{
  const sideitems=prop.items;
 // alert(sideitems);
  return(
<React.Fragment>


<div className=' navbar-expand-sm d-flex flex-row  align-items-streach' style={{minHeight:'100vh !important'}}>
               <div class="collapse navbar-collapse" id="navbarNav">
               <div>
               <Myprofilecard hide={prop.hide} />
               <div className='accordion' id="accordionExample">
               {sideitems.map((item,index)=>
               <React.Fragment>
                            <a key={index} href={'#'+item.name.replace(' ','')} data-toggle='collapse' className={'d-block p-2 px-3 border-top border-right list-group-item-action bg-success text-white'} ><i className={'mr-1'+' '+item.icon} ></i><span  style={{display:(!prop.hide)?'inline-block':'none'}}>{item.name}</span>
                            </a>
                           
                           {(item.submenu)? <div data-parent="#accordionExample" className='collapse' id={item.name.replace(' ','')}>{item.submenu.map((submenu,index)=><a key={index} data-toggle='collapse' className={'d-block p-2 px-3 border-top border-right list-group-item-action bg-dark text-white collapse '} ><i className={'mr-1'+' '+submenu.icon} ></i><span  style={{display:(!prop.hide)?'inline-block':'none'}} >{submenu.name}</span>
                            </a>)}
                         
                            
                            </div>:''}
                            

                   </React.Fragment>         
                            
                            )
                            
                            
                            
                            
                            
                            }               
                    </div >  
                    </div>  
                    </div>
    </div>                                       
</React.Fragment>)
}