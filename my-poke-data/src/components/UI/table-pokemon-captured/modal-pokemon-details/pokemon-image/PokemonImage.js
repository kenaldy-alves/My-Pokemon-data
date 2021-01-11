import { Row } from 'carbon-components-react'
import { useState } from 'react'
import MyRadioButton from '../../../../globals/globals-components/MyRadioButton'

const PokemonImage = ({ sprites }) => {
    const [radioButton, setRadioButton] = useState('radio-button1')  // ESTADO DO RADIO BUTTON  
    const containFemaleVersion = sprites.front_female === null ? false : true
    const containMaleVersion = sprites.front_default === null ? false : true

    //FUNÇÃO QUE CONTROLA O ESTADO DO RADIO BUTTON
    const handleClick = (value) => value === 'radio-button1' ? setRadioButton('radio-button2') : setRadioButton('radio-button1')

    return <section>
        <Row>
            <h4 style={{ fontWeight: 'lighter' }}>Imagens</h4>
        </Row>
        <Row condensed>
            {
                radioButton === 'radio-button1' ?
                    containMaleVersion &&
                    <Row>
                        {sprites.front_default !== null ? <img src={sprites.front_default} alt="Front default pokemon"></img> : null}
                        {sprites.back_default !== null ? <img src={sprites.back_default} alt="Back default pokemon"></img> : null}
                        {sprites.front_shiny !== null ? <img src={sprites.front_shiny} alt="Front shiny default pokemon"></img> : null}
                        {sprites.back_shiny !== null ? <img src={sprites.back_shiny} alt="Back shiny default pokemon"></img> : null}
                    </Row>
                    :
                    containFemaleVersion &&
                    <Row>
                        {sprites.front_female ? <img src={sprites.front_female} alt="Front female pokemon"></img> : null}
                        {sprites.back_female ? <img src={sprites.back_female} alt="Back female pokemon"></img> : null}
                        {sprites.front_shiny_female ? <img src={sprites.front_shiny_female} alt="Front shiny female pokemon"></img> : null}
                        {sprites.back_shiny_female ? <img src={sprites.back_shiny_female} alt="Back shiny female pokemon"></img> : null}
                    </Row>
            }
        </Row>
        <Row>
            <MyRadioButton
                radioButton={radioButton}
                handleClick={handleClick}
                labelText1="Default"
                labelText2="Fêmea"
                disabledButton1={!containMaleVersion}
                disabledButton2={!containFemaleVersion}
            ></MyRadioButton>
        </Row>
    </section>
}

export default PokemonImage;