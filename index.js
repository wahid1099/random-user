const loadrandomUser=()=>{
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data=>displayUserDetails(data.results[0]));
}

loadrandomUser();


const displayUserDetails = (data)=>{

const userdiv=document.getElementById('randomuserdiv');
userdiv.textContent='';
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML=`
<img src="${data.picture.large}" class="card-img-top img-thumbnail w-25 rounded mx-auto d-block" alt="images">
<div class="card-body">
  <h5 class="card-title">User Name :${data.name.first} ${data.name.last}</h5>
  <p class="card-text">Gender : ${data.gender}</p>
  <p class="card-text">Location : ${data.location.street.number} ${data.location.street.name}   , ${data.location.city}</p>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Email: ${data.email}</li>
  <li class="list-group-item">Dob : ${data.dob.date} And age : ${data.dob.age}</li>
  <li class="list-group-item">Phone:${data.phone}</li>
  <li class="list-group-item">Cell:${data.cell}</li>
  <li class="list-group-item">Nationality:${data.nat}</li>
  <li class="list-group-item">Location:${data.location.coordinates.latitude}</li>
</ul>
  <a href="#" class="btn btn-primary">Add</a>
</div>`
userdiv.appendChild(div);
}