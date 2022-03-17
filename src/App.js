import {useState} from 'react'
import {Header} from './components/Header';
import {Container} from './components/Container';
import {Search} from './components/Search';
import {Content} from './components/Content';
import  ThemeContext from './context/ThemeContext';
import InfoContext from './context/InfoContext';

import GlobalStyle from './styles/GlobalStyle';


function App() {
  const [theme,setTheme] = useState(false);
  const [info,setInfo] = useState("");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="App">
        <Container>
          <Header />
          <InfoContext.Provider value={{info,setInfo}}>
          <Search />
          <Content />
          </InfoContext.Provider>
        </Container>   
        <GlobalStyle dark={theme} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
