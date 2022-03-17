import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import InfoContext from '../context/InfoContext';
import {
  ContentContainer,
  ProfileContainer,
  ProfileImage,
  ProfileTextContainer,
  ProfileName,
  ProfileUser,
  JoinedDate,
  ProfileDescription,
  NumbersContainer,
  NumbersSpecificContainer,
  NumbersTitle,
  ContentNumbers,
  InfoContainer,
  InfoLinksContainer,
  InfoLinks,
  Icon,
 
} from "../styles/Content";
import ackbarImage from "../ackbar.jpg";

import { GoLocation } from "react-icons/go";
import {BsLink45Deg,BsBuilding} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

export const Content = () => {

  const {theme} = useContext(ThemeContext);

  const {info} = useContext(InfoContext);

  return (
    <>
      <ContentContainer dark={theme}>
        <ProfileContainer>
          <ProfileImage src={info ? info.avatar_url : ackbarImage} />

          <ProfileTextContainer>
            <ProfileName dark={theme}>{info.login ? info.login : "Admiral Ackbar"}</ProfileName>
            <ProfileUser href={info ? info.html_url : "Not available"} >@{info.login ? info.login : "Admiral Ackbar"}</ProfileUser>
            <JoinedDate>Joined: {info ? info.created_at.replaceAll("-"," ").split("",10) : "Not available"}</JoinedDate>
          </ProfileTextContainer>
        </ProfileContainer>
       
        <ProfileDescription dark={theme}>
          {info.bio ? info.bio : "Not bio available"}
        </ProfileDescription>
     
        <NumbersContainer dark={theme}>
          <NumbersSpecificContainer>
            <NumbersTitle dark={theme}>Repos</NumbersTitle>
            <ContentNumbers dark={theme}>{info ? info.public_repos : "0"}</ContentNumbers>
          </NumbersSpecificContainer>
          <NumbersSpecificContainer>
            <NumbersTitle dark={theme}>Followers</NumbersTitle>
            <ContentNumbers dark={theme}>{info ? info.followers : "0" }</ContentNumbers>
          </NumbersSpecificContainer>
          <NumbersSpecificContainer>
            <NumbersTitle dark={theme}>Followings</NumbersTitle>
            <ContentNumbers dark={theme}>{info ? info.following : "0" }</ContentNumbers>
          </NumbersSpecificContainer>
        </NumbersContainer>
  
        <InfoContainer>
            <InfoLinksContainer>
                <InfoLinks dark={theme}> <Icon> <GoLocation  /></Icon>{info.location ? info.location : "Not available"}</InfoLinks>
                <InfoLinks dark={theme}> <Icon> <BsLink45Deg  /> </Icon> {info.blog ? info.blog : "Not available"} </InfoLinks>
            </InfoLinksContainer>
            <InfoLinksContainer>
                <InfoLinks dark={theme}> <Icon> <FiTwitter  /> </Icon> {info.twitter_username ? info.twitter_username : "Not available"}</InfoLinks>
                <InfoLinks dark={theme}> <Icon> <BsBuilding  /> </Icon> {info.company ? info.company : "Not available"}</InfoLinks>
            </InfoLinksContainer>
        </InfoContainer>
        
      </ContentContainer>
    </>
  );
};
