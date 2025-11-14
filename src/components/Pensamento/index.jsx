import styled from "styled-components";
import CardIndroPensamento from "../CardIntroPensamento";



const PensamentoContainer = styled.div`
    display:flex;
    padding-top: 120px;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 280vh;
    box-sizing: border-box;
`

const PensamentoTitulo = styled.h2`
    font-size: 40px;
    color: #041832;

`



function Pensamento(){
    return(
        <PensamentoContainer>
            <PensamentoTitulo>Adicione um pensamento novo</PensamentoTitulo>
            <CardIndroPensamento/>
        </PensamentoContainer>
    )
}

export default Pensamento