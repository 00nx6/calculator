// boiler template for how calculator stores info
let calcStore = {
    currentNumber : [
        
    ],
    toAction: [

    ],
    working: [

    ],
    default: 0,
    op: undefined
}; 
// getting the html elements
const numBttns = Array.from(document.querySelectorAll('.calc-bttn'));
const funcBttns = Array.from(document.querySelectorAll('.calc-bttn_func'));
const enter = document.getElementById('submit');
const display = document.querySelector('.display');
const currentWorkingValue = document.querySelector('.currentValue');
const del = document.querySelector('.calc-bttn_op')
del.addEventListener('click', function() {
    calcStore.currentNumber.pop()
    let num = calcStore.currentNumber
    displayUpdate(num)
})
// adding event listeners for numbers when theyre clicked
numBttns.forEach(bttn => {
    bttn.addEventListener('click', numConstruct)
});
funcBttns.forEach(bttn => {
    bttn.addEventListener('click', detOp)
})

function numConstruct() {
    console.log(calcStore)
    // taking inner text from what ever number is clicked and pushing it into currentNumber
    calcStore.currentNumber.push(+this.innerText);
    let num = calcStore.currentNumber.join('')
    displayUpdate(num)
}

function detOp() {
    // just make it do nothing if operator is the same
    if (calcStore.op == this.innerText) detOp()
    if (calcStore.currentNumber.length >= 1) {calcStore.working.push(+calcStore.currentNumber.join(''))}
    if (calcStore.working.length == 2) op()
    display.innerText = 0
    calcStore.op = this.innerText
    calcStore.currentNumber = []
}


function op() {
    sum = 0
    num = 0
    switch (calcStore.op) {
        case '+':
            calcStore.working.forEach(num => {
                sum = sum + num
            })
            calcStore.working = []
            calcStore.default = sum
            calcStore.working.push(sum)
            break;
        case '-':
            sum = calcStore.working[0];
            for (let i = 1; i < calcStore.working.length; i++ ) {
              sum = sum - calcStore.working[i]
            }
            
            calcStore.working = []
            calcStore.default = sum
            calcStore.working.push(sum)
            break;
        case '/':
            sum = calcStore.working[0]
            for(let i = 1; i < calcStore.working.length; i++) {
                console.log(sum, calcStore.working[i])
                sum = sum / calcStore.working[i]
            }
            calcStore.working = []
            calcStore.default = sum
            calcStore.working.push(sum)
            break;
        case 'X':
            sum = calcStore.working[0]
            for(let i = 1; i < calcStore.working.length; i++) {
                sum = sum * calcStore.working[i]
            }
            calcStore.working = []
            calcStore.default = sum
            calcStore.working.push(sum)
            break;
        default:
            break;
    }
    currentWorkingValue.innerText = calcStore.default
    displayUpdate(calcStore.default)
}

function displayUpdate(num) {
    display.innerText = num
}

enter.addEventListener('click', () => {
    calcStore.working.push(+calcStore.currentNumber.join(''))
    op()

})
function reset() {
    calcStore.op = undefined
    calcStore.currentNumber = []
}