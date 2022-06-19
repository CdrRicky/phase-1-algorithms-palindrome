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
