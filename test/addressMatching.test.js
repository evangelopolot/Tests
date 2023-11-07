const sum = require('../service/addressMatching')

function wrongDetails() {
    throw new Error("You have entered the wrong details.")
}

describe("Example tests", ()=>{
    it('properly adds two numbers', () => {
        const result = sum(1,2);
        expect(result).toBe(3)
    })
})

describe("Exceptions", () =>{
    it("exception", () => {
        expect(() => wrongDetails()).toThrow(Error)
    })
})

