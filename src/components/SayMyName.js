function SayMyName(props){//sempre vai ficar no argumento da funcao do componente
    return(
        <div>
            <p>Fala aí {props.nome}, suave?</p>
        </div>
    )
}

export default SayMyName