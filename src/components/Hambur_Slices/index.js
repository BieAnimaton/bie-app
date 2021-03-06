import React from 'react';

import './styles.css';

const Hamburguer = () => (
    <ul>
        <li><a href='/'><i className="fas fa-home"></i><span>Principal</span></a></li>

        <li><a href='/account'><i className="fas fa-user"></i><span>Contas</span></a></li>

        <li><a href='/create_account'><i className="fas fa-plus-square"></i><span>Adicionar</span></a></li>

        <li><a href=''><i className="fas fa-file-alt"></i><span>Postagens</span></a></li>

        <li><a href=''><i className="fas fa-images"></i><span>Portfólio</span></a></li>

        <li><a href=''><i className="fas fa-sliders-h"></i><span>Configurações</span></a></li>

        <li><a href=''><i className="fas fa-sign-out-alt"></i><span>Sair</span></a></li>
    </ul>
);

export default Hamburguer;