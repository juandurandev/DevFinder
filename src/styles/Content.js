import styled from 'styled-components';

import {device} from './BreakPointsAndDevice';


export const ContentContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
border-radius:10px;
border:none;
background-color:${props => props.dark ? "white" : "#1F2A48"};;
box-sizing:border-box;
box-shadow:0px 5px 8px 0px rgba(0,0,0,.2);
transition:.5s;

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

@media ${device.tablet}{
    width:500px;
}

@media ${device.tabletM}{
    width:400px;
}


@media ${device.mobileL}{
    width:300px;
}



`

export const ProfileContainer = styled.div`
display:flex;
box-sizing:border-box;
align-items:center;
`


export const ProfileImage = styled.img`
border-radius:50%;
width:60px;
height:60px;
margin:15px;



@media ${device.desktopL}{
    width:300px;
    height:300px;
    margin:40px;

}



@media ${device.desktop}{
    width:250px;
    height:250px;
    margin:40px;

}


@media ${device.laptopL}{
    width:140px;
    height:140px;
    margin:20px;

}


@media ${device.laptop}{
    width:140px;
    height:140px;
    margin:20px;

}

@media ${device.tablet}{
    width:120px;
    height:120px;
    margin:20px;
}

@media ${device.tabletM}{
    width:90px;
    height:90px;
    margin:20px;
}


@media ${device.mobileL}{
width:60px;
height:60px;
margin:15px;
}

`


export const ProfileTextContainer = styled.div`

`


export const ProfileName = styled.div`
font-size:16px;
font-weight:800;
font-family:'heebo';
color:${props => props.dark ? "#141C2F" : "#F5F8FF"};
transition:.5s;



@media ${device.desktopL}{
    font-size:70px;

}


@media ${device.desktop}{
    font-size:50px;

}


@media ${device.laptopL}{
    font-size:30px;

}


@media ${device.laptop}{
    font-size:30px;
}



@media ${device.tablet}{
    font-size:20px;
}


@media ${device.tabletM}{
    font-size:20px;
}


@media ${device.mobileL}{
    font-size:16px;
}
`

export const ProfileUser = styled.a`
color:#0079FE;
font-size:12px;
font-weight:500;
font-family:'heebo';
text-decoration:none;
display:block;

@media ${device.desktopL}{
    font-size:40px;
}


@media ${device.desktop}{
    font-size:35px;
}


@media ${device.laptopL}{
    font-size:20px;
}


@media ${device.laptop}{
    font-size:20px;
}


@media ${device.tablet}{
   font-size:18px;
}


@media ${device.tabletM}{
   font-size:15px;
}


@media ${device.mobileL}{
    font-size:12px;
}


`

export const JoinedDate = styled.div`
font-size:14px;
font-weight:500;
font-family:'heebo';
color:${props => props.dark ? "#CBCDD3" : "#8D959F"} ;


@media ${device.desktopL}{
    font-size:35px;
}

@media ${device.desktop}{
    font-size:30px;
}

@media ${device.laptopL}{
    font-size:25px;
}


@media ${device.laptop}{
    font-size:20px;
}

@media ${device.tablet}{
    font-size:18px;
}

@media ${device.tabletM}{
   font-size:15px;
}


@media ${device.mobileL}{
    font-size:14px;
}




`


export const ProfileDescription = styled.div`
font-size:12px;
font-weight:500;
font-family:'heebo';
color:${props => props.dark ? "#141C2F" : "#F5F8FF"};
margin:15px;
transition:.5s;


@media ${device.desktopL}{
    width:auto;
    margin:0px 30px 15px 8.5em;
    font-size:45px;
}


@media ${device.desktop}{
    width:auto;
    margin:0px 30px 15px 9.5em;
    font-size:35px;
}

@media ${device.laptopL}{
    width:auto;
    margin:0px 30px 15px 180px;
    font-size:15px;
}


@media ${device.laptop}{
    width:auto;
    margin:0px 30px 15px 180px;
    font-size:15px;
}


@media ${device.tablet}{
    margin:0px 30px 10px 30px;
    width:auto;
}


@media ${device.tabletM}{
    margin:5px 30px;
    
}


@media ${device.mobileL}{
    margin:15px;
    font-size:12px;
}
`





export const NumbersContainer = styled.div`
display:flex;
background-color:${props => props.dark ? "#E4ECFF" :  "#141C2F"};
border-radius:10px;
justify-content:space-around;
padding:10px;
margin:0px 15px 15px 15px; 
transition:.5s;

@media ${device.desktopL}{
    width:auto;
     margin:0px 30px 15px 23em; 
  
    
}


@media ${device.desktop}{
    width:auto;
     margin:0px 30px 15px 20.5em; 
  
    
}



@media ${device.laptopL}{
    width:auto;
    margin:0px 30px 15px 180px; 
  
    
}



@media ${device.laptop}{
    width:auto;
    margin:0px 30px 15px 180px; 
  
    
}



@media ${device.tablet}{
    margin:0px 30px 0px 30px;
   
}

@media ${device.tabletM}{
    
   
}


@media ${device.mobileL}{
    margin:15px;
}



`

export const NumbersSpecificContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;



`

export const NumbersTitle = styled.div`
font-size:12px;
font-weight:500;
font-family:'heebo';
color:${props => props.dark ? "#141C2F" : "#F5F8FF"};
transition:.5s;


@media ${device.desktopL}{
    font-size:40px;
}

@media ${device.desktop}{
    font-size:30px;
}



@media ${device.laptopL}{
    font-size:18px;
}


@media ${device.laptop}{
    font-size:15px;
}



`

export const ContentNumbers = styled.div`
font-size:18px;
font-weight:800;
font-family:'heebo';
color:${props => props.dark ? "#141C2F" : "#F5F8FF"};
justify-content:center;
transition:.5s;


@media ${device.desktopL}{
    font-size:55px;
}

@media ${device.desktop}{
    font-size:40px;
}



@media ${device.laptopL}{
    font-size:25px;
}


@media ${device.laptop}{
    font-size:18px;
}

`



export const InfoContainer = styled.div`
width:auto;
margin:15px 15px 20px 15px;

@media ${device.desktopL}{
    width:auto;
    display:flex;
    justify-content:space-between; 
  margin:0px 30px 15px 23em;
}


@media ${device.desktop}{
    width:auto;
    display:flex;
    justify-content:space-between; 
  margin:0px 30px 15px 20em;
}


@media ${device.laptopL}{
    width:auto;
    display:flex;
    justify-content:space-between; 
  margin:15px 30px 20px 180px;
  
    
}




@media ${device.laptop}{
    width:auto;
    display:flex;
    justify-content:space-between; 
  margin:15px 30px 20px 180px;
}

@media ${device.tablet}{
    width:auto;
    display:flex;
    justify-content:space-between;  
    margin:15px 30px 20px 30px;
}


@media ${device.mobileL}{
display:flex;
justify-content:center;
flex-direction:column;

margin:15px 15px 20px 15px;
} 


`

export const InfoLinksContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;




`

export const InfoLinks = styled.div`
display:flex;
align-items:center;
font-size:15px;
font-weight:400;
font-family:'heebo';
color:${props => props.dark ? "#141C2F" : "#F5F8FF"};
transition:.5s;


@media ${device.desktopL}{
    margin: 10px;
    font-size:45px;
}

@media ${device.desktop}{
    margin: 10px;
    font-size:35px;
}


@media ${device.laptopL}{
    margin: 10px;
    font-size:20px;
}


@media ${device.laptop}{
    margin: 10px;
    font-size:15px;
}

@media ${device.tablet}{
    margin: 10px;
}

@media ${device.mobileL}{
    margin:0;
}

`

export const Icon = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-right:8px;

`