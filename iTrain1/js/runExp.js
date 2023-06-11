

let pid;

let timer, bias;
// start = getRandomNumber((-1)*width_val+(width_val/2), width_val-(width_val/2));

let start, x, y, stim_trial, widths; 

let header = ["partip", "task", "round", "trial", "width", "hor", "flip", "start", "bias", "train", "jit_x", "jit_y", "time"];
let matrix = [header];
let row;
let delta = 1;



let measure_length, feedback_length, width_max, width_min, width_out, time_lim;
measure_length = 36;
feedback_length = 9;
width_max = 150;
width_min = 250;
width_out = measure_length;
let jit_min_max = [-100, 100];
time_lim = 10;


async function runExperiment(debug = false) {
    console.log("Hello");

    pid = await idMessage();
    // Welcomne and first set of instructions:
    await showWelcomeMessage();
    await inst1_1();
    await inst1_2();
    await inst1_3();
    await inst1_4();
    await inst1_5();
    await inst1_6(true);
    await inst1_7();


    // Task 1.1 instructions:
    await inst2_1();
    await inst2_2();
    await inst2_3();
    await inst2_4();
    await inst2_5();
    await inst2_6();
    await inst2_7();

    // Pre-feedback Judd
    stim_trial = createBoolSequence(2, measure_length/4);
    stim_trial = shuffleList(stim_trial);
    widths = generateRandomNumbers(width_min, width_max, measure_length);
    widths = shuffleList(widths);
    for (let i = 0; i < measure_length; i++) {


        y = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        x = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        start = getRandomNumber(-widths[i]/6, widths[i]/6);
        start = parseInt(start);
        timer = time_lim;

        timer = time_lim;
        if (stim_trial[i][1] == true){
            start *=-1
        }


        if (debug == true){
            console.log(`trial: ${i+1}`)
            console.log(`Hor: ${stim_trial[i][0]}, Flip ${stim_trial[i][1]}`);
            console.log(`start: ${start}`);
        }

        await runJudd(widths[i], [x, y], start, stim_trial[i][0], stim_trial[i][1], false, true, debug);
        bias = findBiasJudd(start, stim_trial[i][0], stim_trial[i][1]);
        bias = Number(bias.toFixed(4));

        if (debug == true){
            console.log(`bias: ${bias}`);
        }


        start = Number(start.toFixed(4));
        row = [pid, 1, 1, i, widths[i], stim_trial[i][0], stim_trial[i][1], start, bias ,false, x, y, timer];
        matrix.push(row);
    }

    // Task 1.2 instructions:
    await inst3_1();
    await inst3_2();
    await inst3_3();
    await inst3_4();
    await inst3_5();
    await inst3_6();
    await inst3_7();


    // Feedback Judd
    widths = generateRandomNumbers(width_min, width_max, feedback_length);
    widths = shuffleList(widths); 
    for (let i = 0; i < feedback_length; i++) {
        y = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        x = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        start = getRandomNumber(-widths[i]/6, widths[i]/6);
        start = parseInt(start);


        if (debug == true){
            console.log(`start: ${start}`);
        }


        await runJudd(widths[i], [x, y], start, true, false, false, false, debug);
        bias = findBiasJudd(start, true, false);
        if (debug == true){
            console.log(`bias: ${bias}`);
        }
        await runJudd(widths[i], [x, y], start, true, false, true, false);

        bias = Number(bias.toFixed(4));
        start = Number(start.toFixed(4));
        row = [pid, 1, NaN, i, widths[i], true, false, start, bias ,true, x, y, NaN];
        matrix.push(row);
    }


    // Task 1.3 instructions:

    await inst4_1();
    await inst4_2();
    await inst4_3();



    // Post-feedback Judd
    stim_trial = createBoolSequence(2, measure_length/4);
    stim_trial = shuffleList(stim_trial);
    widths = generateRandomNumbers(width_min, width_max, measure_length);
    widths = shuffleList(widths);
    for (let i = 0; i < measure_length; i++) {
        y = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        x = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        start = getRandomNumber(-widths[i]/6, widths[i]/6)
        start = parseInt(start);
        if (stim_trial[i][1] == true){
            start *=-1
        }
        timer = time_lim;
        if (debug == true){
            console.log(`trial: ${i+1}`)
            console.log(`Hor: ${stim_trial[i][0]}, Flip ${stim_trial[i][1]}`);
            console.log(`start: ${start}`);
        }
        await runJudd(widths[i], [x, y], start, stim_trial[i][0], stim_trial[i][1], false, true, debug);
        bias = findBiasJudd(start, stim_trial[i][0], stim_trial[i][1]);
        bias = Number(bias.toFixed(4));

        if (debug == true){
            console.log(`bias: ${bias}`);
        }

        start = Number(start.toFixed(4));
        row = [pid, 1, 2, i, widths[i], stim_trial[i][0], stim_trial[i][1], start, bias ,false, x, y, timer];
        matrix.push(row);


    }

    
    // Task 2.1 instructions:
    await inst5_0();
    await inst5_1();
    await inst5_2();
    await inst5_3();
    await inst5_4();
    await inst5_5();


    // Pre-feedback BS
    stim_trial = createBoolSequence(2, measure_length/4);
    stim_trial = shuffleList(stim_trial);
    widths = generateRandomNumbers(width_min, width_max, measure_length);
    widths = shuffleList(widths);
    for (let i = 0; i < measure_length; i++) {
        y = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        x = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        start = getRandomNumber(-widths[i]/6, widths[i]/6);

        start = parseInt(start);
        if (stim_trial[i][1] == true){
            start *=-1
        }

        if (debug == true){
            console.log(`trial: ${i+1}`)
            console.log(`Hor: ${stim_trial[i][0]}, Flip ${stim_trial[i][1]}`);
            console.log(`start: ${start}`);
        }
        timer = time_lim;
        await runBS(widths[i], [x, y], start, stim_trial[i][0], stim_trial[i][1], false, true, debug);
        bias = findBiasBS(widths[i], [x, y], stim_trial[i][0], stim_trial[i][1]); 
        bias = Number(bias.toFixed(4));
        start = Number(start.toFixed(4));


        if (debug == true){
            console.log(`bias: ${bias}`);
        }

        row = [pid, 2, 1, i, widths[i], stim_trial[i][0], stim_trial[i][1], start, bias ,false, x, y, timer];
        matrix.push(row);

    }

    width_max = 400;
    width_min = 300;

    // Task 2.2 instructions:
    await inst6_0();
    await inst6_1();
    await inst6_2();
    await inst6_3();
    await inst6_4();
    await inst6_5();


    // Feedback BS
    widths = generateRandomNumbers(width_min, width_max, feedback_length);
    widths = shuffleList(widths); 
    for (let i = 0; i < feedback_length; i++) {
        y = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        x = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        y = parseInt(y);
        x = parseInt(x);
        start = getRandomNumber(-widths[i]/6, widths[i]/6);
        start = parseInt(start);


        if (debug == true){
            console.log(`start: ${start}`);
        }

        timer = time_lim;

        await runBS(widths[i], [x, y], start, true, false, false, false, debug);
        bias = findBiasBS(widths[i], [x, y], true, false); 
        bias = Number(bias.toFixed(4));
        start = Number(start.toFixed(4));
        row = [pid, 2, NaN, i, widths[i], true, false, start, bias ,true, x, y, timer];
        matrix.push(row);
        if (debug == true){
            console.log(`bias: ${bias}`);
        }
        await runBS(widths[i], [x, y], start, true, false, true, false);



    }


    // Task 2.3 instructions: 
    await inst7_1();
    await inst7_2();
    await inst7_3();


    // Post-feedback BS
    stim_trial = createBoolSequence(2, measure_length/4);
    stim_trial = shuffleList(stim_trial);
    widths = generateRandomNumbers(width_min, width_max, measure_length);
    widths = shuffleList(widths);
    for (let i = 0; i < measure_length; i++) {
        y = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        x = getRandomNumber(jit_min_max[0], jit_min_max[1]);
        start = getRandomNumber(-widths[i]/6, widths[i]/6);
        timer = time_lim;
        start = parseInt(start);
        if (stim_trial[i][1] == true){
            start *=-1
        }
        if (debug == true){
            console.log(`trial: ${i+1}`)
            console.log(`Hor: ${stim_trial[i][0]}, Flip ${stim_trial[i][1]}`);
            console.log(`start: ${start}`);
        }
        await runBS(widths[i], [x, y], start, stim_trial[i][0], stim_trial[i][1], false, true, debug);
        bias = findBiasBS(widths[i], [x, y], stim_trial[i][0], stim_trial[i][1]); 
        bias = Number(bias.toFixed(4));
        start = Number(start.toFixed(4));
        row = [pid, 2, 2, i, widths[i], stim_trial[i][0], stim_trial[i][1], start, bias ,false, x, y, timer];
        matrix.push(row);


        if (debug == true){
            console.log(`bias: ${bias}`);
        }
        
    }
    if (debug==true){
        console.log(matrix);
    } 
    two.clear();
    save_data_csv(matrix, pid);


    await inst8();
}




runExperiment();