// wrong order, seperate the operator off when you have the second number
// and then take the first, determine operator run function for it then push
//  result to working
// continue this process until enter, 
// if no second value is found, assume secondary number is 0

let numBuild = {
    currentNumber : [
        
    ],
    toAction: [

    ],
    working: [

    ],
    default: 0,
    op: undefined
};

const numBttns = Array.from(document.querySelectorAll('.calc-bttn'));
const funcBttns = Array.from(document.querySelectorAll('.calc-bttn_func'));
const display = document.querySelector('.display')
const currentWorkingValue = document.querySelectorAll('.currentValue');
const submit = document.getElementById('submit')

submit.addEventListener('click', enter)
funcBttns.forEach(bttn => {
    bttn.addEventListener('click', operatorFind);
})

numBttns.forEach(bttn => {
    bttn.addEventListener('click', numConstruct)
})
function numConstruct() {
    numBuild.currentNumber.push(+this.innerText);
    let num = numBuild.currentNumber.join('')
    console.log(numBuild)
    displayUpdate(num)
}
function displayUpdate(num) {

    display.innerText = num
}

function operatorFind() {
    let operator = this.innerText
    numBuild.toAction.push(+numBuild.currentNumber.join('') + operator)
    
    numBuild.currentNumber = []

    operation()
}

function operation() {
    // seperate number from operator, then look for the next number in the array
    let val = Array.from(numBuild.toAction[0])
    numBuild.op = val[val.length-1]
    val.pop()
    val = +val.join('')
    numBuild.working.push(val)
    
    operationDetermine()
}
function operationDetermine() {
    let sum = numBuild.default
    if (numBuild.working[1] != undefined) {
        switch(numBuild.op) {
            case'+':
                numBuild.working.forEach((number) => {
                    sum = sum + number;
                })
                numBuild.default = sum
                currentWorkingValue.innerText = sum
                numBuild.toAction = []
                numBuild.working = []
                numBuild.currentNumber = []
                break;
            case '-':
                sum = numBuild.working[0]
                
                for (let i = 1; i < numBuild.working.length; i++ ) {
                    sum = sum - numBuild.working[i]
                }

                numBuild.default = sum
                currentWorkingValue.innerText = sum
                numBuild.toAction = []
                numBuild.working = []
                numBuild.currentNumber = []
                break;

            case '/':
                sum = numBuild.working[0]
                
                for (let i = 1; i < numBuild.working.length; i++ ) {
                    sum = sum / numBuild.working[i]
                }
                numBuild.default = sum
                currentWorkingValue.innerText = sum
                numBuild.toAction = []
                numBuild.working = []
                numBuild.currentNumber = []
                break;
            case 'X': 
            sum = numBuild.working[0]
                
            for (let i = 1; i < numBuild.working.length; i++ ) {
                sum = sum * numBuild.working[i]
            }
                numBuild.default = sum
                currentWorkingValue.innerText = sum
                numBuild.toAction = []
                numBuild.working = []
                numBuild.currentNumber = []
                break;
        }
    }
 
    
}
function enter() {
    numBuild.working.push(...numBuild.currentNumber)
    operationDetermine()

    console.log(numBuild)
}

