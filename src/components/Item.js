import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,//indico que a marca é um string e que não pode ficar vazio
    ano_lancamento: PropTypes.number.isRequired//indico que o ano de lançamento é um number e que não pode ficar vazio
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Item