import { useEffect, useState } from 'react'
import { Column, Grid, Row } from 'carbon-components-react';

import TablePokemonCaptures from './components/UI/table-pokemon-captured/PokemonCaptured';
import GraphCapturesByRegion from './components/UI/GraphCapturesByRegion/GraphCapturesByRegion'
import GraphCapturesByType from './components/UI/GraphCapturesByType/GraphCapturesByType'
import BattleTeam from './components/UI/battle-team/BattleTeam';

import { getCaptures } from './components/services/getCaptures'
import { getBattleTeam } from './components/services/getBattleTeam';
import { getReports } from './components/services/getReports';

import logo from './assets/logo_pokedex.png'

import './carbon-styles.scss'
import { Main, AppHeader } from './app-styles';

const App = () => {

  const [captures, setCaptures] = useState(null);
  const [battleTeam, setBattleTeam] = useState(null);
  const [reports, setReports] = useState(null);

  useEffect(() => {
    const loadCapture = async () => {
      const capturesResponse = await getCaptures();
      const battleTeamResponse = await getBattleTeam();
      const reportsResponse = await getReports();

      setCaptures(capturesResponse)
      setBattleTeam(battleTeamResponse)
      setReports(reportsResponse)
    }

    loadCapture()
  }, [])

  return (
    <Main>
      <AppHeader>
        <img src={logo} alt={'imagem-pokemon-title'}></img>
      </AppHeader>
      <Grid>
        <Row>
          <Column xlg={3}>
            {reports !== null && <GraphCapturesByRegion reports={reports.capturesByRegion}></GraphCapturesByRegion>}
            {battleTeam !== null && <BattleTeam battleTeam={battleTeam}></BattleTeam>}
          </Column>
          <Column xlg={9}>
            {reports !== null && <GraphCapturesByType reports={reports.capturesByType}></GraphCapturesByType>}
            {captures !== null && <TablePokemonCaptures captures={captures}></TablePokemonCaptures>}
          </Column>
        </Row>
      </Grid>
    </Main>
  );
}

export default App;