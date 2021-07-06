const endpoint = `https://www.boredapi.com/api/activity`;
const form = document.querySelector('#form');
const activityWrapper = document.querySelector('.activity');
const typeWrapper = document.querySelector('.type');
const linkWrapper = document.querySelector('.link');


const wtf = async (event) => {
    event.preventDefault();
    
    const response = await fetch(endpoint);
    const json = await response.json();
    const {activity, type, link} = json;
    
    activityWrapper.innerHTML= activity;
    typeWrapper.innerHTML= type;
    linkWrapper.innerHTML= link;
    
}
form.addEventListener("submit", wtf);


const changetext = (type) => {
  switch(type){
    case 'relaxation':
      return document.getElementById.innerHTML(`relaxation`);
      break;
    case 'cooking':
      return document.getElementById.innerHTML(`cooking`);
      break;
    case 'recreational':
      return document.getElementById.innerHTML(`recreational`);
      break;
    case 'social':
      return document.getElementById.innerHTML(`social`);
      break;
    case 'music':
      return document.getElementById.innerHTML(`music`);
      break;
    case 'busywork':
      return document.getElementById.innerHTML(`busywork`);
      break;
  }
}
