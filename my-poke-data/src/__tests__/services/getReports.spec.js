import { getReports } from '../../components/services/getReports'

describe('getReports.js', () => {
    it('fetches data from server when server returns a successful response [getReports]', () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

        getReports()

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/reports", { "headers": { "Content-Type": "application/json" }, "method": "GET" })
        global.fetch.mockClear(); // 7
    })

})
