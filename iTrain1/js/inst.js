function showWelcomeMessage() {
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Hello and Welcome</p>
        <p>Press the Space-Bar to continue</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
        message.style.display = 'none';
        if(document.head.contains(style)) document.head.removeChild(style);
        resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}


function inst1_1() {
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>The blue line and the black line are the same size</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    let l1, l2, wv, center;
    wv = 100;
    center = getCenterCoordinates();
    const mainCorY = [center[1] - wv, center[1] + wv];
    const mainCorX = center[0];
    l1 = createLine(mainCorX + 50, mainCorX + 50, mainCorY[0], mainCorY[1]);
    l2 = createLine(mainCorX - 50, mainCorX - 50, mainCorY[0], mainCorY[1]);
    l2.stroke = 'blue';
    two.update();
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
        message.style.display = 'none';
        if(document.head.contains(style)) document.head.removeChild(style);
        resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}




function inst1_2() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>The blue line here is bigger than the black line</p>
        <p>Press the Down-Arrow key to make the blue line decrease in size</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    let l1, l2, wv, center;
    wv = 100;
    center = getCenterCoordinates();
    const mainCorY = [center[1] - wv, center[1] + wv];
    const mainCorX = center[0];
    l1 = createLine(mainCorX + 50, mainCorX + 50, mainCorY[0], mainCorY[1]);
    l2 = createLine(mainCorX - 50, mainCorX - 50, mainCorY[0]-50, mainCorY[1]+50);
    l2.stroke = 'blue';
    two.update();
    let delta_t = 0;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
            }
        if (event.keyCode == 40) { // down arrow
            if (delta_t < 50){
                let delta = 2;
                l2.vertices[0].y  += delta;
                l2.vertices[1].y  -= delta;
                delta_t += delta;
            }
        }
    });
    });
}


function inst1_3() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>You can also make the line bigger</p>
        <p>Press the Up-Arrow key to make the blue line increase in size</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    let l1, l2, wv, center;
    wv = 100;
    center = getCenterCoordinates();
    const mainCorY = [center[1] - wv , center[1] + wv];
    const mainCorX = center[0];
    l1 = createLine(mainCorX + 50, mainCorX + 50, mainCorY[0], mainCorY[1]);
    l2 = createLine(mainCorX - 50, mainCorX - 50, mainCorY[0]+25, mainCorY[1]-25);
    l2.stroke = 'blue';
    two.update();
    let delta_t = 0;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) {
                document.head.removeChild(style);
            }            
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 38) { // up arrow
            if (delta_t < 25){
                let delta = 2;
                l2.vertices[0].y  -= delta;
                l2.vertices[1].y  += delta;
                delta_t += delta;
            }
        }
    });
    });
}
function inst1_4() {
    two.clear();
    return new Promise(resolve => {
        var style = document.createElement('style');
        style.innerHTML = `
            .welcome-message {
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: darkblue;
            text-align: center;
            font-size: 24px;
            }
        `;
        document.head.appendChild(style);

        var message = document.createElement('div');
        message.classList.add('welcome-message');
        message.innerHTML = `
            <p>Using the Up-Arrrow and Down-Arrow keys make the two lines the same size</p>
            <p>When you think they match, press Space-Bar</p>
        `;
        document.body.appendChild(message);

        let l1, l2, wv, center;
        wv = 75;
        center = getCenterCoordinates();
        const mainCorY = [center[1] - wv, center[1] + wv];
        const mainCorX = center[0];
        l1 = createLine(mainCorX + 50, mainCorX + 50, mainCorY[0], mainCorY[1]);
        l2 = createLine(mainCorX - 50, mainCorX - 50, mainCorY[0]-50, mainCorY[1]+50);
        l2.stroke = 'blue';
        two.update();
        let delta_t = 0;

        const keyDownFunction = function(event) {
            if (event.code === 'Space') {
                message.style.display = 'none';
                if(document.head.contains(style)) document.head.removeChild(style);
                document.removeEventListener('keydown', keyDownFunction);
                resolve(); // Resolving the promise when space bar is pressed
            }
            if (event.keyCode == 40) { // down arrow
                if (delta_t > -85){
                    let delta = 2;
                    l2.vertices[0].y  += delta;
                    l2.vertices[1].y  -= delta;
                    delta_t -= delta;
                }
            }
            if (event.keyCode == 38) { // up arrow
                if (delta_t < 40){
                    let delta = 2;
                    l2.vertices[0].y  -= delta;
                    l2.vertices[1].y  += delta;
                    delta_t += delta;
                }
            }
        };

        document.addEventListener('keydown', keyDownFunction);
    });
}



function inst1_5() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>You will use Arrow keys to adjust length of shapes</p>
        <p>The only buttons you will need are the Left/Right/Up/Down Arrows and the Space-Bar</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
        message.style.display = 'none';
        if(document.head.contains(style)) document.head.removeChild(style);
        resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}
function inst1_6(timerEnabled = false) {
    two.clear();

    // Get timer display element
    const timerDisplay = document.getElementById('timerDisplay');

    return new Promise(resolve => {
        var style = document.createElement('style');
        style.innerHTML = `
            .welcome-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: darkblue;
            text-align: center;
            font-size: 24px;
            }
        `;
        document.head.appendChild(style);

        var message = document.createElement('div');
        message.classList.add('welcome-message');
        message.innerHTML = `
            <p>When you respond, go with your first judgement</p>
            <p>In some of the tasks there will be a time limit displayed at the top of the screen (like the one above)</p>
            <p>Please ensure to respond within the time limit and don't spend more than a few seconds on each adjustment</p>
            <p>If the timer runs out you will automatically move on</p>
            <p>(Press Space-Bar to continue)</p>
        `;
        document.body.appendChild(message);

        let intervalId;

        const keydownHandler = function(event) {
            if (event.code === 'Space') {
                message.style.display = 'none';
                document.head.removeChild(style);
                if (timerEnabled) {
                    timerDisplay.style.display = "none";
                    timerDisplay.textContent = "";
                    clearInterval(intervalId);
                }
                document.removeEventListener('keydown', keydownHandler);
                resolve(); // Resolving the promise when space bar is pressed
            }
        };

        document.addEventListener('keydown', keydownHandler);

        if (timerEnabled) {
            // Dynamically add the CSS stylesheet
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/timerStyles.css';
            head.appendChild(link);

            timerDisplay.style.display = "block";

            let timer = 30; // Define your timer length here
            timerDisplay.textContent = timer + ' seconds remaining'; // set initial value
            intervalId = setInterval(() => {
                timer--;
                timerDisplay.textContent = timer + ' seconds remaining'; // update timer display
                if (timer < 0) {
                    clearInterval(intervalId); // stop the interval
                    timerDisplay.style.display = "none";
                    timerDisplay.textContent = "";
                    document.removeEventListener("keydown", keydownHandler);
                    resolve();
                }
            }, 1000); // 1000 milliseconds = 1 second
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
function inst1_7() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>We know you can use your fingers or a ruler</p>
        <p>But please, please only use your eyes</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}


function inst2_1() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>This is task 1 of 2 tasks</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}


function inst2_2() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>The blue line cuts the horizontal line in half</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    let l1, l2, l3, l4, l5, ml_wv, ml_wings, center;
    ml_wv = 200;
    ml_wings = 50;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l1 = createLine(mainCorX[0], mainCorX[1], mainCorY, mainCorY);
    l2 = createLine(mainCorX[0], mainCorX[0], mainCorY+ml_wings, mainCorY-ml_wings);
    l3 = createLine(mainCorX[1], mainCorX[1], mainCorY+ml_wings, mainCorY-ml_wings);
    l2 = createLine(center[0], center[0], mainCorY+ml_wings, mainCorY-ml_wings);
    l2.stroke = "blue";
    two.update();
    let delta_t = 0;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
        /*
        if (event.keyCode == 40) { // down arrow
            if (delta_t < 50){
                let delta = 2;
                l2.vertices[0].y  += delta;
                l2.vertices[1].y  -= delta;
                delta_t += delta;
            }
        }*/
    });
    });
}

function inst2_3() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Move the blue line so it cuts the horizontal line in half</p>
        <p>Use the Left-Arrow and Right-Arrow</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);

    let l1, l2, l3, l4, ml_wv, ml_wings, center;
    ml_wv = 200;
    ml_wings = 50;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l1 = createLine(mainCorX[0], mainCorX[1], mainCorY, mainCorY);
    l2 = createLine(mainCorX[0], mainCorX[0], mainCorY+ml_wings, mainCorY-ml_wings);
    l3 = createLine(mainCorX[1], mainCorX[1], mainCorY+ml_wings, mainCorY-ml_wings);
    l4 = createLine(center[0]-50, center[0]-50, mainCorY+ml_wings, mainCorY-ml_wings);
    l4.stroke = "blue";
    two.update();
    let delta_t = 50;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 37) { // down left
            if (delta_t < 200){
                let delta = 4;
                l4.translation.x -= delta;
                delta_t += delta;
            }
        } else if (event.keyCode == 39) { // down right
            if (delta_t > -200){
                let delta = 4;
                l4.translation.x += delta;
                delta_t -= delta;
            }
        }
    });
    });
}

function inst2_4() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Let's do it again! Cut the line in half</p>
        <p>Use the Left-Arrow and Right-Arrow</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);

    let l1, l2, l3, l4, ml_wv, ml_wings, center;
    ml_wv = 200;
    ml_wings = 50;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l1 = createLine(mainCorX[0], mainCorX[1], mainCorY, mainCorY);
    l2 = createLine(mainCorX[0], mainCorX[0], mainCorY+ml_wings, mainCorY-ml_wings);
    l3 = createLine(mainCorX[1], mainCorX[1], mainCorY+ml_wings, mainCorY-ml_wings);
    l4 = createLine(center[0]+50, center[0]+50, mainCorY+ml_wings, mainCorY-ml_wings);
    l4.stroke = "blue";
    two.update();
    let delta_t = -50;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 37) { // down left
            if (delta_t < 200){
                let delta = 4;
                l4.translation.x -= delta;
                delta_t += delta;
            }
        } else if (event.keyCode == 39) { // down right
            if (delta_t > -200){
                let delta = 4;
                l4.translation.x += delta;
                delta_t -= delta;
            }
        }
    });
    });
}


function inst2_5() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>We have change the lines a bit</p>
        <p>Your job is the same</p>
        <p>Use the Left-Arrow and Right-Arrow</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);

    let l1, l2, l3, l4, l5, l6, l7, ml_wv, ml_wings, center;
    ml_wv = 200;
    ml_wings = 50;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l1 = createLine(mainCorX[0], mainCorX[1], mainCorY, mainCorY);
    l2 = createLine(mainCorX[0]+ml_wings, mainCorX[0], mainCorY-ml_wings, mainCorY);
    l3 = createLine(mainCorX[0]+ml_wings, mainCorX[0], mainCorY+ml_wings, mainCorY);
    l4 = createLine(mainCorX[1]+ml_wings, mainCorX[1], mainCorY-ml_wings, mainCorY);
    l5 = createLine(mainCorX[1]+ml_wings, mainCorX[1], mainCorY+ml_wings, mainCorY);
    l6 = createLine(center[0]-30-ml_wings, center[0]-30, mainCorY-ml_wings, mainCorY);
    l7 = createLine(center[0]-30-ml_wings, center[0]-30, mainCorY+ml_wings, mainCorY);
    l6.stroke = "blue";
    l7.stroke = "blue";
    two.update();
    let delta_t = 30;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 37) { // down left
            if (delta_t < 196-2*ml_wings){
                let delta = 4;
                l6.translation.x -= delta;
                l7.translation.x -= delta;
                delta_t += delta;
            }
        } else if (event.keyCode == 39) { // down right
            if (delta_t > -196){
                let delta = 4;
                l6.translation.x += delta;
                l7.translation.x += delta;
                delta_t -= delta;
            }
        }
    });
    });
}



function inst2_6() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Some times the lines might be upside-down</p>
        <p>Use the Up-Arrow and Left-Arrow</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);

    let l1, l2, l3, l4, l5, l6, l7, ml_wv, ml_wings, center;
    ml_wv = 160;
    ml_wings = 40;
    center = getCenterCoordinates();
    center[1] += 70
    const mainCorY = [center[1] - ml_wv, center[1] + ml_wv ];
    const mainCorX = center[0];
    l1 = createLine(mainCorX, mainCorX, mainCorY[0], mainCorY[1]);
    l2 = createLine(mainCorX-ml_wings, mainCorX, mainCorY[0]-ml_wings, mainCorY[0]);
    l3 = createLine(mainCorX+ml_wings, mainCorX, mainCorY[0]-ml_wings, mainCorY[0]);
    l4 = createLine(mainCorX+ml_wings, mainCorX, mainCorY[1]-ml_wings, mainCorY[1]);
    l5 = createLine(mainCorX-ml_wings, mainCorX, mainCorY[1]-ml_wings, mainCorY[1]);
    l6 = createLine(mainCorX-ml_wings, mainCorX, center[1]+30+ml_wings, center[1]+30);
    l7 = createLine(mainCorX+ml_wings, mainCorX, center[1]+30+ml_wings, center[1]+30);
    l6.stroke = "blue";
    l7.stroke = "blue";
    two.update();
    let delta_t = -30;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 38) { // up
            if (delta_t < 156){
                let delta = 4;
                l6.translation.y -= delta;
                l7.translation.y -= delta;
                delta_t += delta;
            }
        } else if (event.keyCode == 40) { // down
            if (delta_t > -156+2*ml_wings){
                let delta = 4;
                l6.translation.y += delta;
                l7.translation.y += delta;
                delta_t -= delta;
            }
        }
    });
    });
}

function inst2_7() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>We are going to do few of these</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst3_1() {

    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.style.display = "none";
    timerDisplay.textContent = "";
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Well done so far</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}



function inst3_2() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Now after hitting the Space-Bar, you'll spot a red line popping up</p>
        <p>The red line is the percise middle points that cuts the bigger line in half</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst3_3() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Let's see an example</p>
        <p>Use the Left-Arrow and Right-Arrow key to find the middle</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);

    let l1, l2, l3, l4, l5, l6, l7, ml_wv, ml_wings, center;
    ml_wv = 200;
    ml_wings = 50;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l1 = createLine(mainCorX[0], mainCorX[1], mainCorY, mainCorY);
    l2 = createLine(mainCorX[0]+ml_wings, mainCorX[0], mainCorY-ml_wings, mainCorY);
    l3 = createLine(mainCorX[0]+ml_wings, mainCorX[0], mainCorY+ml_wings, mainCorY);
    l4 = createLine(mainCorX[1]+ml_wings, mainCorX[1], mainCorY-ml_wings, mainCorY);
    l5 = createLine(mainCorX[1]+ml_wings, mainCorX[1], mainCorY+ml_wings, mainCorY);
    l6 = createLine(center[0]-30-ml_wings, center[0]-30, mainCorY-ml_wings, mainCorY);
    l7 = createLine(center[0]-30-ml_wings, center[0]-30, mainCorY+ml_wings, mainCorY);
    l6.stroke = "blue";
    l7.stroke = "blue";
    two.update();
    let delta_t = 30;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 37) { // down left
            if (delta_t < 196-2*ml_wings){
                let delta = 4;
                l6.translation.x -= delta;
                l7.translation.x -= delta;
                delta_t += delta;
            }
        } else if (event.keyCode == 39) { // down right
            if (delta_t > -196){
                let delta = 4;
                l6.translation.x += delta;
                l7.translation.x += delta;
                delta_t -= delta;
            }
        }
    });
    });
}

function inst3_4() {
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>The red line is the exact middle</p>
        <p>Press Space-Bar to continue</p>
    `;
    document.body.appendChild(message);

    let l8, ml_wv, ml_wings, center;
    ml_wv = 200;
    ml_wings = 50;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l8 = createLine(center[0], center[0], mainCorY+ml_wings, mainCorY-ml_wings);
    l8.stroke = "red";
    two.update();
    let keyDownHandler;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
            document.removeEventListener('keydown', keyDownHandler);

        }
    });
    });
}



function inst3_5() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Let's do another one</p>
        <p>Use the Left-Arrow and Right-Arrow key to find the middle</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);

    let l1, l2, l3, l4, l5, l6, l7, ml_wv, ml_wings, center;
    ml_wv = 160;
    ml_wings = 40;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l1 = createLine(mainCorX[0], mainCorX[1], mainCorY, mainCorY);
    l2 = createLine(mainCorX[0]+ml_wings, mainCorX[0], mainCorY-ml_wings, mainCorY);
    l3 = createLine(mainCorX[0]+ml_wings, mainCorX[0], mainCorY+ml_wings, mainCorY);
    l4 = createLine(mainCorX[1]+ml_wings, mainCorX[1], mainCorY-ml_wings, mainCorY);
    l5 = createLine(mainCorX[1]+ml_wings, mainCorX[1], mainCorY+ml_wings, mainCorY);
    l6 = createLine(center[0]+60-ml_wings, center[0]+60, mainCorY-ml_wings, mainCorY);
    l7 = createLine(center[0]+60-ml_wings, center[0]+60, mainCorY+ml_wings, mainCorY);
    l6.stroke = "blue";
    l7.stroke = "blue";
    two.update();
    let delta_t = 30;
    let keyDownHandler;

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
            document.removeEventListener('keydown', keyDownHandler);

        }
        if (event.keyCode == 37) { // down left
            if (delta_t < 170){
                let delta = 4;
                l6.translation.x -= delta;
                l7.translation.x -= delta;
                delta_t += delta;
            }
        } else if (event.keyCode == 39) { // down right
            if (delta_t > -70){
                let delta = 4;
                l6.translation.x += delta;
                l7.translation.x += delta;
                delta_t -= delta;
            }
        }
    });
    });
}

function inst3_6() {
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Again, the red line is the exact middle</p>
        <p>Press Space-Bar to continue</p>
    `;
    document.body.appendChild(message);

    let l8, ml_wv, ml_wings, center;
    ml_wv = 160;
    ml_wings = -40;
    center = getCenterCoordinates();
    const mainCorY = center[1];
    const mainCorX = [center[0] - ml_wv, center[0] + ml_wv];
    l8 = createLine(center[0], center[0], mainCorY+ml_wings, mainCorY-ml_wings);
    l8.stroke = "red";
    two.update();
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst3_7() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>We are going to do few of these</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst4_1() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Well done so far</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst4_2() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Now we will go back to the old style</p>
        <p>There will no red line popping up and there is a timer on the top again</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst4_3() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Let's do few more</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}


function inst5_0() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.style.display = "none";
    timerDisplay.textContent = "";
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Well done so far</p>
        <p>Now will move on to task 2 out of the 2 tasks</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}


function inst5_1() {

    two.clear();
    return new Promise(resolve => {
        var style = document.createElement('style');
        style.innerHTML = `
            .welcome-message {
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: darkblue;
            text-align: center;
            font-size: 24px;
            }
        `;
        document.head.appendChild(style);

        var message = document.createElement('div');
        message.classList.add('welcome-message');
        message.innerHTML = `
            <p>Adjust the hieght of the blue line so that both lines are euqal</p>
            <p>Using the Up-Arrrow and Down-Arrrow keys</p>
            <p>When you think they match, press Space-Bar</p>
        `;
        document.body.appendChild(message);

        let l1, l2, wv, center;
        wv = 75;
        center = getCenterCoordinates();
        const mainCorY = [center[1] - wv, center[1] + wv];
        const mainCorX = center[0];
        l2 = createLine(mainCorX + 50, mainCorX + 50, mainCorY[0], mainCorY[1]);
        l1 = createLine(mainCorX - 50, mainCorX - 50, mainCorY[0]-50, mainCorY[1]);
        l2.stroke = 'blue';
        two.update();
        let delta_t = 0;

        const keyDownFunction = function(event) {
            if (event.code === 'Space') {
                message.style.display = 'none';
                if(document.head.contains(style)) document.head.removeChild(style);
                document.removeEventListener('keydown', keyDownFunction);
                resolve(); // Resolving the promise when space bar is pressed
            }
            if (event.keyCode == 40) { // down arrow
                if (delta_t > -85){
                    let delta = 2;
                    l2.vertices[0].y  += delta;
                    delta_t -= delta;
                }
            }
            if (event.keyCode == 38) { // up arrow
                if (delta_t < 80){
                    let delta = 2;
                    l2.vertices[0].y  -= delta;
                    delta_t += delta;
                }
            }
        };

        document.addEventListener('keydown', keyDownFunction);
    });
}


function inst5_2() {
    two.clear();
    return new Promise(resolve => {
        var style = document.createElement('style');
        style.innerHTML = `
            .welcome-message {
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: darkblue;
            text-align: center;
            font-size: 24px;
            }
        `;
        document.head.appendChild(style);

        var message = document.createElement('div');
        message.classList.add('welcome-message');
        message.innerHTML = `
            <p>Now adjust the hieght of the blue line so that both lines are euqal in length</p>
            <p>Using the Up-Arrrow and Down-Arrrow keys</p>
            <p>When you think they match, press Space-Bar</p>
        `;
        document.body.appendChild(message);

        let l1, l2, wv, center;
        wv = 75;
        center = getCenterCoordinates();
        const mainCorY = [center[1] - wv, center[1] + wv];
        const mainCorX = center[0];
        l2 = createLine(mainCorX + 50, mainCorX + 50, mainCorY[0], mainCorY[1]);
        l1 = createLine(mainCorX - 100, mainCorX, mainCorY[1], mainCorY[1]);
        l2.stroke = 'blue';
        two.update();
        let delta_t = 0;

        const keyDownFunction = function(event) {
            if (event.code === 'Space') {
                message.style.display = 'none';
                if(document.head.contains(style)) document.head.removeChild(style);
                document.removeEventListener('keydown', keyDownFunction);
                resolve(); // Resolving the promise when space bar is pressed
            }
            if (event.keyCode == 40) { // down arrow
                if (delta_t > -120){
                    let delta = 2;
                    l2.vertices[0].y  += delta;
                    delta_t -= delta;
                }
            }
            if (event.keyCode == 38) { // up arrow
                if (delta_t < 40){
                    let delta = 2;
                    l2.vertices[0].y  -= delta;
                    delta_t += delta;
                }
            }
        };

        document.addEventListener('keydown', keyDownFunction);
    });
}



function inst5_3() {
    two.clear();
    return new Promise(resolve => {
        var style = document.createElement('style');
        style.innerHTML = `
            .welcome-message {
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: darkblue;
            text-align: center;
            font-size: 24px;
            }
        `;
        document.head.appendChild(style);

        var message = document.createElement('div');
        message.classList.add('welcome-message');
        message.innerHTML = `
            <p>Again, adjust height of the blue line to ensure that both lines have the same length.</p>
            <p>Using the Up-Arrrow and Down-Arrrow keys</p>
            <p>When you think they match, press Space-Bar</p>
        `;
        document.body.appendChild(message);

        let l1, l2, wv, center;
        wv = 75;
        center = getCenterCoordinates();
        const mainCorY = [center[1] - wv, center[1] + wv];
        const mainCorX = center[0];
        l2 = createLine(mainCorX, mainCorX, mainCorY[0], mainCorY[1]);
        l1 = createLine(mainCorX-50, mainCorX+50, mainCorY[1], mainCorY[1]);
        l2.stroke = 'blue';
        two.update();
        let delta_t = 0;

        const keyDownFunction = function(event) {
            if (event.code === 'Space') {
                message.style.display = 'none';
                if(document.head.contains(style)) document.head.removeChild(style);
                document.removeEventListener('keydown', keyDownFunction);
                resolve(); // Resolving the promise when space bar is pressed
            }
            if (event.keyCode == 40) { // down arrow
                if (delta_t > -150){
                    let delta = 2;
                    l2.vertices[0].y  += delta;
                    delta_t -= delta;
                }
            }
            if (event.keyCode == 38) { // up arrow
                if (delta_t < 100){
                    let delta = 2;
                    l2.vertices[0].y  -= delta;
                    delta_t += delta;
                }
            }
        };

        document.addEventListener('keydown', keyDownFunction);
    });
}

function inst5_4() {
    two.clear();
    return new Promise(resolve => {
        var style = document.createElement('style');
        style.innerHTML = `
            .welcome-message {
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: darkblue;
            text-align: center;
            font-size: 24px;
            }
        `;
        document.head.appendChild(style);

        var message = document.createElement('div');
        message.classList.add('welcome-message');
        message.innerHTML = `
            <p>Sometimes the lines will have different angle</p>
            <p>Again, adjust height of the blue line to ensure that both lines have the same length.</p>
            <p>Using the Left-Arrrow and Right-Arrrow keys</p>
            <p>When you think they match, press Space-Bar</p>
        `;
        document.body.appendChild(message);

        let l1, l2, wv, center;
        wv = 75;
        center = getCenterCoordinates();
        const mainCorY = [center[1] - wv, center[1] + wv];
        const mainCorX = center[0];
        l1 = createLine(mainCorX, mainCorX, mainCorY[0], mainCorY[1]);
        l2 = createLine(mainCorX, mainCorX+50, center[1], center[1]);
        l2.stroke = 'blue';
        two.update();
        let delta_t = 0;

        const keyDownFunction = function(event) {
            if (event.code === 'Space') {
                message.style.display = 'none';
                if(document.head.contains(style)) document.head.removeChild(style);
                document.removeEventListener('keydown', keyDownFunction);
                resolve(); // Resolving the promise when space bar is pressed
            }
            if (event.keyCode == 37) { // left arrow
                if (delta_t > -50){
                    let delta = 2;
                    l2.vertices[1].x  -= delta;
                    delta_t -= delta;
                }
            }
            if (event.keyCode == 39) { // right arrow
                if (delta_t < 140){
                    let delta = 2;
                    l2.vertices[1].x  += delta;
                    delta_t += delta;
                }
            }
        };

        document.addEventListener('keydown', keyDownFunction);
    });
}


function inst5_5() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>We are going to do few of these</p>
        <p>Please ensure to respond within the time limit and don't spend more than a few seconds on each adjustment</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}


function inst6_0() {

    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.style.display = "none";
    timerDisplay.textContent = "";
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Well done so far</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst6_1() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Now after hitting the Space-Bar, you'll spot a red line popping up</p>
        <p>The red line is the same size as the black line</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}


function inst6_2() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Let's see an example</p>
        <p>Use the Up-Arrow and Down-Arrow key to find the middle</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);
    let l1, l2, wv, center;
    wv = 75;
    center = getCenterCoordinates();
    const mainCorY = [center[1] - wv, center[1] + wv];
    const mainCorX = center[0];
    l2 = createLine(mainCorX, mainCorX, mainCorY[0], mainCorY[1]);
    l1 = createLine(mainCorX-50, mainCorX+50, mainCorY[1], mainCorY[1]);
    l2.stroke = 'blue';
    two.update();
    let delta_t = 0;

    const keyDownFunction = function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            document.removeEventListener('keydown', keyDownFunction);
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 40) { // down arrow
            if (delta_t > -150){
                let delta = 2;
                l2.vertices[0].y  += delta;
                delta_t -= delta;
            }
        }
        if (event.keyCode == 38) { // up arrow
            if (delta_t < 100){
                let delta = 2;
                l2.vertices[0].y  -= delta;
                delta_t += delta;
            }
        }
    };

    document.addEventListener('keydown', keyDownFunction);
});
}



function inst6_3() {
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>The red line is the exact length of the black line</p>
        <p>Press Space-Bar to continue</p>
    `;
    document.body.appendChild(message);
    document.body.appendChild(message);
    let l3, wv, center;
    wv = 75;
    center = getCenterCoordinates();
    const mainCorY = [center[1] - wv, center[1] + wv];
    const mainCorX = center[0];
    l3 = createLine(mainCorX+5, mainCorX+5, mainCorY[0]+25, mainCorY[1]);
    l3.stroke = 'red';
    two.update();
    let delta_t = 0;

    const keyDownFunction = function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            document.removeEventListener('keydown', keyDownFunction);
            resolve(); // Resolving the promise when space bar is pressed
        }
    };

    document.addEventListener('keydown', keyDownFunction);
});
}


function inst6_4() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Let's do another one</p>
        <p>Use the Up-Arrow and Down-Arrow key to find the middle</p>
        <p>Press Space-Bar when adjusted</p>
    `;
    document.body.appendChild(message);
    let l1, l2, wv, center;
    wv = 50;
    center = getCenterCoordinates();
    const mainCorY = [center[1] - wv + 50, center[1] + wv + 50];
    const mainCorX = center[0];
    l2 = createLine(mainCorX, mainCorX, mainCorY[0], mainCorY[1]);
    l1 = createLine(mainCorX-100, mainCorX+100, mainCorY[1], mainCorY[1]);
    l2.stroke = 'blue';
    two.update();
    let delta_t = 0;

    const keyDownFunction = function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            document.removeEventListener('keydown', keyDownFunction);
            resolve(); // Resolving the promise when space bar is pressed
        }
        if (event.keyCode == 40) { // down arrow
            if (delta_t > -100){
                let delta = 2;
                l2.vertices[0].y  += delta;
                delta_t -= delta;
            }
        }
        if (event.keyCode == 38) { // up arrow
            if (delta_t < 170){
                let delta = 2;
                l2.vertices[0].y  -= delta;
                delta_t += delta;
            }
        }
    };

    document.addEventListener('keydown', keyDownFunction);
});
}



function inst6_5() {
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Again, the red line is the exact length of the black line</p>
        <p>Press Space-Bar to continue</p>
    `;
    document.body.appendChild(message);
    document.body.appendChild(message);
    let l3, wv, center;
    wv = 50;
    center = getCenterCoordinates();
    const mainCorY = [center[1] - wv + 50, center[1] + wv + 50];
    const mainCorX = center[0];
    l3 = createLine(mainCorX+5, mainCorX+5, mainCorY[1], mainCorY[1]-200);
    l3.stroke = 'red';
    two.update();
    let delta_t = 0;

    const keyDownFunction = function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            document.removeEventListener('keydown', keyDownFunction);
            resolve(); // Resolving the promise when space bar is pressed
        }
    };

    document.addEventListener('keydown', keyDownFunction);
});
}


function inst7_1() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.style.display = "none";
    timerDisplay.textContent = "";
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Well done so far</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst7_2() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Now we will go back to the old style</p>
        <p>There will no red line popping up and there is a timer on the top again</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst7_3() {
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Let's do few more</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed
        }
    });
    });
}

function inst8() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.style.display = "none";
    timerDisplay.textContent = "";
    two.clear();
    return new Promise(resolve => {
    var style = document.createElement('style');
    style.innerHTML = `
        .welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: darkblue;
        text-align: center;
        font-size: 24px;
        }
    `;
    document.head.appendChild(style);

    var message = document.createElement('div');
    message.classList.add('welcome-message');
    message.innerHTML = `
        <p>Well done!</p>
        <p>(Press Space-Bar to continue)</p>
    `;
    document.body.appendChild(message);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            message.style.display = 'none';
            if(document.head.contains(style)) document.head.removeChild(style);
            resolve(); // Resolving the promise when space bar is pressed

            // Redirect to debrief.html after the function finishes
            window.location.href = 'debrief.html';
        }
    });
    });
}

function idMessage() {
    return new Promise((resolve) => {
        var style = document.createElement('style');
        style.innerHTML = `
            .welcome-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: darkblue;
            text-align: center;
            font-size: 24px;
            }
            .welcome-message input {
            display: block;
            margin: 20px auto;
            }
        `;
        document.head.appendChild(style);

        var message = document.createElement('div');
        message.classList.add('welcome-message');
        message.innerHTML = `
            <p>Enter ID</p>
            <p>Press the Space-Bar to continue</p>
            <input id="userInput" type="text" placeholder="Type something..." />
        `;
        document.body.appendChild(message);

        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space') {
                var inputText = document.getElementById('userInput').value;
                
                if (inputText) {
                    message.style.display = 'none';
                    if(document.head.contains(style)) document.head.removeChild(style);
                    resolve(inputText); // Resolving the promise with the input string
                } else {
                    alert('Input is empty. Please provide input.'); // Alert the user about the empty input
                }
            }
        });
    });
}
