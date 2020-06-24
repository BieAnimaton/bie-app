import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';

export default class Account extends Component {
    state = {
        pessoas: [],
        productInfo: [],
        page: 1,
    };

    componentDidMount() {
        this.loadPessoas();
    };

    loadPessoas = async (page = 1) => {
        const response = await api.get(`/pessoas?page=${page}`);

        const {docs, ...productInfo } = response.data;

        this.setState({ pessoas: docs, productInfo, page })
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
                    </div>
                ))}

            </div>
        );
    };
};