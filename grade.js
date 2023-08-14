function myGrade(a) {
    if(a >= 70) {
        console.log("A");
  }
    else if(a >= 60 && a < 70) {
        console.log("B");
  }
    else if(a >= 50 && a < 60) {
        console.log("C");
    }
    else if(a >= 45 && a < 50) {
        console.log("D");
    }
    else if(a >= 40 && a < 45) {
        console.log("E");
    }
    else if(a < 40) {
        console.log("F")
    }
    else {
        console.log("Enter your correct score");
    }
}
myGrade(75);
myGrade(63);
myGrade(52);
myGrade(41);
myGrade(39);
