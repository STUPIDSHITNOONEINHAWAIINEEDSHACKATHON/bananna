var main = document.getElementById('main');
var subBtn = document.getElementById('submit');


var varTimeout;

subBtn.addEventListener('click', () => {
  document.getElementById('loader').style.display = "block";
  varTimeout = setTimeout(showPage, 12000);

});

function showPage(){
  document.getElementById('loader').style.display = "none";
  document.getElementById('myDiv').style.display = "block";
}

