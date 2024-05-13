import inquirer  from "inquirer";



let startTimer = await inquirer.prompt(
    [
        {
            name: "enterTimeMinute",
            message: "Set a Timer in Minute",
            type: "input"
        },
        {
            name: "enterTimeSecond",
            message: "Set a Timer in Second",
            type: "input"
        }
    ],
);


let timeInMin: number = parseInt(startTimer.enterTimeMinute)*60;
// let convertInSec: number = timeInMin * 60;
let timeInSec: number = parseInt(startTimer.enterTimeSecond);
let totalSeconds: number = timeInMin + timeInSec;

for(let i = totalSeconds; i >= 0; i--){

// setTimeout() method is used to delay your result for miliseconds
    setTimeout(() => {
        console.log(`Your Remaining Time is: ${i}`);
        
        if(i === 0){
            console.log(`Time Over!!`);
        };
        
    }, (totalSeconds - i) * 1000);
    
};























// for(let i = 0; true; i++){
    
//         console.log(`01011001010100100110000101001001010100101010010101011010100101100101101011001010101101011100101010001010101001101101011101`);
//         console.log(`1010110101011010101010110010101011010111001010100010101101010101100101010110101110010101000101010101010101010`);
//         console.log(`01010101011010010111001010101010110011100101110101010101011010101010110101101`);
//         console.log(`0101100101010010011000010100100010101010110100101110010101010101100111001011101010101010110101010101101011011010100101010010101011010100101100101101101101011101`);
//         console.log(`101011010101010110010101011010111001010100010101010110101101010101011001010101101011100101010101010`);
//         console.log(`10101101010101011001010101101011100101010001010101010101100101010110101110010101000101010101010110010101011010111001010100010101010110101101010101011001010101101011100101010101010`);

// }