var Word=prompt("Enter the String:");
function findLongestWord() {
    const splStrArray = Word.split(' ');
    let longestWord = "";
    for(let index = 0; index < splStrArray.length; index++){
      if(splStrArray[index].length > longestWord.length){
           longestWord = splStrArray[index];
       }
    }
   document.write(longestWord); 
  }
  findLongestWord();