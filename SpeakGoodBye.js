var names = ["john", "james", "jim"];

(function (window) {
var johnspeakWord = {}
johnspeakWord.name = "john";
var speakWord = "Good Bye ";
johnspeakWord.sayBye = function () {
console.log (speakWord + johnspeakWord + johnspeakWord.name);
}

window.johnspeakWord = johnspeakWord;

}) (window);


(function (window){ 
var jamesspeakWord = {}
jamesspeakWord.name = "james";
var speakWord ="Good Bye ";
jamesspeakWord.sayBye = function  () {
console.log (speakWord + jamesspeakWord + jamesspeakWord.name);
}

window.jamesspeakWord = jamesspeakWord;
})(window);

(function (window) {
var jimspeakWord = {}
jimspeakWord.name = "jim";
var speakWord ="Good Bye ";
jimspeakWord.sayBye = function () {
console.log (speakWord + jimspeakWord + jimspeakWord.name);
}
window.jimspeakWord = jimspeakWord;
})(window);