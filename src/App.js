import{ThemeProvider} from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
import Card from './components/Card'
import data from './data'

import {useState} from 'react'


const theme = {
  colors: {
    header: "#f55A5A",
    body: '#fff',
  },
  buttons: {
    background: "f55A5A",
    color: '#fff'
  }, 
  mobile: '768px'
}

function App() {

  const[cardInfo, setCardInfo] = useState(data)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <>
      <Header />
      <Container>
        {cardInfo.map( item => 
          <Card key={item.id} {...item} />
          )}
      </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
