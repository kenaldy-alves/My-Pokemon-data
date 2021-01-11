import { useEffect, useState } from "react";
import { Column, Grid, Row } from "carbon-components-react";
import { Header, Div } from '../../globals/globals-styles/globals-styles'
import { getPokemonDetails } from "../../services/getPokemonDetails";
import { TextH5 } from './battle-team-style'
import BattleTeamSkeleton from "./BattleTeamSkeleton";

const BattleTeam = ({ battleTeam }) => {
    const [myBattleTeam, setBattleTeam] = useState(null);

    // LOGO APÓS A RENDERIZAÇÃO DO COMPONENTE REALIZA CHAMA A FUNÇÃO QUE BUSCA OS DETALHES DE TODOS OS POKEMONS DA LISTA BATTLETEAM
    useEffect(() => {

        const getMyTeam = async () => {

            const myTeam = []
            for (const key in battleTeam) {
                if (Object.hasOwnProperty.call(battleTeam, key)) {
                    const { name, sprites } = await getPokemonDetails(battleTeam[key].pokedexNumber)
                    myTeam.push({
                        name: name,
                        photo: sprites.front_default
                    })
                }
            }

            setBattleTeam(myTeam)
        }
        getMyTeam()
    }, [battleTeam])

    return <Div>
        <Header>
            <h4>Time de batalha</h4>
        </Header>
        <Grid>
            <Row>
                {
                    myBattleTeam !== null ?
                        myBattleTeam.map((row, id) => (
                            <Column key={id}>
                                {row.photo !== null ? <img src={row.photo} alt="Front default pokemon"></img> : null}
                                <TextH5>{row.name}</TextH5>
                            </Column>

                        ))
                        :
                        <BattleTeamSkeleton></BattleTeamSkeleton>
                }
            </Row>
        </Grid>
    </Div>
}

export default BattleTeam;