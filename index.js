/* Pseudocode of steps and how to solve this exercise. 

Display a message to the user: "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
Define three variables: var1, var2, var3
Calculate var1 using a unique arithmetic operator (+) to generate result 10
Calculate var2 using a different unique arithmetic operator (*) to generate result 40
Calculate var3 using a different unique arithmetic operator (-) to generate result 39
Display the combination codes and accompanying text in a popup dialog, using the alert() function

*/

// Display message to the user
console.log(
  'You have received this message because you have been chosen to open an important vault. Here is the secret combination:'
);

// Define three variables for the combination code: var1, var2, var3
let var1, var2, var3;

// Calculate var1 using addition operator to generate the result of 10
var1 = 5 + 5;

// Calculate var2 using a different operator, multiply, to generate the result of 40
var2 = 8 * 5;

// Calculate var3 using a different operator, subtract, to generate the result of 39
var3 = 40 - 1;

// Display the combination codes
console.log('Code 1:', var1);
console.log('Code 2:', var2);
console.log('Code 3:', var3);

// Display the message that should show up in the popup dialog
alert(
  'Here is the secret combination:\nCode 1: ' +
    code1 +
    '\nCode 2: ' +
    code2 +
    '\nCode 3: ' +
    code3
);
