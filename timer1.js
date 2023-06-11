const timer = process.argv.slice(2);

timer.forEach(time => {
    const seconds = parseInt(time, 10);
    if(isNaN(seconds) || seconds < 0){
        return;
    }
    const milliseconds = seconds * 1000;
    setTimeout(() => {
        process.stdout.write('\x07');
    }, milliseconds);


});
/*
 We’re using process.argv.slice(2) to get all of the command line arguments
 passed to our script, excluding the first two arguments (node and the name of our script).
 This gives us an array of strings: ['1000' , '2000', '3000']
 We’re then using Array.forEach() to loop through each argument
 and create an alarm with setTimeout() We’re parsing each argument as a
 number using parseInt() before passing it to setTimeout().
*/

