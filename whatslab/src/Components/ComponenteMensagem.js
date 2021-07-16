import { thisExpression } from '@babel/types'
import React from 'react'
import styled from 'styled-components'

const EstiloContainer = styled.div`
    background-color: blue;
    border: 1px black solid;
    margin: 10px;
    
    /* display: flex; */
    /* flex-direction: column; */
    
    
    p{
        background-color: brown;
        
    }
    >div{
        display: flex;
        justify-content: space-between;    
        margin: 2px;
        padding: 5px;
    }
`

export class Mensagens extends React.Component{
    state = {
        mensagens: [
            {
                // id: '',
                nomeUsuario: "",
                mensagem: ""
            }
        ],
        valorInputNomeUsuario: '',
        valorInputMensagem: ''
    };

    addMensagem = () => {
        const novaMensagem = {
            nomeUsuario: this.state.valorInputNomeUsuario,
            mensagem: this.state.valorInputMensagem
        };
        console.log(novaMensagem)
        const novoArrayMensagem = [...this.state.mensagens, novaMensagem];
        this.setState({novoArrayMensagem})
    };
    render() {
        return (
            <EstiloContainer>
                <div>
                    <p>{this.props.nomeUsuario}</p>
                    <p>{this.props.mensagem}</p>
                </div>
                
                <div>
                    <p>{this.props.nomeUsuario} NOME</p>
                    <p>{this.props.mensagem} MENSAGEM</p>
                </div>

                <div>
                    <p>{this.props.nomeUsuario} NOME</p>
                    <p>{this.props.mensagem} MENSAGEM</p>
                </div>

                
            </EstiloContainer>
        )
    }
}