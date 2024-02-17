const fullWord = "hello world"

var splitWord = fullWord.split(" ")

var result = [];

for (let i = 0; i < splitWord.length; i++  ) {
    var word = splitWord[i]
    var resWord = '';

    for (let j = 0; j < word.length; j++) {
        if(j === 0) resWord += word[j].toUpperCase()
        else resWord += word[j]
    }
    result.push(resWord)
}


console.log(result.join(" "));