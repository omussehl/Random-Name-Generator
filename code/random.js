let names = [
  'Omar',
  'Aidan',
  'Elliott',
  'Griffin',
  'Tyler',
  'Nathan',
  'Stuart',
  'Addison',
  'Tristan',
  'Samuel',
];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

shuffleArray(names);
