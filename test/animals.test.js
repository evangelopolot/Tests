let animals = ['tiger', 'bear', 'cat']



describe("Test Animal array", () => {
    beforeEach(() => {
        animals = ['tiger', 'bear', 'cat']
    })

    it("should return true if last element in array is dog", ()=>{
        animals.push("dog")
        expect(animals[animals.length-1]).toBe("dog")
    }) 
})