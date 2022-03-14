import './App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import Post from './Components/Post'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [] ,
      favouritesArr:[]
    }    
  }
  componentDidMount = async () => {
    try{
      const res = await(await fetch('http://localhost:3004/posts')).json();    
      this.setState({
        data: res
      })
    }catch(err){
      console.log(err);
    }
  }

  addToFavourites = (obj) => {
    this.setState({
      data:this.state.data.map(item => {
        if (item === obj) {
          item.favourite = !item.favourite;
          return item;
        }else return item;
      })
    })
    if (obj.favourite !== false) {
      this.setState({
        favouritesArr:[...this.state.favouritesArr, obj]
      })
    }else 
    {
      let filteredArray = this.state.favouritesArr.filter(item => item !== obj)
      this.setState({
        favouritesArr: filteredArray
      })
    }
  }
  render(){
    return (
      <div>    
        <div  className='outer-div'> 
        {this.state.data.map(item => {
          return ( 
            <Post key={item.id} item={item} addToFavourites={this.addToFavourites}/>
          )
        })}
        </div>   

          <h1 className='favourite-h1'>Favourites</h1>
          <div  className='outer-div'> 
          {this.state.favouritesArr.map(item => {
          return ( 
            <Post key={item.id} item={item} addToFavourites={this.addToFavourites}/>
          )
        })}
        </div>
      </div>      
    )
  }
}

export default App;
