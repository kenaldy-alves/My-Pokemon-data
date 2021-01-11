import {
    Skeleton,
    SkeletonPlace,
    GraphByRegionDiv,
    GraphByRegionBody,
    GraphByRegionSkeletonPlaceDiv,
    GraphByRegionSkeletonDiv
} from "./graph-captures-by-region-skeleton-styles";


const GraphCapturesByRegionSkeleton = () => {

    return <GraphByRegionDiv>
        <GraphByRegionBody>
            <GraphByRegionSkeletonPlaceDiv>
                <SkeletonPlace></SkeletonPlace>
            </GraphByRegionSkeletonPlaceDiv>
            <GraphByRegionSkeletonDiv>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
            </GraphByRegionSkeletonDiv>
        </GraphByRegionBody>
    </GraphByRegionDiv>
}

export default GraphCapturesByRegionSkeleton;