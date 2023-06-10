const form = document.querySelector('form');   //grab the form 
form.addEventListener("submit", isChecked);   //onsubmit

function isChecked(event) { //function to determine true or false
    
    //stop form from refeshing page
    event.preventDefault(); 
    
    //checks if the box is checked in ----- if selected checkmark = true if left blank checkmark =false
    const checkMark = Boolean(event.target.cBox.checked)
    console.log(checkMark); //logs result of boolean

/*
    if(*conditions*){
        *result*
    }
    In the if statement above the result code will only run if the conditions are met
*/
    if (checkMark === true) {
        document.querySelector('h2').innerText = "Thank you for agree to donate your organs. Have a Great day!"
    }
}
