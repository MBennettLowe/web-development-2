// var result = 0

//     for (var i = 2; i < process.argv.length; i++)
//       result += Number(process.argv[i])

//     console.log(result)     





// function argv() {
//     console.log(process.argv);
// }

// argv();

***************************************************************

// //https://www.youtube.com/watch?v=yTJ9OJmbiHU

// console.log(process.argv);

// function grab(flag) {
//     var index = process.argv.indexOf(flag);
//     return (index === -1) ? null : process.argv[index+1];
// }

// var greeting = grab('--greeting');
// var user = grab('--user');

// if (!user || !greeting) {
//     console.log("You Blew it!");
// } else {
//     console.log('Welcome ${user}, ${greeting}');
// }

function grab(a, b) {
    return a + b;
}

