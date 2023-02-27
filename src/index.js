module.exports = function check(str, bracketsConfig) {
    let array = [];
    let openingBrackets = [];
    let closingBrackets = [];
    let bracketsArray = [...bracketsConfig];

    if (str.length % 2 != 0) {
        return false;
    }


    bracketsArray.forEach(element=>{
      openingBrackets.push(Array.from(element[0]).toString());
      closingBrackets.push(Array.from(element[1]).toString());
    })


    function findPair(str) {
        for (let i = 0; i < str.length; i++) {
            let bracket = str[i];
            if (openingBrackets.includes(bracket) && closingBrackets.includes(bracket) && array.includes(bracket)) {
                let openBracketIndex = openingBrackets.indexOf(array.pop());
                let closeBracket = closingBrackets[openBracketIndex];
                if (closeBracket != bracket) {
                    return false;
                }
            } else if (openingBrackets.includes(bracket)) {
                array.push(bracket);
            } else if (closingBrackets.includes(bracket)) {
                let openBracketIndex = openingBrackets.indexOf(array.pop());
                let closeBracket = closingBrackets[openBracketIndex];
                if (closeBracket != bracket) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    };

    return findPair(str);
}
