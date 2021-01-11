import { getPokemonDetails } from '../../components/services/getPokemonDetails'

describe('getPokemonDetails.js', () => {
    it('fetches data from server when server returns a successful response [getPokemonDetails]', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
        const mockFetchPromise = Promise.resolve({ 
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        getPokemonDetails('444')

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/444", { "headers": { "Content-Type": "application/json" }, "method": "GET" })
        global.fetch.mockClear();
    })

})
