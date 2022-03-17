import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import {HeaderTittle,HeaderContainer,DarkModeContainer} from '../styles/Header';



export const Header = () => {

    const {theme,setTheme} = useContext(ThemeContext);
    const handleClick = () => {
        setTheme(!theme);
    }

    return(
        <>
        <HeaderContainer>
            <HeaderTittle dark={theme}>DevFinder</HeaderTittle>
            <DarkModeContainer dark={theme} onClick={handleClick} >{theme ? "N I G H T 🌙"  : "L I G H T ☀️"}</DarkModeContainer>
        </HeaderContainer>
        </>
    )
}