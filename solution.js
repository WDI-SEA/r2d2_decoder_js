// This is the decoder table. No need to change it!
let decoderTable = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z',
  'BOP': ' '
};

// These are the inputs that you have
let inputs = [[2, 6], [0, 5], [9, 3], [4, 8], [10, 5], 'BOP', [11, 12], [5, 10], [1, 17], [5, 7], [4, 0]];


// STEP 1: Make a new, empty array called letters.
let letters = [];

// STEP 2: Add the total number of beeps + boops to the letters array. This will
// include looping over the inputs array to get the totals.
// In other words, for each array inside the inputs array (starting with [2, 6]),
// the left number (2) is the number of beeps and the right number (6) is the
// number of boops. Add those together to get 8. Add the number 8 to the letters array.
// HINT: Remember to deal with the 'BOP's! You can either ignore them or just pass them directly
// into the letters array
for (let i = 0; i < inputs.length; i++) {
  
  if (inputs[i] == 'BOP') {
    letters.push('BOP');
  } else {
    var beepBoop = inputs[i];
    var sum = beepBoop[0] + beepBoop[1];
    letters.push(sum);
  }
}

// STEP 3: Stop and check. Let's print out our letters array and make sure it contains the
// expected values! Uncomment the below code to check your answers.

console.log('expected values:');
console.log([8, 5, 12, 12, 15, 'BOP', 23, 15, 18, 12, 4])
console.log('actual values:');
console.log(letters);

// STEP 4: Great - we have all the totals and we have the decoder table.
// Together, these can tell us what the secret message is!
// HINT: We need to loop over the letters array. For each item, we need to use it
// as a key in the decoder table. Print the result!

for (let i = 0; i < letters.length; i++) {
  console.log(decoderTable[letters[i]]);
}




