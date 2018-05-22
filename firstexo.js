

// this is the first exercise
console.log('This is just to know the maximum number in an array')

// une fonction my_max pour parcourir le tableau et retourner la valeur maximale
function my_max(x) {
var max = 0

x.forEach (function (y) {
  if ( max < y ) {
  	max = y
  }
}
)
 
return max

}


var y = [3,5,8]

console.log (my_max(y))




// the second exercise
console.log('This is the second exercise, to take the number of a vowel in a string')

// une fonction vowel_count pour prendre le nombre de voyelle dans un string
function vowel_count(x) {
  var vowelsCount = 0;

  //loop through the string
  for (var i = 0; i <= x.length - 1; i++) {

  //if a vowel, add to vowel count
    if (x.charAt(i) == "a" || x.charAt(i) == "e" || x.charAt(i) == "i" || x.charAt(i) == "o" || x.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;

}

console.log (vowel_count('My name is Riana Rakotoarinivo'))


// This is the last exercise

console.log('This is the lats exercise, to reverse a string')

// Une fonction reverse pour renvoyer un string depuis la derniere lettre
function reverse(x) {
    var splitString = x.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 
console.log(reverse("hello"))