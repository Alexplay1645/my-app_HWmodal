import Carousel from 'react-bootstrap/Carousel';

function Img(props)
{
    return(
        <img className="d-block w-100" src={props.src} alt="First slide" />     
    );
}
function Text(props)
{
    return(        
        <>
            <h1>{props.header}</h1>
            <p>{props.text}</p>
        </>
    );
}
export function MyExample() {
  return (
    <Carousel style= {{ width: '100rem', height:'50rem'}} slide={true} >
       <Carousel.Item style= {{ width: '100rem', height:'50rem'}}>
       <Img src='1.jpg'/>
        <Carousel.Caption>
         <Text header='First Header ' text='Lorem ipsum!'/>
        </Carousel.Caption>
      </Carousel.Item>     
      <Carousel.Item style= {{ width: '100rem', height:'50rem'}}>
      <Img src='2.jpg'/>
        <Carousel.Caption>
         <Text header='Secont Header ' text='Second Lorem ipsum!'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style= {{ width: '100rem', height:'50rem'}}>
      <Img src='3.jpg'/>
        <Carousel.Caption>
         <Text header='Third Header ' text='Second Lorem ipsum!'/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
