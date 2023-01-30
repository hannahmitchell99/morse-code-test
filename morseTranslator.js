// have an object with keys being letters and values being morse code.

// take the input in a string, and iterate over each value in the string

// match the character in the input to a key value pair in the object.
// a database file will be a good idea. could use default export for this or named export

// need a function that accepts a string, but will return a string of the opposite language. 

// going to need two input boxes in our application. when one is typed into, the other will also change to the correct transaltion and vice versa. we will be changing the value instead of the inner text / inner HTML. (extension)

// would expect tests to look something like expect("a").toBe(".-")


// const englishInput = document.querySelector(".english")
// const translateResult = document.querySelector(".result")

const englishToMorse = (stringInput) => {
    const englishItemsArray = stringInput.toLowerCase().split("");
    const morseItemsArray = englishItemsArray.map((englishItem)=>{
        if (englishItem == morse[item]){
            return morse[item]
        }
    })
    return morseItemsArray.join('');
}