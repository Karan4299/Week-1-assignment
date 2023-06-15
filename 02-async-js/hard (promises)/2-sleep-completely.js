/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    
    let currentTime = new Date().getTime();
    let updatedTIme = new Date(currentTime + 10000);
    console.log("yes");

    while (true) {
        if (new Date().getTime() > updatedTIme) break;
    }

    console.log("yes");
}

sleep(10);