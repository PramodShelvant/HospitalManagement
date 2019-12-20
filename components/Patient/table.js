import React,{useEffect} from 'react'

export default (prop)=>{
 useEffect(()=>{  $(document).ready(function () {
            $('#table1').DataTable({
              
               dom:  '<"d-flex justify-content-between"<B><f>>t',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
 });})},[]);
  return(

<>
<table id='table1' class="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

</>
  )
}