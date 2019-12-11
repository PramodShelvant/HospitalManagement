import React from 'react';
export default () =>
<React.Fragment>
<form className="px-5 py-3">
 <div class="form-group">
    <label for="Yourname">Your Name</label>
    <input type="text" class="form-control" id="Yourname" aria-describedby="emailHelp" placeholder="Your name" />
  </div>
 
  <div class="form-group">
    <label for="Email">Email address</label>
    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Email Address"/>
  </div>
  <div class="form-group">
    <label for="mobileno">Mobile No</label>
    <input type="password" class="form-control" id="mobileno" placeholder="MobileNo" />
  </div>
  <div class="form-group">
    <label for="Message">Your Message</label>
    <textarea class="password" class="form-control" id="Message" rows="4" placeholder="Your message" />
  </div>
  <button type="submit" class="btn btn-primary form-control">Contact Us</button>

</form>
</React.Fragment>