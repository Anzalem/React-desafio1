function MyCard(props) {
    return (
        <div>
            <img src={props.img} />
            <h4>{props.nombre}</h4>
            <p>{props.desc}</p>
        </div>
    )
  }
  
  export default MyCard