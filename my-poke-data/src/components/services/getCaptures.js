
//BUSCA A LISTA DOS POKÉMONS
export const getCaptures = async () => {

    try {
        const response = await fetch('http://localhost:3000/captures', {
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

//BUSCA A LISTA DOS POKÉMONS CAPTURADOS POR FILTROS
export const getCapturesFilterByRegion = async (byRegion, byType, radioButton) => {
    let url;
    //REALIZA OS TRAMENTOS DOS PARÂMETROS
    const order = radioButton === 'radio-button1' ? 'asc' : 'desc'
    const type = byType === 'Tipo' ? null : byType
    const region = byRegion === 'Regiao' ? null : byRegion
    console.log(region, type, order)

    // VERIFICA QUAIS FILTROS DEVEM SER APLICADOS
    if (region === null && type !== null) {
        console.log('1')
        url = `http://localhost:3000/captures?type=${type}&_sort=pokemonId&_order=${order}`
    }
    else if (region !== null && type === null) {
        url = `http://localhost:3000/captures?region=${region}&_sort=pokemonId&_order=${order}`
        console.log('2')
    }
    else if (region !== null && type !== null) {
        url = `http://localhost:3000/captures?region=${region}&type=${type}&_sort=pokemonId&_order=${order}`

        console.log(`http://localhost:3000/captures?region=${region}&type=${type}&_sort=pokemonId&_order=${order}`)
    }
    else {
        url = `http://localhost:3000/captures?&_sort=pokemonId&_order=${order}`
        console.log('3')
    }

    //REALIZA A CHAMAD DA REQUISIÇÃO
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })

        const json = await response.json()
        console.log(json)

        return json
    } catch (error) {
        console.log(error)
        return null
    }
}
