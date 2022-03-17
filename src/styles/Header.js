import styled from 'styled-components';
import {device} from './BreakPointsAndDevice';



export const HeaderContainer = styled.div`

width:100%;
display:flex;
align-items:center;
justify-content:space-between;


@media ${device.desktopL}{
    width:1300px;
}


@media ${device.desktop}{
    width:1100px;
}

@media ${device.laptopL}{
    width:800px;
}


@media ${device.laptop}{
    width:700px;
}


@media ${device.tablet} {
    width:500px;
}

@media ${device.tabletM}{
    width:400px;
}


@media ${device.mobileL}{
    width:300px;
}



`


export const HeaderTittle = styled.div`

font-size:25px;
font-family:'heebo';
color: ${props => props.dark ? "#1F2A48" : "#CBCDD3"};
font-weight:800;


@media ${device.desktopL}{
    font-size:60px;
}


@media ${device.desktop}{
    font-size:45px;
}

@media ${device.laptopL}{
    font-size:35px;
}

@media ${device.laptop}{
    font-size:35px;
}


@media ${device.tablet} {
    font-size:35px;
}

@media ${device.tablet}{
  font-size:30px;
  
}


@media ${device.mobileL}{
    font-size:25px;
}


`


export const DarkModeContainer = styled.div`

font-size:12px;
font-family:'heebo';
color:${props => props.dark ? "#1F2A48" : "#CBCDD3"};
cursor:pointer;
font-weight:800;


@media ${device.desktopL}{
    font-size:35px;
}

@media ${device.desktop}{
    font-size:25px;
}

@media ${device.laptopL}{
    font-size:16px;
}

@media ${device.laptop}{
    font-size:16px;
}



@media ${device.tablet} {
    font-size:16px;
}

@media ${device.tabletM}{
  font-size:16px;
}


@media ${device.mobileL}{
    font-size:12px;
}



`