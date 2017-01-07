let main = document.getElementById('main');
let subBtn = document.getElementById('submit');

let loader_1 = document.createElement('div');
loader_1.id = 'loader_1';
loader_1.innerHTML = 'wait for it......'
main.appendChild(loader_1);
document.getElementById('loader_1').style.display = 'none';

let loader_2 = document.createElement('div');
loader_2.id = 'loader_2';
loader_2.innerHTML = 'Still Thinking About It'
main.appendChild(loader_2);
document.getElementById('loader_2').style.display = 'none';

let loader_3 = document.createElement('div');
loader_3.id = 'loader_3';
loader_3.innerHTML = 'Oh man the new episode of South Park just came on';
main.appendChild(loader_3);
document.getElementById('loader_3').style.display = 'none';

let loader_4 = document.createElement('div');
loader_4.id = 'loader_4';
loader_4.innerHTML = 'Man is that my feet that stink?';
main.appendChild(loader_4);
document.getElementById('loader_4').style.display = 'none';

let loader_5 = document.createElement('div');
loader_5.id = 'loader_5';
loader_5.innerHTML = 'Do vegetarians eat animal crackers? ';
main.appendChild(loader_5);
document.getElementById('loader_5').style.display = 'none';

let loader_6 = document.createElement('div');
loader_6.id = 'loader_6';
loader_6.innerHTML = 'How do you handcuff a one-armed man?? ';
main.appendChild(loader_6);
document.getElementById('loader_6').style.display = 'none';

let loader_7 = document.createElement('div');
loader_7.id = 'loader_7';
loader_7.innerHTML = 'Are eyebrows considered facial hair?';
main.appendChild(loader_7);
document.getElementById('loader_7').style.display = 'none';



subBtn.addEventListener('click', () => {
  document.getElementById('loader_1').style.display = "block";
  let timeout = setTimeout(loaderTwo, 3000);

});

let showPage = () => {
  document.getElementById('loader_1').style.display = "none";
  document.getElementById('loader_2').style.display = "none";
  document.getElementById('loader_3').style.display = "none";
  document.getElementById('loader_4').style.display = "none";
  document.getElementById('loader_5').style.display = "none";
  document.getElementById('loader_6').style.display = "none";
  document.getElementById('loader_7').style.display = "none";


  document.getElementById('myDiv').style.display = "block";
}

let loaderTwo  = () => {
  document.getElementById('loader_2').style.display = "block";
  let timeout = setTimeout(loaderThree, 3000);
}

let loaderThree  = () => {
  document.getElementById('loader_3').style.display = "block";
  let timeout = setTimeout(loaderFour, 3000);
}

let loaderFour  = () => {
  document.getElementById('loader_4').style.display = "block";
  let timeout = setTimeout(loaderFive, 3000);
}

let loaderFive  = () => {
  document.getElementById('loader_5').style.display = "block";
  let timeout = setTimeout(loaderSix, 3000);
}

let loaderSix  = () => {
  document.getElementById('loader_6').style.display = "block";
  let timeout = setTimeout(loaderSeven, 3000);
}

let loaderSeven  = () => {
  document.getElementById('loader_7').style.display = "block";
  let timeout = setTimeout(showPage, 3000);
}

