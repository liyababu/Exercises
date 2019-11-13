
 
// Code your transform function here:
const oldScoreKey = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};


function transform(obj){
  
  let newobj={};
  for(let item in oldScoreKey){
     let letters= oldScoreKey[item];
     for(let i=0;i <letters.length;i++){
       newobj[letters[i].toLowerCase()] = parseInt(item);
     }
  }
return newobj;
}

// Use the transform function to create the newScoreKey object here:
let newScoreKey = transform(oldScoreKey);

//Simple Scoring function

function simple(word){
  let score=0;
      for(let i=0;i<word.length;i++){
            score = score + 1;           
      }	  
  return score;
}

//Bonus Vowels function
function bonus(word){
  let Vowels=0;
  let NonVowels=0;

  for(let i=0; i<word.length; i++){
      if(word[i]==='a'||word[i]==='e'||word[i]==='i'||word[i]==='o'||word[i]==='u'){
             Vowels = Vowels + 3 ;
      }
      else{
            NonVowels = NonVowels + 1;
      }
  }  
 return (Vowels+NonVowels);
}


//Scrabble score function
function scrabble(word,newScoreKey){
  let count=0;
  for(let i=0;i<word.length;i++){
    
    for(let j in newScoreKey){
      if(word[i].toLowerCase()===j){
        count= count + newScoreKey[j];
      }
    }   
  }
  return count;
}


// Create your scoringAlgorithms array here:
let scoringAlgorithms = [
            {
              name:'Scrabble',
              description:'The traditional scoring algorithm.',
              scoreFunction: scrabble 
            },                    

            {
              name:'SimpleScore',
              description:'Each letter is worth 1 point.	',
              scoreFunction: simple
            },

            {
              name:'Bonus Vowels',
              description:'Vowels are 3 pts, consonants are 1 pt.',
              scoreFunction:bonus
            }
          ];



// Code your initialPrompt function here:
let info;
function initialPrompt(){

  const input = require('readline-sync');
          console.log("Welcome to the scrabble score calculator!")
          console.log("");
          console.log("Which scoring algorithm would you like to use?");
          console.log("");
          console.log('0 -Scrabble: The traditional scoring algorithm.');
          console.log('1-Simple Score: Each letter is worth 1 point.');
          console.log('2-Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.');
          console.log("");
          info = input.question('Enter 0,1 or 2:');
          
		  if(info === '2'){
            return `Using algorithm: ${scoringAlgorithms[2].name}`;
          }
          else if(info ==='1'){
            return `Using algorithm: ${scoringAlgorithms[1].name}`;
          }
          else if(info === '0'|| info === 'number')
          {
            return `Using algorithm: ${scoringAlgorithms[0].name}`;
          }
          else{
            console.log("Invalid Input,Enter correct number from choice below!!")
            console.log("")
            console.log("Welcome to the scrabble score calculator!")
          console.log("");
          console.log("Which scoring algorithm would you like to use?");
          console.log("");
          console.log('0 -Scrabble: The traditional scoring algorithm.');
          console.log('1-Simple Score: Each letter is worth 1 point.');
          console.log('2-Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.');
          console.log("");
          info = input.question('Enter 0,1 or 2:');
          }
          return ;
}

//Call the runProgram function here:
  function runProgram(scoringAlgorithms){
    const input = require('readline-sync');
    let algorithm=  initialPrompt();
    console.log(algorithm);
    let question='';
           while(question.toLowerCase()!=='stop'.toLowerCase()){
               question = input.question("Enter a word to be scored, or 'Stop' to quit:");
               if(info==='1' && question.toLowerCase()!=='stop'.toLowerCase()){
                   console.log( `Score for ${question}:${scoringAlgorithms[1].scoreFunction(question)}`);
               }
               else if(info==='2' && question.toLowerCase()!=='stop'.toLowerCase()){
                   console.log(  `Score for ${question}:${scoringAlgorithms[2].scoreFunction(question)}`);
               }
               else if (info==='0' && question.toLowerCase()!=='stop'.toLowerCase()){
                   console.log(  `Score for ${question}:${scoringAlgorithms[0].scoreFunction(question,newScoreKey)}`);
               }
           }
  }
runProgram(scoringAlgorithms);