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
const EstiloInput = styled.input`
  margin-left: 5px;
  margin-right: 5px;
  width: 600px;
`;
class App extends React.Component {
  state = {

    valorInputUsuario: '',
    valorInputMensagem: ''
  }

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  };

  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  };

  render() {
  return (
    <div className="App">
      <main>

      </main>
      
      {/* <footer className='rodape'> */}
      <EstiloRodape>
        <input 
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={'Usuário'}
        >
        </input>
        <input 
          className='inputMensagem'
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={'Digite uma mensagem'}
        >
        </input>
        <button
          onClick={Mensagens.this.state.add}
        >Enviar</button>
      </EstiloRodape> 
       {/* </footer> */}
      <Mensagens 
        nomeUsuario='Samyr'
        mensagem='Grupo unidos'
      />
    </div>
  );
}
}

export default App;
