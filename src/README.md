# calculator

This is part of the odin project, However the calculator theyre asking for is only for working with 2 numbers. im trying to recreate a fully functioning calculator with an unlimited number input from the user.
very early stages....................................
live demo @: https://00nx6.github.io/calculator/

## things to fix : 
 - Entered numbers are sorted into different categories based on function input after the number
      - try to make it so it remembers the order of functions: eg 2 + 2 * 2
        + maybe a try a function that skips the number, and then goes to the next which is an operator, 
        where it then does the operation, saves the result in a temporary variable so 
        + eg: tempSum = array[0] + array[2]; tempSum = tempSum * array[4] 
        + rewrite the code so that the enter can also submit numbers into the js object
            -maybe add enter to be one of the func buttons so this.innerText isnt undefined when enter runs the funcDetermine function