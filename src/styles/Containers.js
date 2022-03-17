import styled from 'styled-components';
import {device} from './BreakPointsAndDevice';


export const ContainerPage = styled.div`
background-size:cover;
width:100vw;
box-sizing:border-box;
padding:10px;
transition:.5s;
height:100%;

justify-content:center;
align-items:center;

height:100%;

`


export const ContainerContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px;
box-sizing:border-box;


${'' /* @media ${device.laptop}{
    margin:50px;
}

@media ${device.tablet}{
    margin:50px;

} */}

@media ${device.mobileL}{
    margin:10px;
}



`