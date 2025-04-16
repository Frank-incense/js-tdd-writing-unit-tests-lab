// Your code here
export function isPalindrome(word){
    if(!word || word === " "){
        return false
    }
    let end = word.length -1 
    for (let i = 0; i < end; i++){
        word[i] !== word[end] ? false : end--
    }
    return true
}