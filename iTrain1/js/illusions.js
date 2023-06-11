


let bsl1, bsl2, bsl3;
let jl1, jl2, jl3, jl4, jl5, jl6, jl7, jl8;

function stimJudd(width_val, jits, start, orientation_hor = true, flip = true, train = false) {
    
    let center, wings, x_jit, y_jit;
    y_jit = jits[1];
    x_jit = jits[0];
    if (flip == true) {
        wings = (-1)*width_val/8;
    } else {
        wings = width_val/8;
    }
    center = [two.width / 2, two.height / 2];

    if (orientation_hor == false){
        const mainCorY = [center[1] - width_val / 2 + y_jit, center[1] + width_val / 2 + y_jit];
        const mainCorX = center[0] - 50 + x_jit;
        const trueCent = [mainCorX, center[1] + start + y_jit];
        jl1 = createLine(mainCorX, mainCorX, mainCorY[0], mainCorY[1]);
        jl2 = createLine(mainCorX, mainCorX - wings, mainCorY[0], mainCorY[0] + wings);
        jl3 = createLine(mainCorX, mainCorX + wings, mainCorY[0], mainCorY[0] + wings);
        jl4 = createLine(mainCorX, mainCorX - wings, mainCorY[1], mainCorY[1] + wings);
        jl5 = createLine(mainCorX, mainCorX + wings, mainCorY[1], mainCorY[1] + wings);
        jl6 = createLine(trueCent[0], trueCent[0] + wings, trueCent[1], trueCent[1] - wings);
        jl7 = createLine(trueCent[0], trueCent[0] - wings, trueCent[1], trueCent[1] - wings);  
    } else{
        const mainCorX = [center[0] - width_val / 2 + x_jit, center[0] + width_val / 2 + x_jit];
        const mainCorY = center[1] - 50 + y_jit;
        const trueCent = [center[0] + start + x_jit, mainCorY];
        if (train == true){
            jl8 = createLine(trueCent[0]-start, trueCent[0]-start, mainCorY + wings, mainCorY - wings);
            jl8.stroke = 'red';
        }  else {
            jl1 = createLine(mainCorX[0], mainCorX[1], mainCorY, mainCorY);
            jl2 = createLine(mainCorX[0], mainCorX[0] + wings, mainCorY, mainCorY - wings);
            jl3 = createLine(mainCorX[0], mainCorX[0] + wings, mainCorY, mainCorY + wings);
            jl4 = createLine(mainCorX[1], mainCorX[1] + wings, mainCorY, mainCorY - wings);
            jl5 = createLine(mainCorX[1], mainCorX[1] + wings, mainCorY, mainCorY + wings);
            jl6 = createLine(trueCent[0], trueCent[0] - wings, trueCent[1], trueCent[1] + wings);
            jl7 = createLine(trueCent[0], trueCent[0] - wings, trueCent[1], trueCent[1] - wings);
        }
    }
    two.update();
}



function stimBS(width_val, jits, start, orientation_hor = true, flip = true, train = false) {
    let center, wings, x_jit, y_jit;
    y_jit = jits[1];
    x_jit = jits[0];
    if (flip == true) {
        wings = (-1)*width_val/8;
    } else {
        wings = width_val/8;
    }
    
    center = [two.width / 2, two.height / 2];
    if (orientation_hor == false){
        const mainCorX = [center[0] - width_val / 2 + x_jit, center[0] + width_val / 2 + x_jit];
        const mainCorY = [center[1] - width_val / 2 + y_jit, center[1] + width_val / 2 + y_jit];
        const mainY = (mainCorY[0] + mainCorY[1])/2;
        if (flip == false) {
            bsl1 = createLine(mainCorX[1], mainCorX[1], mainCorY[0], mainCorY[1]);
            bsl2 = createLine(mainCorX[0]+start, mainCorX[1], mainY, mainY);
        } else{
            bsl1 = createLine(mainCorX[0], mainCorX[0], mainCorY[0], mainCorY[1]);
            bsl2 = createLine(mainCorX[0], mainCorX[1]+start, mainY, mainY);
        }
    } else{
        const mainCorX = [center[0] - width_val / 2 + x_jit, center[0] + width_val / 2 + x_jit];
        const mainCorY = [center[1] - width_val / 2 + y_jit, center[1] + width_val / 2 + y_jit];
        const mainX = (mainCorX[0] + mainCorX[1])/2;
        if (train == true){
            bsl3 = createLine(mainX+10, mainX+10, mainCorY[0], mainCorY[1]);
            bsl3.stroke = 'red';
        } else{
            if (flip == false) {
                bsl1 = createLine(mainCorX[0], mainCorX[1], mainCorY[1], mainCorY[1]);
                bsl2 = createLine(mainX, mainX, mainCorY[0]+start, mainCorY[1]);
            } else{
                bsl1 = createLine(mainCorX[0], mainCorX[1], mainCorY[0], mainCorY[0]);
                bsl2 = createLine(mainX, mainX, mainCorY[0], mainCorY[1]+start);
            }
        }
    }
    two.update();
}



function findBiasJudd(orig, orien, flip){
    let endCur, end;    
    if (orien == false){
        endCur = jl6.translation.y;
        end = endCur+orig;
        if (flip == true){
            if (end != 0){
                end *= -1;      
            }
        } 
    } else if (orien == true){
        endCur = jl6.translation.x;
        end = endCur+orig;
        if (flip == true){
            if (end != 0){
                end *= -1;      
            }
        } 
    }
    return(end);
}


function findBiasBS(width_val, [x,y], orien, flip){
    let endCur, end, center;    
    center = [two.width / 2, two.height / 2];
    if (orien == false){
        const mainCorX = [center[0] - width_val / 2 + x, center[0] + width_val / 2 + x];
        if (flip == false){
            endCur = bsl2.vertices[0].x;
            end = endCur-mainCorX[0];
            if (end != 0){
                end *= 1;      
            } 
        } else if (flip == true) {
            endCur = bsl2.vertices[1].x;
            end = endCur-mainCorX[1];
            if (end != 0){
                end *= -1;      
            } 
        }
    } else if (orien == true){
        const mainCorY = [center[1] - width_val / 2 + y, center[1] + width_val / 2 + y];
        if (flip == false){
            endCur = bsl2.vertices[0].y;
            end = endCur-mainCorY[0];
            if (end != 0){
                end *= 1;      
            } 
        } else if (flip == true) {
            endCur = bsl2.vertices[1].y;
            end = endCur-mainCorY[1];
            if (end != 0){
                end *= -1;      
            } 
        }
    } 
    return(end);
}