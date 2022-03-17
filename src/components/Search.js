import { useContext,useState } from 'react';
import axios from 'axios';
import ThemeContext from '../context/ThemeContext';
import InfoContext from '../context/InfoContext';
import {SearchVar,SearchContainer,SearchButton,SearchIcon} from '../styles/Search';



import {BsSearch} from 'react-icons/bs'

export const Search = () => {

    const {theme} = useContext(ThemeContext);

    const {setInfo} = useContext(InfoContext);


    const [search,setSearch] = useState('');

   
        function callInfo(){

            axios.get("https://api.github.com/users/" + search)
                .then((response) => setInfo(response.data))
                .catch(function (error) {
                    console.log(error);
               
            
        });

    }
    


    const handleSearch = (event) => {
        setSearch(event.target.value);
    }



    return(
        <>
            <SearchContainer>
            <SearchIcon><BsSearch  /></SearchIcon>
            <SearchVar dark={theme} value={search} onChange={handleSearch} type="text" placeholder='Search github username...' required>
            </SearchVar>
            <SearchButton onClick={() => callInfo()}>
                Search
            </SearchButton>
            </SearchContainer>
        </>
    )
}