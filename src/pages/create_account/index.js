import React, { Component } from 'react'
import api from '../../services/api';

import './styles.css'

export default class Create_Account extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            email: '',
            senha: '',
            nascimento: ''
        };
    };
    
    changeHandler = e => {
        this.setState( { [e.target.name]: e.target.value } )
    };

    submitHandler = e => {
        e.preventDefault();
        api.post(`/pessoas`, this.state)
    };

    render() {
        const { nome, email, senha, nascimento } = this.state; 

        return (
            <div className="content-field">
                <h1>Crie sua conta</h1> <br></br>
                <div className="create-account">
                    <form onSubmit={this.submitHandler}>
                        <label for="nome">Nome de usuário: </label><input type="text" name="nome" id="nome" value={nome} onChange={this.changeHandler}></input> <br></br>
                        <label for="email">Email: </label><input type="text" name="email" id="email" value={email} onChange={this.changeHandler}></input> <br></br>
                        <label for="senha">Senha: </label><input type="password" name="senha" id="senha" value={senha} onChange={this.changeHandler}></input> <br></br>
                        <label for="data">Data de Nascimento:</label><input type="date" name="nascimento" id="nascimento" value={nascimento} onChange={this.changeHandler}></input> <br></br>
                        <hr></hr>

                        <input type="submit" id="submit-btn"></input>
                        <i class="fas fa-user-plus"></i>
                    </form>
                </div>
            </div>
        )
    };
};