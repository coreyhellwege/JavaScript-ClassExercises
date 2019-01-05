// What is the result printed in the console?

// Assigning 'Hello' to a variable called 'demo'
var demo = 'Hello'
// Creating a declared function 'getDemo' which takes one argument 'demo'
function getDemo(demo){
    // getDemo contains an anonymous function which returns 'getDemo's' argument plus the string 'my friend' stored in the variable 'test'
    var test = function(){
        return demo + ' my friend'
    }
    // the 'getDemo' function adds 'how are you?' after the value of the 'demo' argument
    demo = demo + ' how are you?'
    // 'demo' then becomes "demo my friend how are you?"
    return test()
    // the function will then return: 'demo' how are you? my friend
}

// Output: So the output will be "Hi how are you? my friend"
console.log(getDemo('Hi'))

// 'demo' is then reassigned with value 'Hey', but it will not change the output because it isn't being logged
demo = 'Hey'

// Take Away: If 'demo' isn't declared as an argument in the function, this function would then look outside of the scope of the function for the value of demo. So if we remove demo as an argument, this function would return 'Hey how are you? my friend'