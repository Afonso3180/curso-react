import Item from "./Item"
function List(){
    return(
        <> 
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2010}/>
                <Item marca="Fiat" ano_lancamento={2021}/>
                <Item marca="Chevrolet" ano_lancamento={1998}/>
                <Item />
            </ul>
        </>//tag sem nome é o Fragments
    )
}

export default List