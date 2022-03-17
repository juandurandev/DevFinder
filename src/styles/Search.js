import styled from 'styled-components';
import {device} from './BreakPointsAndDevice';


export const SearchContainer = styled.div`
display:flex;
position:relative;
width:auto;
height:55px;
margin:10px 0;
box-sizing:border-box;
align-items:center;


@media ${device.desktopL}{
  width:1300px;
  height:95px;
}



@media ${device.desktop}{
  width:1100px;
  height:85px;
}

@media ${device.laptopL}{
  width:800px;
  height:60px;
}

@media ${device.laptop}{
  width:700px;
    height:55px;
}

@media ${device.tablet}{
  width:500px;
}

@media ${device.tabletM}{
  width:400px;
}



@media ${device.mobileL}{
  height:55px;
  width:100%;
}



`


export const SearchVar = styled.input`
width:100%;
height:100%;
border-radius:10px;
border:none;
background-color:${props => props.dark ? "white" : "#1F2A48"};
color:${props => props.dark ? "black" : "White"};
outline:none;
box-sizing:border-box;
padding-left:35px;
box-shadow:0px 5px 8px 0px rgba(0,0,0,.2);
transition:.5s;

::placeholder,
  ::-webkit-input-placeholder {
    color: #8D959F;
  
  }


  @media ${device.desktopL}{
    width:100%;
    font-size:25px;
    padding-left:95px;
  }

  @media ${device.desktop}{
    width:100%;
    font-size:25px;
    padding-left:85px;
  }

  @media ${device.laptopL}{
    width:100%;
    font-size:25px;
    padding-left:45px;
  }

  @media ${device.laptop}{
    width:100%;
    font-size:15px;
    padding-left:35px;
}



@media ${device.mobileL}{
  width:100%;
}




`

export const SearchButton = styled.button`
position:absolute;
width:25%;
height:75%;
background:#0079FE;
color:white;
border-radius:10px;
border:none;
cursor:pointer;
right:5px;
font-size:15px;


@media ${device.desktopL}{
  width:15%;
  font-size:25px;
}

@media ${device.desktop}{
  width:15%;
  font-size:25px;
}


@media ${device.laptopL}{
  width:20%;
  font-size:20px;
}


@media ${device.laptop}{
    width:18%;
    font-size:15px;
}


@media ${device.tablet}{
  width:20%;
  font-size:15px;
  
}

@media ${device.tabletM}{
  width:20%;
  
}



@media ${device.mobileL}{
  width:25%;
}
`


export const SearchIcon = styled.div`
 position: absolute;
 width:20px;
 height:20px;
 color:#0079FE;
 left:10px;

 
 @media ${device.desktopL}{
  width:35px;
 height:35px;
 left:25px;
 font-size:35px;
}


 @media ${device.desktop}{
  width:35px;
 height:35px;
 left:25px;
 font-size:30px;
}


@media ${device.laptopL}{
  width:25px;
 height:25px;
 left:15px;
 font-size:20px;
}


@media ${device.laptop}{
  width:20px;
 height:20px;
 left:10px;
 font-size:15px;
}



`