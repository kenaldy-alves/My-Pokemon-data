import { Row } from 'carbon-components-react';
import { Div, TextH5, H5 } from './pokemon-data-styles'

const Pokemon = ({ data }) => {
    return <Div>
        <Row>
            <h4>Informações</h4>
        </Row>

        <Row>
            <h5>Nome:</h5>
            <TextH5>{data.name}</TextH5>
        </Row>
        <Row>
            <h5>Peso:</h5>
            <TextH5>{data.weight}</TextH5>
        </Row>
        <Row>
            <h5>Tipo:</h5>
            {
                data.types.map((row, id) => <H5 key={id} defaultValue={row.type.name}>{row.type.name}</H5>)
            }
        </Row>
        <Row>
            <h5>Habilidades: </h5>
            {
                data.abilities.map((row, id) => <TextH5  key={id}>{row.ability.name},</TextH5>)
            }
        </Row>
    </Div>
}

export default Pokemon;