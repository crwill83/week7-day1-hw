//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
//Your code goes here
//Call method here with parameters

let dog_names = ["Max","HAS","PuRple","dog"]
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"


function dog_Names(names, string) {
    for(let i = 0; i < names.length; i++){
        if (string.includes(names[i])) {
            console.log('Matched dog_name')
        } else {
            console.log('No matches')
        }
        
    }
}

dog_Names(dog_names, dog_string)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

const arr_names = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    
}


