const forEach = (items, callback) => {
    for(let i = 0; i < items.length; i++){
        callback(items[i])
    }
}

describe("Test mock", () => {
    it("mock test", () =>{
        const nums = [0,1]
        const mockCallBack = jest.fn(num =>  num + 1)

        forEach(nums, mockCallBack);

        expect(mockCallBack.mock.calls.length).toBe(2)
        console.log(mockCallBack.mock.results[0].value)
        expect(mockCallBack.mock.results[0].value).toBe(1)
    })
})

it("create a mock v2", () => {
    const mock  = jest.fn()
    mock.mockReturnValueOnce(true)
    
    const result = mock();

    expect(result).toBe(true)
})