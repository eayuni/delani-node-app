
function say(word) {
    console.log(word); 
  } 
  
  function execute(someFunction, value) {  
    someFunction(value); 
  } 
  
  execute(say, "Hello");

  
var say_hi = function () {
    console.log('hi')
  }
  var greeter = say_hi
  var runner = function (fn) {
    console.log('Invoking a function now!')
    fn()
  }
  runner(say_hi) 
  runner(greeter)
  runner( say_hi() ) // what would be the output of this? why?