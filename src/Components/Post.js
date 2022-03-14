import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';



class Post extends Component{
    constructor(props){
      super(props)    
    }

 

    render(){
        return(
            <Card className='card' border='primary' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{this.props.item.title}</Card.Title>
              <Card.Text>
                {this.props.item.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              
              {this.props.item.favourite == true? 
              <Button variant="primary" onClick={e => this.props.addToFavourites(this.props.item)}>&#11088;</Button>
              :
              <Button variant="primary" onClick={e => this.props.addToFavourites(this.props.item)}>&#x2605;</Button>
              }
              
            </Card.Footer>
            </Card>
        )
    }
}


export default Post;