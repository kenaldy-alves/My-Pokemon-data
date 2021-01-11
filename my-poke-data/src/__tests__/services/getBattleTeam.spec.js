import { getBattleTeam } from '../../components/services/getBattleTeam'

describe('getBattleTeam.js', () => {
    it('fetches data from server when server returns a successful response [getBattleTeam]', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

        getBattleTeam()

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/battle_team", { "headers": { "Content-Type": "application/json" }, "method": "GET" })
        global.fetch.mockClear(); // 7
    })

})
