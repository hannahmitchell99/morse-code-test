import {englishToMorse} from "../morseTranslator.js"

describe('englishToMorse', () => { 

    it("should return '.-' when given a string of a ", ()=>{
        const translatedString = englishToMorse('a')
        expect (translatedString).toBe('.-')
    })
    it("should return '----.' when given a number of 9 ", ()=>{
        const translatedString = englishToMorse(9)
        expect (translatedString).toBe('----.')
    })
    it("should return '/' when given a space ", ()=>{
        const translatedString = englishToMorse(' ')
        expect (translatedString).toBe('/')
    })
    it("should return '.---' when given a string of capital J", ()=>{
        const translatedString = englishToMorse('J')
        expect (translatedString).toBe('.---')
    })
    it("should return '..../../-.-.--' when given a string of 'h i !'", ()=>{
        const translatedString = englishToMorse('h i !')
        expect (translatedString).toBe('..../../-.-.--')
    })
    it("should return '.-....-..-..---.--.-.' when given a string of 'r$2@'", ()=>{
        const translatedString = englishToMorse('r$2@')
        expect (translatedString).toBe('.-....-..-..---.--.-.')
    })
    it("should return '-..-.' when given a string of '/' ", ()=>{
        const translatedString = englishToMorse('/')
        expect (translatedString).toBe('-..-.')
    })
    it("should return '.-..-.' when given a string of double quotation marks ", ()=>{
        const translatedString = englishToMorse('"')
        expect (translatedString).toBe('.-..-.')
    })
    it("should return a string", ()=>{
        const translatedString = englishToMorse('J')
        expect (typeof(translatedString)).toBe('string')
    })
    it("should not modify the original string", ()=>{
        const stringTest = "Hello";
        const mockString = [...stringTest]
        const resultString = englishToMorse(stringText)
        expect (stringTest).toEqual(mockString)
    })
    

})

xdescribe('morseToEnglish', () => { 

    it("should return 'a' when given a string of '.-' ", ()=>{
        const translatedString = morseToEnglish('.-')
        expect (translatedString).toBe('a')
    })
    it("should return 9 when given a string of '----.'", ()=>{
        const translatedString = morseToEnglish('----.')
        expect (translatedString).toBe('9')
    })
    it("should return ' ' when given a string of '/' ", ()=>{
        const translatedString = morseToEnglish('')
        expect (translatedString).toBe("/")
    })
    it("should return 'h i !' when given a string of '..../../-.-.--' ", ()=>{
        const translatedString = morseToEnglish('..../../-.-.--')
        expect (translatedString).toBe('h i !')
    })
    it("should return 'r$2@' when given a string of '.-....-..-..---.--.-.' ", ()=>{
        const translatedString = morseToEnglish('.-....-..-..---.--.-.')
        expect (translatedString).toBe('r$2@')
    })
    it("should return a string", ()=>{
        const translatedString = morseToEnglish('.-....-..')
        expect (typeof(translatedString)).toBe('string')
    })
    it("should not modify the original string", ()=>{
        const stringTest = ".-....-..";
        const mockString = [...stringTest]
        const resultString = morseToEnglish(stringText)
        expect (stringTest).toEqual(mockString)
    })
    it("should return '/' when given a string of -..-.", ()=>{
        const translatedString = morseToEnglish('-..-.')
        expect (translatedString).toBe('/')
    })
    it("should return double quotation marks when given a string of '.-..-.' ", ()=>{
        const translatedString = morseToEnglish('.-..-.')
        expect (translatedString).toBe('"')
    })


})