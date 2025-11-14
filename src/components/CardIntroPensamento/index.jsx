import styled from "styled-components";
import { useState } from "react";

const CardIndroPensamentoContainer = styled.div`
    display: flex;
    background-color: #fff;
    padding: 48px 48px;
    flex-direction: column;
    align-items: center;
    gap: 40px; //=> dar uma estudada nisso aqui
    align-self: center;
    justify-content: center;
    border-radius: 16px;
    box-shadow: 8px 8px 20px 0px rgba(4, 24, 50, 0.08);
    width: 100%;
    max-width: 712px;
    margin-top: 40px;
`

const TituloInput = styled.h3`
    font-size: 24px;
    color: #041832;


`

const CaixaDeTexto = styled.form`
    margin-bottom: 24px;
    outline: none;
    font-size:20ox    
`
const PensamentoTexto = styled.input`
    padding: 16px;
    border-radius: 8px;
    background: #EDF0F4;
    overflow-warp: break-word;



`


function CardIndroPensamento() {
    const [texto, setTexto] = useState("");
    return(
        <CardIndroPensamentoContainer>
            <CaixaDeTexto>
                <TituloInput>Pensamento</TituloInput>
                <PensamentoTexto></PensamentoTexto>
            </CaixaDeTexto>
            

        </CardIndroPensamentoContainer>
    );
}

export default CardIndroPensamento