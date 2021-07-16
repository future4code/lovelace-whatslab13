import React from 'react';
import styled from 'styled-components'
// import './App.css'
import {Mensagens} from './Components/ComponenteMensagem'



const EstiloRodape = styled.footer`
  margin: 10px;
  /* border: black 1px solid; */
  position:absolute; 
  bottom:0px; 
  left:0px; 
`;
const EstiloContainer = styled.div`
  border: black 1px solid;
`;
class App extends React.Component {
  state = {
    arrayMensagens: [
      {
          nomeUsuario: "",
          mensagem: ""
      }
  ],
    valorInputUsuario: '',
    valorInputMensagem: ''
  }

  addMensagem = () => {
    let nomeUsuarioDigitado = ''
    if(this.state.valorInputUsuario.toLocaleLowerCase() !== 'eu'){
      nomeUsuarioDigitado = this.state.valorInputUsuario
    } else {
      nomeUsuarioDigitado = ''
    }
    
    const novaMensagem = {
        nomeUsuario: nomeUsuarioDigitado,
        mensagem: this.state.valorInputMensagem
    };
    
    const novoArrayMensagem = [...this.state.arrayMensagens, novaMensagem];
    this.setState({arrayMensagens: novoArrayMensagem})
    this.state.valorInputUsuario = '';
    this.state.valorInputMensagem = ''
  };

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  };

  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  };

  render() {
    const ExibirMensagens = this.state.arrayMensagens.map((umaMensagem) => {
      return (
        <Mensagens
        nomeUsuario={umaMensagem.nomeUsuario}
        
        mensagem={umaMensagem.mensagem}
        

        />
        
      )
    });
  return (
    <EstiloContainer>
      <main>

      </main>
      
      
      <EstiloRodape>
        <input 
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={'Usuário'}
        >
        </input>
        <input 
          
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={'Digite uma mensagem'}
        >
        </input>
        <button
         onClick={this.addMensagem} 
        >Enviar</button>
      </EstiloRodape> 
       
      {ExibirMensagens}
    </EstiloContainer>
  );
}
}

export default App;
