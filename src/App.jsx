import styled from 'styled-components'
import Header from './components/Header'
import Pensamento from './components/Pensamento'

const AppContainer =  styled.div`
  min-height: 100vh; /* permite crescer conforme o conteúdo */
  background: #d9d9d9;
  color: #000;
 


`


function App() {
  

  return (
    <AppContainer>
      <Header/>
      <Pensamento/>
    </AppContainer>

  )
}

export default App
