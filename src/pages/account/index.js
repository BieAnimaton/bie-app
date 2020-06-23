import React, { Component } from 'react';

import './styles.css';

export default class Account extends Component {
    render() {
        return(
            <div className="account-field">
                <h1>Contas do Sistema</h1>
                <div className="info">
                    <h2><i class="fas fa-male"></i>Marcos</h2>
                    <hr></hr>
                    <p>Profissão: Programador</p>
                    <p>Nascimento: 17/03/1980</p>
                </div>
                <div className="info">
                    <h2><i class="fas fa-female"></i>Camila</h2>
                    <hr></hr>
                    <p>Profissão: Bióloga</p>
                    <p>Nascimento: 17/03/2000</p>
                </div>
                <div className="info">
                    <h2><i class="fas fa-female"></i>Stepahny</h2>
                    <hr></hr>
                    <p>Profissão: Médica</p>
                    <p>Nascimento: 09/11/2002</p>
                </div>
                <div className="info">
                    <h2><i class="fas fa-male"></i>João</h2>
                    <hr></hr>
                    <p>Profissão: Músico</p>
                    <p>Nascimento: 02/07/1970</p>
                </div>
            </div>
        );
    };
};