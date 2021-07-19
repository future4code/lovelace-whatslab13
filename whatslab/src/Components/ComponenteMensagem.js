
import React from 'react'
import styled from 'styled-components'

const EstiloContainer = styled.div`
    margin: 10px;
    >div{
        display: flex;
        justify-content: space-between;    
        margin: 2px;
        padding: 5px;

        
    }
`

export class Mensagens extends React.Component{

    
    render() {
        return (
            <EstiloContainer>
                <div>
                    <p>{this.props.nomeUsuario}</p>
                    <p>{this.props.mensagem}</p>
                </div>
            
            </EstiloContainer>
        )
    }
}