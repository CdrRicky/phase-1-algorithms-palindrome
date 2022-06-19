function isPalindrome(word) {
  // Write your algorithm here
  const wordLen = word.length;
  const halfLen = wordLen / 2;  
   
  for (let i = 0; i < halfLen; i++) {   
    if (word[i] !== word[wordLen - 1 - i]) {  
      return false;  
    }  
  }  
  return true;  
}

/* 
  Add your pseudocode here
  first variable called wordLen of the length
  second variable called halfLen of the wordLen
  loop and set a variable with let to 0 and increment the variable
    check condition if word[index of our let variable] is equal to word[index of(wordLen - 1 - let variable)]
      return true if they are
  return false
*/

/*
  Add written explanation of your solution here
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
