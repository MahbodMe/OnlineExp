var two = new Two({
    fullscreen: true, // Set to fullscreen
    autostart: true // Automatically start animation
}).appendTo(document.getElementById("lines"));

function shuffleList(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}
function createSequence(start, end, step, repeat) {
    const sequence = [];
    for (let i = start; i <= end; i += step) {
        sequence.push(i);
    }

    const repeatedSequence = [];
    for (let j = 0; j < repeat; j++) {
        repeatedSequence.push(...sequence);
    }

    return repeatedSequence;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideMessage(message) {
    message.style.display = 'none';
}
function showElement(message) {
    message.style.display = 'block';
}

function createJitter() {
    let x, y;
    y = getRandomNumber(-150, 150);
    x = getRandomNumber(-100, 100);
    return([x,y]);
}

function createLine(x1, x2, y1, y2, lineWidth=2) {
    const line = two.makeLine(x1, y1, x2, y2);
    line.linewidth = lineWidth;
    return line;
}

function createBoolSequence(length, numBools) {
    // Helper function to get all possible combinations
    function getAllCombinations(numBools) {
        if (numBools === 1) return [[true], [false]];

        const combinations = [];
        const previousCombinations = getAllCombinations(numBools - 1);
        
        for (const combination of previousCombinations) {
            combinations.push([...combination, true], [...combination, false]);
        }
        
        return combinations;
    }

    const allCombinations = getAllCombinations(numBools);
    const sequence = [];
    
    for (let i = 0; i < length; i++) {
        const currentCombination = allCombinations[i % allCombinations.length];
        
        for (let j = 0; j < 8; j++) { // repeat each combination 8 times
            sequence.push([...currentCombination]);
        }
    }

    return sequence;
}

function createBoolSequence(numBools, repeats) {
    // Helper function to get all possible combinations
    function getAllCombinations(numBools) {
        if (numBools === 1) return [[true], [false]];

        const combinations = [];
        const previousCombinations = getAllCombinations(numBools - 1);
        
        for (const combination of previousCombinations) {
            combinations.push([...combination, true], [...combination, false]);
        }
        
        return combinations;
    }

    const allCombinations = getAllCombinations(numBools);
    const sequence = [];
    
    for (const currentCombination of allCombinations) {
        for (let j = 0; j < repeats; j++) { 
            sequence.push([...currentCombination]);
        }
    }

    return sequence;
}


function getCenterCoordinates() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;

    return [centerX, centerY];
}


function generateRandomNumbers(min, max, numItems) {
    let randomNumbers = [];

    for (let i = 0; i < numItems; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

function save_data_csv(mat, pid) {
    let save_url = "https://specl.socsci.uci.edu/acquire/data4/lib/php/save_data.php";
    let data_dir = "/home/outside/data4/iTrain1";
    var file_name = "iTrain1" + '_p' + pid
    let dat = matrix.map(e => e.join(",")).join("\n");
    jQuery.ajax({
        type: 'post',
        cache: false,
        async: false,
        url: save_url,
        data: {
            data_dir: data_dir,
            file_name: file_name + '.csv', // the file type should be added
            exp_data: dat
        }
    });
}

function getURLPars(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
//    const pid = urlParams.get('pid');
//    const sid = urlParams.get('sid');
    const pid = urlParams.get('PROLIFIC_PID');
    const sid = urlParams.get('SESSION_ID');
    return({pid: pid,sid: sid})
}
