var userGuess;
var random ; 
var numWins = 0;
var numLoses = 0;

var targetNumber ;



var counter = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.

var numberOptions = [] ;

initiate();


$("#crystals-1").on("click", uniKey1);

   function uniKey1() {
      counter +=  numberOptions[0];

    
     check();
    }


    
     
$("#crystals-2").on("click", uniKey2);

function uniKey2() {
   counter +=  numberOptions[1];
check();

 }



 $("#crystals-3").on("click", uniKey3);

   function uniKey3() {
      counter +=  numberOptions[2];

    
     check();
    }


    $("#crystals-4").on("click", uniKey4);

   function uniKey4() {
      counter +=  numberOptions[3];


    //  document.getElementById("number-add").innerHTML = counter;
     
     check();
    }



    function check(){

      document.getElementById("number-add").innerHTML = counter;
      if (counter === targetNumber) {
  //      alert("You win!");
        numWins++;
        document.getElementById("wins").innerHTML = numWins;

        reset();
      }
    
      else if (counter >= targetNumber) {
   //     alert("You lose!!");
        numLoses++;
    
        document.getElementById("loses").innerHTML = numLoses;


        reset();
      }
    
    }


    function initiate() {

    for (var i = 0; i < 4; i++) {

      numberOptions[i]= Math.floor(Math.random() * 20 )+1 ;
  
  }   
  
  // Next we create a for loop to create crystals for every numberOption.
  // Read more for...of loop https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  
  targetNumber = Math.floor(Math.random() * 80) +30;
  
  $("#number-to-guess").text(targetNumber);
  
}

    function reset() {

      document.getElementById('wins').value = '';
      document.getElementById('loses').value = '';
      document.getElementById('number-add').innerHTML  = '';
      
      counter = 0;
      
     initiate();

}


    