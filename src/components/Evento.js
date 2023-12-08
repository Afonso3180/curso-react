import Button from "./evento/Button"

function Evento( {numero} ){

    function meuEvento(){
        console.log(`Ativando o primeiro evento!`)
    }

    function segundoEvento(){
        console.log("Ativando o segundo evento!")
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text= "Primeiro evento" />
            <Button event={segundoEvento} text= "Segundo evento" />
        </div>//onClick é um tipo de evento
    )
}

export default Evento