var main = document.getElementById('main');
var subBtn = document.getElementById('submit');

var loader_1 = document.createElement('div');
loader_1.id = 'loader_1';
loader_1.innerHTML = 'wait for it......'
main.appendChild(loader_1);
document.getElementById('loader_1').style.display = 'none';

var loader_2 = document.createElement('div');
loader_2.id = 'loader_2';
loader_2.innerHTML = 'Still Thinking About It'
main.appendChild(loader_2);
document.getElementById('loader_2').style.display = 'none';


var varTimeout1;
var varTimeout2;
subBtn.addEventListener('click', () => {
  document.getElementById('loader_1').style.display = "block";
  varTimeout = setTimeout(loaderTwo, 3000);

});

function showPage(){
  document.getElementById('loader_1').style.display = "none";
  document.getElementById('loader_2').style.display = "none";
  document.getElementById('myDiv').style.display = "block";
}

function loaderTwo () {
  document.getElementById('loader_2').style.display = "block";
  varTimeout2 = setTimeout(showPage, 3000);

}