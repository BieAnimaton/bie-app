import React, { Component } from 'react';

import reactjs from '../../images/reactjs.png';
import nodejs from '../../images/nodejs.png';
import mondodb from '../../images/mongodb.png';
import css from '../../images/css.png';

import './styles.css';

export default class Main extends Component {
    
    render() {
        return (
            <div className="article">
                <h1>Bem-vindo, usuário!</h1>
                <div className="info">
                    <p>Este é um site de treinamento criado por Bie Animation.</p>
                    <p>O objetivo do site é permitir a criação de contas novas no banco de dados, a realização de login / logoff, lida de algumas postagens e alteraçaõ de configurações.</p>
                    <hr></hr>
                    <p>As tenologias usadas para a construção e organização do site foram as seguintes:</p>
                    <div className="tech-photos">
                        <img src={reactjs} width='180px'/>
                        <img src={nodejs} width='150px' height='90'/>
                        <img src={mondodb} width='240px'/>
                        <img src={css} width='80px'/>
                    </div>
                    <hr></hr>
                </div>
            </div>
        );
    };
};