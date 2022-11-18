var vomitButton = document.getElementById('vomit');
var laughButton = document.getElementById('laugh-cough');
var virusButton = document.getElementById('virus-sound');

var vomit = new Audio('out_with_it_x.wav');
var laugh = new Audio('laugh_cough.wav');
var virus = new Audio('w32netskyc.wav');

vomitButton.addEventListener('click', function () { vomit.play() });
laughButton.addEventListener('click', function () { laugh.play() });
virusButton.addEventListener('click', function () { virus.play() });