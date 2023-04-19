

function simpleDo() {
    var currTime = 10;
    var i = 1;
    do {
    
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        i += 1; /* same as i = i+1 */
    } while (i < 12);

//timer for Blastoff
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
}, 11000)

}