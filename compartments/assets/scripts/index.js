let main = document.getElementById('main');
let subBtn = document.getElementById('submit');



let loader_1 = document.createElement('div');
loader_1.id = 'loader_1';
loader_1.innerHTML =  "Hang on let me think";
main.appendChild(loader_1);
document.getElementById('loader_1').style.display = 'none';

let loader_2 = document.createElement('div');
loader_2.id = 'loader_2';
loader_2.innerHTML = 'hmmmmmmm.......'
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

let loader_8 = document.createElement('div');
loader_8.id = 'loader_8';
loader_8.innerHTML = 'Why is a school zone 20 mph? That seems like the optimal cruising speed for pedophiles...';
main.appendChild(loader_8);
document.getElementById('loader_8').style.display = 'none';

let loader_9 = document.createElement('div');
loader_9.id = 'loader_9';
loader_9.innerHTML = ' I disagree with Kay Jewelers. I would bet on any given Friday or Saturday night more kisses begin with Miller Lite than Kay.';
main.appendChild(loader_9);
document.getElementById('loader_9').style.display = 'none';

let loader_10 = document.createElement('div');
loader_10.id = 'loader_10';
loader_10.innerHTML = 'Why is "bra" singular and "panties" plural';
main.appendChild(loader_10);
document.getElementById('loader_10').style.display = 'none';

let loader_11 = document.createElement('div');
loader_11.id = 'loader_11';
loader_11.innerHTML = 'If the professor on Gilligans Island can make a radio out of a coconut, why cant he fix a hole in a boat?';
main.appendChild(loader_11);
document.getElementById('loader_11').style.display = 'none';

let eat = document.createElement('div');
eat.id = 'eat';
eat.innerHTML = 'FUCK IT IM GOING TO ANDYS';
main.appendChild(eat);
document.getElementById('eat').style.display = 'none';



subBtn.addEventListener('click', () => {
  document.getElementById('loader_1').style.display = "block";
  let timeout = setTimeout(loaderTwo, 4000);

});

let showPage = () => {
  document.getElementById('loader_1').style.display = "none";
  document.getElementById('loader_2').style.display = "none";
  document.getElementById('loader_3').style.display = "none";
  document.getElementById('loader_4').style.display = "none";
  document.getElementById('loader_5').style.display = "none";
  document.getElementById('loader_6').style.display = "none";
  document.getElementById('loader_7').style.display = "none";
  document.getElementById('loader_8').style.display = "none";
  document.getElementById('loader_9').style.display = "none";
  document.getElementById('loader_10').style.display = "none";
  document.getElementById('loader_11').style.display = "none";







  document.getElementById('eat').style.display = "block";
}

let loaderTwo  = () => {
  document.getElementById('loader_2').style.display = "block";
  let timeout = setTimeout(loaderThree, 4000);
}

let loaderThree  = () => {
  document.getElementById('loader_3').style.display = "block";
  let timeout = setTimeout(loaderFour, 4000);
}

let loaderFour  = () => {
  document.getElementById('loader_4').style.display = "block";
  let timeout = setTimeout(loaderFive, 4000);
}

let loaderFive  = () => {
  document.getElementById('loader_5').style.display = "block";
  let timeout = setTimeout(loaderSix, 4000);
}

let loaderSix  = () => {
  document.getElementById('loader_6').style.display = "block";
  let timeout = setTimeout(loaderSeven, 4000);
}

let loaderSeven  = () => {
  document.getElementById('loader_7').style.display = "block";
  let timeout = setTimeout(loaderEight, 4000);
}

let loaderEight  = () => {
  document.getElementById('loader_8').style.display = "block";
  let timeout = setTimeout(loaderNine, 4000);
}

let loaderNine  = () => {
  document.getElementById('loader_9').style.display = "block";
  let timeout = setTimeout(loaderTen, 4000);
}

let loaderTen  = () => {
  document.getElementById('loader_10').style.display = "block";
  let timeout = setTimeout(loaderEleven, 4000);
}

let loaderEleven  = () => {
  document.getElementById('loader_11').style.display = "block";
  let timeout = setTimeout(showPage, 4000);
}


