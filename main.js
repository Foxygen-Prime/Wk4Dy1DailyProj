// populating code for The Basics//
let basicsSection = document.querySelector('theBasics');

// populating code for The Story//
let storySection = document.querySelector('theStory');

// populating code for image//

let profileImage = document.querySelector('profilePic');

// 2. Create our Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "http://swapi.co/api/people/");
//in addEventListener we gonna get event happenin on "load" and a call back called popInfo -- this popInfo will later be invoked in a function on line 12 (under how to pop that info)
req.addEventListener("load", popInfo);
req.send();

//how to pop that info//
function popInfo() {
  let data = JSON.parse(this.responseText);
  let dataToPop = "";
  // console.log(data);

//How to pop that info you popped into them lists
data.results.forEach( function(person){
  dataToPop += `<li>${person.name}</li>`;
  container.innerHTML = dataToPop;
});
