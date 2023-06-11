function runJudd(width, jits, orig, orien, flipp, feedback = false, timerEnabled = false, debug = false) {
    if (feedback == false){
        two.clear();
    }
    
    // Get timer display element
    const timerDisplay = document.getElementById('timerDisplay');

    return new Promise((resolve, reject) => {
        stimJudd(width, jits, orig, orien, flipp, feedback);
        let tot_delta = 0;

        const keydownHandler = function(event) {
            let f_lim, s_lim;

            if (flipp == false) {
                f_lim = (width / 2) + orig - (width / 4);
                s_lim = (-1) * (width / 2) + orig;
            } else {
                f_lim = (width / 2) + orig;
                s_lim = (-1) * (width / 2) + orig + (width / 4);
            }

            if (event.keyCode == 32) { // space key
                document.removeEventListener("keydown", keydownHandler);
                resolve();
                return;
            }

            if (feedback == false) {
                if (orien == false) {
                    if (event.keyCode == 38) { // up arrow
                        if (tot_delta < f_lim) {
                            jl6.translation.y -= delta;
                            jl7.translation.y -= delta;
                            tot_delta += delta;
                        }
                    } else if (event.keyCode == 40) { // down arrow
                        if (tot_delta > s_lim) {
                            jl6.translation.y += delta;
                            jl7.translation.y += delta;
                            tot_delta -= delta;
                        }
                    }
                    if (debug == true){
                        console.log(`delta: ${jl6.translation.y}`);
                    }
                } else if (orien == true) {
                    if (event.keyCode == 37) { // left arrow
                        if (tot_delta < f_lim) {
                            jl6.translation.x -= delta;
                            jl7.translation.x -= delta;
                            tot_delta += delta;
                        }
                    } else if (event.keyCode == 39) { // right arrow
                        if (tot_delta > s_lim) {
                            jl6.translation.x += delta;
                            jl7.translation.x += delta;
                            tot_delta -= delta;
                        }
                    }
                    if (debug == true){
                        console.log(`delta: ${jl6.translation.x}`);
                    }
                }
            }
        };

        document.addEventListener("keydown", keydownHandler);

        if (timerEnabled) {
            // Dynamically add the CSS stylesheet
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/timerStyles.css';
            head.appendChild(link);

            timerDisplay.style.display = "block";

            timerDisplay.textContent = timer + ' seconds remaining'; // set initial value
            const intervalId = setInterval(() => {
                timer--;
                timerDisplay.textContent = timer + ' seconds remaining'; // update timer display
                if (timer < 0) {
                    document.removeEventListener("keydown", keydownHandler);
                    clearInterval(intervalId); // stop the interval
                    resolve();
                }
            }, 1000); // 1000 milliseconds = 1 second

            // clear the interval and remove event listener if space key is pressed
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 32) { // space key
                    clearInterval(intervalId);
                    document.removeEventListener("keydown", keydownHandler);
                    resolve();
                }
            });
        } else {
            // Hide timer and clear its text content
            timerDisplay.style.display = "none";
            timerDisplay.textContent = "";
        }
    }).then(() => {
        // Clean up after promise is resolved
        if (timerEnabled) {
            // Dynamically remove the CSS stylesheet
            const timerStylesheet = document.querySelector('link[href="css/timerStyles.css"]');
            if (timerStylesheet) {
                timerStylesheet.parentNode.removeChild(timerStylesheet);
            }
        }
    }).catch((error) => {
        console.error(error);
    });
}




function runBS(width, jits, orig, orien, flipp, feedback = false, timerEnabled = false, debug = false) {
    if (feedback == false){
        two.clear();
    }    
    // Get timer display element
    const timerDisplay = document.getElementById('timerDisplay');

    return new Promise((resolve, reject) => {
        stimBS(width, jits, orig, orien, flipp, feedback);
        let tot_delta = 0;

        const keydownHandler2 = function(event) {
            let f_lim, s_lim;
            let xis;
  
            if (flipp == false) {
                f_lim = (100) + orig ;
                s_lim = (-1)*(width)  + orig + (width/24);
                xis = 0;
            } else {
                f_lim = (width)  + orig + (width/24) ;
                s_lim = (-1)*(100) + orig;
                xis = 1;
            }

            if (event.keyCode == 32) { // space key
                document.removeEventListener("keydown", keydownHandler2);
                resolve();
                return;
            }
            if (feedback == false){
                if (orien == true) {
                    if (event.keyCode == 38) { // up arrow
                        if (tot_delta < f_lim){
                            bsl2.vertices[xis].y  -= delta;
                            tot_delta += delta;
                        }
                    } else if (event.keyCode == 40) { // down arrow
                        if (tot_delta > s_lim){
                            bsl2.vertices[xis].y  += delta;
                            tot_delta -= delta;
                        }
                    }
                    if (debug == true){
                        console.log(`delta: ${tot_delta}`);
                    }
                } else if (orien == false) {
                    if (event.keyCode == 37) { // left arrow
                        if (tot_delta < f_lim){
                            bsl2.vertices[xis].x  -= delta;
                            tot_delta += delta;
                        }
                    } else if (event.keyCode == 39) { // right arrow
                        if (tot_delta > s_lim){
                            bsl2.vertices[xis].x  += delta;
                            tot_delta -= delta;
                        }
                    }
                    if (debug == true){
                        console.log(`delta: ${tot_delta}`);
                    }
                }
            }  
        };

        document.addEventListener("keydown", keydownHandler2);

        if (timerEnabled) {
            // Dynamically add the CSS stylesheet
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/timerStyles.css';
            head.appendChild(link);

            timerDisplay.style.display = "block";
            timerDisplay.textContent = timer + ' seconds remaining'; // set initial value
            const intervalId = setInterval(() => {
                timer--;
                timerDisplay.textContent = timer + ' seconds remaining'; // update timer display
                if (timer < 0) {
                    document.removeEventListener("keydown", keydownHandler2);
                    clearInterval(intervalId); // stop the interval
                    resolve();
                }
            }, 1000); // 1000 milliseconds = 1 second

            // clear the interval and remove event listener if space key is pressed
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 32) { // space key
                    clearInterval(intervalId);
                    document.removeEventListener("keydown", keydownHandler2);
                    resolve();
                }
            });
        } else {
            // Hide timer and clear its text content
            timerDisplay.style.display = "none";
            timerDisplay.textContent = "";
        }
    }).then(() => {
        // Clean up after promise is resolved
        if (timerEnabled) {
            // Dynamically remove the CSS stylesheet
            const timerStylesheet = document.querySelector('link[href="css/timerStyles.css"]');
            if (timerStylesheet) {
                timerStylesheet.parentNode.removeChild(timerStylesheet);
            }
        }
    }).catch((error) => {
        console.error(error);
    });
}

  