
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function (window) {
var YaakovspeakWord = {}
YaakovspeakWord.name  = "Yaakov";
var speakWord = "Hello ";
YaakovspeakWord.sayHello = function (){
console.log (speakWord + YaakovspeakWord + YaakovspeakWord.name);
}

	window.YaakovspeakWord = YaakovspeakWord;
})(window);

(function (window) {
var PaulspeakWord = {}
PaulspeakWord.name = "Paul";
var speakWord = "Hello ";
PaulspeakWord.sayHello = function () {
console.log (speakWord + PaulspeakWord + PaulspeakWord.name);
}

	window.PaulspeakWord = PaulspeakWord;
})(window);

(function (window) {
var FrankspeakWord = {}
FrankspeakWord.name = "Frank";
var speakWord = "Hello ";
FrankspeakWord.sayHello = function () {
console.log (speakWord + FrankspeakWord + FrankspeakWord.name);
}
	window.FrankspeakWord = FrankspeakWord;
})(window);

(function (window) {
var LarryspeakWord = {}
LarryspeakWord.name = "Larry";
var speakWord = "Hello ";
LarryspeakWord.sayHello = function () {
console.log (speakWord + LarryspeakWord + LarryspeakWord.name);
}
	window.LarryspeakWord = LarryspeakWord;
})(window);

(function (window) {
var PaulaspeakWord = {}
PaulaspeakWord.name ="Paula";
var speakWord = "Hello ";
PaulaspeakWord.sayHello = function () {
console.log (speakWord + PaulaspeakWord + PaulaspeakWord.name);
}
	window.PaulaspeakWord = PaulaspeakWord;
})(window);
 
(function (window) { 
var LauraspeakWord = {}
LauraspeakWord.name  = "Laura";
var speakWord = "Hello ";
LauraspeakWord.sayHello = function () {
 console.log (speakWord + LauraspeakWord + LauraspeakWord.name);
 }
 window.LauraspeakWord = LauraspeakWord;

})(window);