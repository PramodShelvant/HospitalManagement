import React from 'react';
export default (props)=>
{
  return(
    <div>
      <button className='btn btn-link' onClick={()=>props.setHide(!props.hide)}>x</button>
    </div>
  )
}