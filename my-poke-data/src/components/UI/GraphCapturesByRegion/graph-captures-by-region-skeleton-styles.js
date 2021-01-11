import styled from 'styled-components'
import { SkeletonPlaceholder, SkeletonText } from "carbon-components-react";

export const GraphByRegionDiv = styled.div`
    margin-left: 5em;
    margin-top: 2em 
`
export const GraphByRegionBody = styled.div`
    display: flex;  
`
export const GraphByRegionSkeletonPlaceDiv = styled.div`
    margin-bottom: 0.5em; 
    margin-right: 2em;
`
export const GraphByRegionSkeletonDiv = styled.div`
    margin-top: -1em;
`
export const Skeleton = styled(SkeletonText)`
    width: 4em; 
`
export const SkeletonPlace = styled(SkeletonPlaceholder)`
    width: 8em;
    height: 8em;
    border-radius: 20em;
`