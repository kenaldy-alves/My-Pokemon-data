export const getBattleTeam = async () => {

    try {
        const response = await fetch('http://localhost:3000/battle_team', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await response.json()
        
        return data

    } catch (error) {
        console.log(error)
        return null
    }
}
