import{ThemeProvider} from 'styled-components'
import Header from './components/Header'

const theme = {
  colors: {
    header: "f55A5A",
    body: '#fff',
  },
  buttons: {
    background: "f55A5A",
    color: '#fff'
  }, 
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Header />
    </>
    </ThemeProvider>
  );
}

export default App;
