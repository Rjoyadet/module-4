YaakovspeakWord.sayHello();
PaulspeakWord.sayHello();
FrankspeakWord.sayHello();
LarryspeakWord.sayHello();
PaulaspeakWord.sayHello();
LauraspeakWord.sayHello();
johnspeakWord.sayBye();
jamesspeakWord.sayBye();
jimspeakWord.sayBye();

(function (window) {
var names1 = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names1.length; i++) {

  console.log("hello " + names1[i]);

    var firstLetter = names1[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      var byeSpeaker = "bye ";
    byeSpeaker.speak = function(){
      console.log("bye " + names1[i]);
    }

    } else {
       var helloSpeaker = "hello ";
    helloSpeaker.speak = function(names1){
      console.log("hello " + names1[i]);
    }
  }


}
}) (window);