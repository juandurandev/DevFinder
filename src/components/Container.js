import {useContext} from 'react';
import {ContainerPage,ContainerContent} from '../styles/Containers';
import ThemeContext from '../context/ThemeContext';


export const Container = ({children}) => {
    const {theme} = useContext(ThemeContext);
    return(
        <>
            <ContainerPage dark={theme}>
            <ContainerContent>
                {children}
            </ContainerContent>
            </ContainerPage>
        </>
    )
}