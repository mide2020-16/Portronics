const collection = document.querySelector('.color-variant');

const image = collection.getElementsByTagName('img');

const speaker = document.getElementById('speaker');

const varColor = document.querySelector(':root');

const backgroundColor = document.querySelector('header');

const toggle = document.querySelector('.menu-toggle'),
  active = document.querySelector('.active'),
  closed = document.querySelector('.deactive');
  const sideBar = document.querySelector('.sidebar');

toggle.onclick = () => { 
  sideBar.classList.toggle('active');
  active.classList.toggle('deactive');
  closed.classList.toggle('active');
}


image[0].onclick = () => {
  speaker.src = "1.png";
  varColor.style.setProperty('--main-colour', '#d1632b');
  backgroundColor.style.setProperty('background', 'radial-gradient(#d4632ab7,#efefef)');
}
image[1].onclick = () => {
  speaker.src = "3.png";
  varColor.style.setProperty('--main-colour', '#274c71');
  backgroundColor.style.setProperty('background', 'radial-gradient(#9eb9d4,#ffffff)');
}
image[2].onclick = () => {
  speaker.src = "4.png";
  varColor.style.setProperty('--main-colour', '#76c16f');
   backgroundColor.style.setProperty('background', 'radial-gradient( #b3dab0,#ffffff)');
}
image[3].onclick = () => {
  speaker.src = "5.png";
  varColor.style.setProperty('--main-colour', '#b86bbd');
  backgroundColor.style.setProperty('background', 'radial-gradient(#debbe0,#ffffff)');
}
image[4].onclick = () => {
  speaker.src = "6.png";
  varColor.style.setProperty('--main-colour', '#c67595');
  backgroundColor.style.setProperty('background', 'radial-gradient(#efdeef,#ffffff)');
}


 
