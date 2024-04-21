
import Badge from 'react-bootstrap/Badge';

function Tags(props) {
    return (
        <>
            <div>
                <Badge bg={props.color}>{props.texto}</Badge>
            </div>
        </>
    )
  }
  
  export default Tags