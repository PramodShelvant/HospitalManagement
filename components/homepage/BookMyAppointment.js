import React from 'react';

let check=true;
function click(){
  check=!check;
  alert(check);
}
export default ()=>
<React.Fragment>
<div className="modal fade "  id="bookappointment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content border-none">
      <div className="modal-header border-0 ">
        <h5 className="modal-title" id="exampleModalLabel">Book Your Appointment</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body bg-transparent ">
        <form>
        
  <div class=" form-group form-check form-check-inline" id="newpatient">
    <input type="radio" class="form-check-input"  name="pat" onChange={click} checked={check}/>
    <label class="form-check-label" for="exampleCheck1">New Patient</label>
  </div>
   <div class=" form-group form-check form-check-inline" id="oldpatient">
    <input type="radio" class="form-check-input" id="exampleCheck1" name="pat" />
    <label class="form-check-label" for="exampleCheck1">Old Patient</label>
  </div>
   <div class="input-group mb-3">
  <input type="text" class="form-control bg-transparent border-right-0 border-top-0" placeholder="Petient Id" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div class="input-group-append ">
    <span class="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i class="fa fa-user " aria-hidden="true"></i></span>
  </div>
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control bg-transparent border-right-0 border-top-0" placeholder="Petient Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append ">
    <span class="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i class="fa fa-user " aria-hidden="true"></i></span>
  </div>
</div>

   <div class="input-group mb-3">
     <div class="input-group-prepend ">
    <span class="input-group-text bg-transparent  border-top-0" id="basic-addon1">+91</span>
  </div>
  <input type="text" class="form-control bg-transparent border-right-0 border-top-0" placeholder="Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
   <div class="input-group-append ">
    <span class="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i class="fa fa-mobile" aria-hidden="true"></i></span>
  </div>
   </div>

  <div class="input-group mb-3">
  <input type="text" class="form-control bg-transparent border-right-0 border-top-0" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  
  <div class="input-group-append ">
    <span class="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
  </div>
  </div>
  <div class="input-group mb-3">
  <select class="form-control bg-transparent border-right-0 border-top-0 " placeholder="Gender" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <option class="bg-success">Gender</option>
    <option class="bg-success">Male</option>
    <option class="bg-success">Female</option>
  </select>
  </div>
  <div class="input-group mb-3">
  <select class="form-control bg-transparent border-right-0 border-top-0" placeholder="Department" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <option class="bg-success">Department</option>
    <option class="bg-success">Department1</option>
    <option class="bg-success">Department2</option>
  </select>
  </div>
  <input type="text" class="form-control bg-transparent border-right-0 border-top-0 " id="id1"/>
  
  <div class="input-group mb-3">
  <textarea class="form-control bg-transparent border-right-0 border-top-0 "  rows="4" placeholder="Problem" value="Problem">
    Problem
  </textarea>
</div>
   <button type="submit" class="btn btn-outline-danger w-25  form-control">Submit</button>
   
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</React.Fragment>