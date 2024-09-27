export default function Templete (props){
    
    return(
        <div className="templete-pag1">
                <p className="titulo">{props.descricao}</p>
            <div className="div-texto">
                <p className="descricao-apresentacao" >Descubra novos sabores e transforme sua sobremesa em verdadeiras experiências. Prepare-se para momentos inesquecíveis!</p>
            </div>
                <img className="imagem" src={props.imgtemplete} /> 
        </div>
    )
}