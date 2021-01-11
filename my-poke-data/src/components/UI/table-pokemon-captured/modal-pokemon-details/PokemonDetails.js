import { Column, Grid, Row, SkeletonText } from 'carbon-components-react';
import { useEffect, useState } from 'react'
import { getPokemonDetails } from '../../../services/getPokemonDetails';
import { SkeletonPlaceCircle, SkeletonPlaceText } from './pokemon-styles'
import PokemonData from './pokemon-data/PokemonData';
import PokemonImage from './pokemon-image/PokemonImage';

const PokemonDetails = ({ pokemonId }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    //CHAM A FUNÇÃO QUE BUSCA OS DADOS DO POKEMON E ATUALIZA O ESTADO TODA VEZ QUE O ID DO POKEMON MUDAR
    useEffect(() => {
        const getDetails = async () => {
            const responsePokemonDetails = await getPokemonDetails(pokemonId);
            setPokemonDetails(responsePokemonDetails)
        }

        getDetails()
    }, [pokemonId])


    return <Grid>
        {
            pokemonDetails !== null ?
                <Row>
                    <Column>
                        <PokemonImage sprites={pokemonDetails.sprites}></PokemonImage>
                        <PokemonData data={pokemonDetails}></PokemonData>
                    </Column>
                </Row> :
                <Column>
                    <SkeletonPlaceText></SkeletonPlaceText>
                    <SkeletonPlaceCircle></SkeletonPlaceCircle>
                    <SkeletonPlaceText></SkeletonPlaceText>
                    <SkeletonText></SkeletonText>
                    <SkeletonText></SkeletonText>
                    <SkeletonText></SkeletonText>
                    <SkeletonText></SkeletonText>
                </Column>
        }
    </Grid>

}

export default PokemonDetails;