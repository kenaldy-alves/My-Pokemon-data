import { Chart } from "react-google-charts";
import { Div, Header } from "../../globals/globals-styles/globals-styles";
import GraphCapturesByRegionSkeleton from './GraphCapturesByRegionSkeleton'

const GraphCapturesByRegion = ({ reports }) => {
    const data = [
        ['Task', 'Pokemons by region'],
        ['Sinnoh', reports.sinnoh],
        ['Hoenn', reports.hoenn],
        ['Unova', reports.unova],
        ['Kalos', reports.kalos],
        ['Kanto', reports.kanto],
    ]

    return <Div>
        <Header >
            <h4>Capturados por Região</h4>
        </Header>
        <Chart
            width={'20em'}
            height={'15em'}
            chartType="PieChart"
            loader={<GraphCapturesByRegionSkeleton></GraphCapturesByRegionSkeleton>}
            data={data}
            options={{
                is3D: true,
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    </Div>
}

export default GraphCapturesByRegion;