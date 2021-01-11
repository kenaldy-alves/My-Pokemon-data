import { Column, Row, SkeletonPlaceholder } from "carbon-components-react";

const BattleTeamSkeleton = () => {
    let myBattleTeam = ['', '', '', '', '', '']
    return <div style={{ padding: '1em' }}>
        <Row>
            {myBattleTeam.map((row, id) => (
                <Column style={{ marginBottom: '0.5em' }} key={id}>
                    <SkeletonPlaceholder></SkeletonPlaceholder>
                </Column>

            ))}
        </Row>
    </div>
}

export default BattleTeamSkeleton;