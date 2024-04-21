import Tags from "./Tags"
import Card from 'react-bootstrap/Card';

function MyCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {props.img} />
            <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text>
                {props.desc}
            </Card.Text>
            <Tags texto = {props.texto} color = {props.color}/>
            </Card.Body>
            </Card>
        </div>
       
    )
  }
  
  export default MyCard