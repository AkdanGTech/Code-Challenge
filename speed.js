let a = 1;
let b = a++;
function carSpeed(s) {
    if(s <= 70) {
        console.log("Ok");
    }
    else if(s >70 && s <=75) {
        console.log(`Points:${b}`);
    }
    else if(s >75 && s <=80) {
        console.log(`Points:${a}`);
    }
    else if(s >80 && s <=85) {
        console.log(`Points:${a+1}`);
    }
    else if(s >85 && s <=90) {
        console.log(`Points:${a+2}`);
    }
    else if(s >90 && s <=95) {
        console.log(`Points:${a+3}`);
    }
    else if(s >95 && s <=100) {
        console.log(`Points:${a+4}`);
    }
    else if(s >100 && s <=105) {
        console.log(`Points:${a+5}`);
    }
    else if(s >105 && s <=110) {
        console.log(`Points:${a+6}`);
    }
    else if(s >110 && s <=115) {
        console.log(`Points:${a+7}`);
    }
    else if(s >115 && s <=120) {
        console.log(`Points:${a+8}`);
    }
    else if(s >120 && s <=125) {
        console.log(`Points:${a+9}`);
    }
    else if(s >125 && s <=130) {
        console.log(`Points:${a+10}`);
    }
    else {
        console.log("License suspended");
    }
}
carSpeed(70);
carSpeed(75);
carSpeed(80);
carSpeed(90);
carSpeed(100);
carSpeed(105);
carSpeed(110);
carSpeed(115);
carSpeed(120);
carSpeed(125);
carSpeed(130);
carSpeed(135);
