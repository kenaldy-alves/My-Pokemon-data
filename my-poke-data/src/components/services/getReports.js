
export const getReports = async () => {

    try {
        const response = await fetch('http://localhost:3000/reports', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })

        const json = await response.json()

        return json
    } catch (error) {
        console.log(error)
        return null
    }
}