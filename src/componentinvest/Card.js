import './Card.css'
import CardContent from './CardContent';
function Card(props){
    function func(data){
       // console.log('from Card');
        // console.log(data);
        props.send(data);
    }
    return(
        <div className="card-info">
            <CardContent send={func}/>
        </div>
    );
}

export default Card;