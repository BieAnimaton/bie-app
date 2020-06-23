import React, { Component } from 'react'

import './styles.css'

export default class Create_Account extends Component {
    render() {
        return (
            <div className="content-field">
                <h1>Crie sua conta</h1> <br></br>
                <div className="create-account">
                    <form>
                        <label for="user-field">Nome de usuário: </label><input type="text" id="user-field"></input> 
                        <label for="work-field">Profissão: </label><input type="text" id="work-field"></input> <br></br>
                        <label for="date-field">Data de Nascimento:</label><input type="date" id="date-field"></input> <br></br>

                        <input type="submit" id="submit-btn"></input>
                        <i class="fas fa-user-plus"></i>
                    </form>
                </div>
            </div>
        )
    };
};