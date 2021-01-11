import { getCaptures, getCapturesFilterByRegion } from '../../components/services/getCaptures'

// beforeEach(() => {
//     fetch.resetMocks();
// })

describe('getCaptures.js', () => {
    it('fetches data from server when server returns a successful response [getCaptures]', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

        getCaptures()

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/captures", { "headers": { "Content-Type": "application/json" }, "method": "GET" })
        global.fetch.mockClear(); // 7
    })

    it('fetches data from server when server returns a successful response [getCapturesFilterByRegion with region and type null]', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

        let byRegion, byType, radioButton;
        byRegion = null
        byType = null
        radioButton = 'radio-button1'

        getCapturesFilterByRegion(byRegion, byType, radioButton)

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith(`http://localhost:3000/captures?&_sort=pokemonId&_order=asc`, { "headers": { "Content-Type": "application/json" }, "method": "GET" })
        global.fetch.mockClear(); // 7
    })

    it('fetches data from server when server returns a successful response [getCapturesFilterByRegion with region null and type different null]', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

        let byRegion, byType, radioButton;
        byRegion = null
        byType = 'dragon'
        radioButton = 'radio-button1'

        getCapturesFilterByRegion(byRegion, byType, radioButton)

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith(`http://localhost:3000/captures?type=dragon&_sort=pokemonId&_order=asc`, { "headers": { "Content-Type": "application/json" }, "method": "GET" })
        global.fetch.mockClear(); // 7
    })

    it('fetches data from server when server returns a successful response [getCapturesFilterByRegion with region different null and type different null]', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

        let byRegion, byType, radioButton;
        byRegion = 'sinnoh'
        byType = 'dragon'
        radioButton = 'radio-button1'

        getCapturesFilterByRegion(byRegion, byType, radioButton)

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith(`http://localhost:3000/captures?region=sinnoh&type=dragon&_sort=pokemonId&_order=asc`, { "headers": { "Content-Type": "application/json" }, "method": "GET" })
        global.fetch.mockClear(); // 7
    })
})
