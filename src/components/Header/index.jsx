import styled from "styled-components";
import logo from "../../assets/imagens/logo.png"
import computador from "../../assets/imagens/computador-cabecalho.png"

const HeaderContainer = styled.header`
  background: #041832;
  padding: 112px 240px 112px 360px;
  display: flex;
  justify-content: space-between;

`
const HeaderConteudo = styled.div`
    display: flex;
    flex-direction: column;


`
const HeaderTitulo = styled.h1`
    font-size: 52px;
    align-self: center;
    font-weight: 300;
    line-height: 67.6px;
    color: #DBE4EF;
`
const HeaderLogo = styled.img`
    max-width: 200px;
`

const ImagemHeader = styled.img`
    max-width: 500px;

`

function Header(){
    return(
        <HeaderContainer>
            <HeaderConteudo>
                <HeaderLogo src={logo}/>
                <HeaderTitulo>Trechos de músicas,citações de livros e 
                    suas melhores ideias num só lugar!
                </HeaderTitulo>
            </HeaderConteudo>
            <ImagemHeader src={computador}/>
        </HeaderContainer>


    )
}

export default Header