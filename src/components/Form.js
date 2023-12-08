import { useState } from "react"

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()//casso nao tenha esse evento default, ele a função continuará a processar e fazer um reload na pagina
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" 
                           placeholder="Digite seu nome" 
                           id="name" 
                           name="name"
                           onChange={(e) => setName(e.target.value)}//faz com que cada letra digitado, modifica o valor do state
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" 
                           placeholder="Digite sua senha" 
                           id="password" 
                           name="password"
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>//onSubmit é um tipo de evento em React, ele faz uma parada tipo o onClick()
    )
}

export default Form