// Your tests here
import {isPalindrome} from "../utils"

describe("isPalindrome", ()=>{
    test("takes in an word and checks if it is a palindrome",()=>{
        const word = "racecar";
        const result = isPalindrome(word)
        expect(result).toBe(true)
    })
    test("takes in a mixed case word and checks if it is a palindrome",()=>{
        const word = "RaCEcar";
        const result = isPalindrome(word)
        expect(result).toBe(true)
    })
    test("returns false when input is empty",()=>{
        const word = " ";
        const result = isPalindrome(word)
        expect(result).toBe(false)
    })
    // test("throws errors when input had non-alphbetic characters",()=>{
    //     const word = "2132";
    //     const result = /^[A-Za-z]+$/.test(word)
    //     expect(result).toThrow("Not a string")
    // })
})