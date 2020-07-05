import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';

export default class Account extends Component {
    state = {
        pessoas: [],
    };

    componentDidMount() {
        this.loadPessoas();
    };

    loadPessoas = async () => {
        const response = await api.get(`/pessoas`);

        const {docs, ...productInfo } = response.data;

        this.setState({ pessoas: docs })
    };

    render() {
        const { pessoas } = this.state;

        return(
            <div className="account-field">
                <h1>Contas do Sistema</h1>
                {pessoas.map(pessoa => (
                    <div className="info">
                        <h2>{pessoa.nome}</h2>
                        <hr></hr>
                        <p>Email: {pessoa.email}</p>
                        <p>Senha: {pessoa.senha}</p>
                        <p>Nascimento: {pessoa.nascimento}</p>
                        <p>Criado em: {pessoa.criadoEm}</p>
                        <button className="edit">Editar</button>
                        <button className="delete">Excluir</button>
                    </div>
                ))}

            </div>
        );
    };
};