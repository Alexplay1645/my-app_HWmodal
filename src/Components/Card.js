import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../App.css'

function Card2(props)
{
  return <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body >
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='testclass'>
          <small className="text-muted">{props.update}</small>
        </Card.Footer>
    </Card>
}

export function GroupExample() {
    return (
    <CardGroup>
      <Card2 title="Card title" img="1.jpg" text="This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer." update="Last updated 3 mins ago"></Card2>
  
      <Card2 title="Card title" img="2.jpg" text="This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer." update="Last updated 3 mins ago"></Card2>

     <Card2 title="Card title" img="3.jpg" text="This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer." update="Last updated 3 mins ago"></Card2>      
       
    </CardGroup>
  );
}

