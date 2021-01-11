
export const getPokemonDetails = async (pokemonId) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
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