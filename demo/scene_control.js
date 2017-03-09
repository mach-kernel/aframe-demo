var cameraEl = document.querySelector('#camera');
var date = new Date();

var animationFactory = function(from, to, trigger) {
  var newanim = document.createElement('a-animation');  
  newanim.setAttribute('duration', 10000);
  newanim.setAttribute('attribute', 'position');
  newanim.setAttribute('delay', trigger);
  newanim.setAttribute('begin', trigger);
  newanim.setAttribute('from', from.x + ' ' + from.y + ' ' + from.z);
  newanim.setAttribute('to', to.x + ' ' + to.y + ' ' + to.z);

  cameraEl.appendChild(newanim);
}


var animate = function(e) {
  var uniquetrigger = 'foo' + new Date().getTime().toString();
  animationFactory(
    cameraEl.getAttribute('position'),
    e.target.getAttribute('position'),
    uniquetrigger  
  );

  cameraEl.emit(uniquetrigger);
};

var a = document.querySelector('#a');
var b = document.querySelector('#b');
var c = document.querySelector('#c');
var d = document.querySelector('#d');

var spheres = ['#a', '#b', '#c', '#d'].forEach(function(tag) {
  document.querySelector(tag).addEventListener('mouseenter', animate);
});