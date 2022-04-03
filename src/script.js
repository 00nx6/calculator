// boiler template for how calculator stores info
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
// getting html elements
const numBttns = Array.from(document.querySelectorAll('.calc-bttn'));
const funcBttns = Array.from(document.querySelectorAll('.calc-bttn_func'));
const display = document.querySelector('.display')
const currentWorkingValue = document.querySelectorAll('.currentValue');
const submit = document.getElementById('submit')

// runs enter function
submit.addEventListener('click', enter)
// all function buttons should run operatorFind
funcBttns.forEach(bttn => {
    bttn.addEventListener('click', operatorFind);
})
// all number bttns should run the number constructor
numBttns.forEach(bttn => {
    bttn.addEventListener('click', numConstruct)
})

function numConstruct() {
    // pushes the current buttons inner text into an array
    // then takes the numbers in there, joins them and turns them from string to number
    numBuild.currentNumber.push(+this.innerText);
    let num = numBuild.currentNumber.join('')
    console.log(numBuild)
    // runs displayUpdate with the current number that should be displayed
    displayUpdate(num)
}
// updates display
function displayUpdate(num) {

    display.innerText = num
}

function operatorFind() {
    // identifies operator
    let operator = this.innerText
    // adds the whole number + the operator at the end to toAction array
    numBuild.toAction.push(+numBuild.currentNumber.join('') + operator)
    // resets current number
    numBuild.currentNumber = []
    
    operation()
}

function operation() {
    // turns the to action value into an array
    let val = Array.from(numBuild.toAction[0])
    // determines operator and stores it in the boilerplate
    numBuild.op = val[val.length-1]
    // removes operator from number
    val.pop()
    val = +val.join('')
    // stores number in working
    numBuild.working.push(val)
    
    operationDetermine()
}
function operationDetermine() {
    //current operation sum is stored as sum, 0 by default 
    let sum = numBuild.default
    // checks if theres a 2nd value to prevent errors
    if (numBuild.working[1] != undefined) {
        // determines current operator, runs the appropriate instructions 
        // and then resets the working values
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
    // pushes the values of currentNumber to working
    numBuild.working.push(...numBuild.currentNumber)
    // runs operationDetermine
    operationDetermine()
}

