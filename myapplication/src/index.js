import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// Todo componente tem que começar com a letra maiúscula
ReactDOM.render(
    <div>
         <Pai nome="Paulo" sobrenome="Silva">
            {/* Ctrl + u para comentários */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))