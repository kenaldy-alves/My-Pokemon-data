import { Chart } from "react-google-charts";
import { Div, Header } from "../../globals/globals-styles/globals-styles";
import { palleteTypeColors } from '../../services/palleteTypeColors'
import GraphCapturesByTypeSkeleton from "./GraphCapturesByTypeSkeleton";

const GraphCapturesByType = ({ reports }) => {

    const data = [
        ['Tipo', '', { role: 'style' },],
        ["dragon", reports.dragon, palleteTypeColors.dragon],
        ["ghost", reports.ghost, palleteTypeColors.ghost],
        ["psychic", reports.psychic, palleteTypeColors.psychic],
        ["grass", reports.grass, palleteTypeColors.grass],
        ["fire", reports.fire, palleteTypeColors.fire],
        ["normal", reports.normal, palleteTypeColors.normal],
        ["bug", reports.bug, palleteTypeColors.bug],
        ["water", reports.water, palleteTypeColors.water],
        ["dark", reports.dark, palleteTypeColors.dark],
        ["ground", reports.ground, palleteTypeColors.ground],
        ["steel", reports.steel, palleteTypeColors.steel],
        ["fairy", reports.fairy, palleteTypeColors.fairy],
        ["fighting", reports.fighting, palleteTypeColors.fighting],
        ["electric", reports.electric, palleteTypeColors.electric],
        ["poison", reports.poison, palleteTypeColors.poison],
        ["ice", reports.ice, palleteTypeColors.ice],
        ["rock", reports.rock, palleteTypeColors.rock]
    ]

    return <Div>
        <Header>
            <h4>Capturados por Tipo</h4>
        </Header>
        <Chart
            width={'100%'}
            height={'15em'}
            chartType="ColumnChart"
            loader={<GraphCapturesByTypeSkeleton></GraphCapturesByTypeSkeleton>}
            data={data}
            options={{
                colors: ['#fff'],
                legend: 'Número de Pokémons capturados por tipo',

            }}
        />
    </Div>
}

export default GraphCapturesByType;