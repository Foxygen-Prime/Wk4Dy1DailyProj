// populating code for The Basics//
let basicsSection = document.getElementById('Tontent');

let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/Foxygen-Prime");
request.addEventListener("load", popInfo);
request.send();
// console.log(request);

function popInfo() {
  let data = JSON.parse(this.responseText);
  console.log(data)
  let dataToPop = `
  <div class="content">
  <h2>The Basics</h2>
  <br>Name: ${data.name}
  <br>Github URL: ${data.url}
  <br>Email: courtney.notlisted@gmail.com
  <br>Company: ${data.company}
  <br>Github URL: ${data.blog}
  </div>
  <div class="content2">
  <h2>The Story</h2>
  ${data.bio}
  </div>
  <div class="content3">
  <img src=${data.avatar_url} alt="this is my fo-toe">
  </div>
      `;
  basicsSection.innerHTML = dataToPop;
}



// populating code for The Story//
// let storySection = document.querySelector('theStory');

// populating code for image//

// let profileImage = document.querySelector('profilePic');

// 2. Create our Ajax Request
// let req = new XMLHttpRequest();
// req.open("GET", "http://swapi.co/api/people/");
//in addEventListener we gonna get event happenin on "load" and a call back called popInfo -- this popInfo will later be invoked in a function on line 12 (under how to pop that info)
// req.addEventListener("load", popInfo);
// req.send();

//how to pop that info//
// function popInfo() {
//   let data = JSON.parse(this.responseText);
//   let dataToPop = "";
// console.log(data);

//How to pop that info you popped into them lists
// data.results.forEach(function(person) {
//   dataToPop += `<li>${person.name}</li>`;
//   container.innerHTML = dataToPop;
// });
