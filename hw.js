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