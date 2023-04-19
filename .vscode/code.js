
function countDown()
{alert("countdown");
    var currTime = 10;
    //timer for 12 sec left   
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);

    //timer for 9 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);{
    

    //timer for 8 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);

    //timer for 7 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);
//timer for 6 sec left
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 5000);

//timer for 5 sec left
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 6000);

//timer for 4 sec left
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 7000);

//timer for 3 sec left
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 8000);

//timer for 2 sec left
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 9000);

//timer for 1 sec left
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 10000);

//timer for Blastoff
setTimeout(function () {
    //code goes here for timer
    document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
}, 11000);
}


}

function funWithLoops() {
for (var i = 0; i <= 50; i = i + 5) {
    document.write("The count is " + i + "<br>");
}
}

function betterCountdown() {
var currTime = 10;
for (var i = 1; i <= 11; i++) {
    if (i == 11) {
        setTimeout(function () {
            //code goes here for timer
            document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
        }, 1000 * i);
    } else if (i > 6) {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML =
                "Warning Less than ½ way to launch, time left = " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    } else {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    }
}
}
}

