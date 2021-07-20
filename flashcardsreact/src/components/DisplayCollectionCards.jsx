import React, { Component } from 'react';
import './app.css'


class DisplayCollectionCards extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            showPopUp: false,
            card: [],
            index: '',
        }
     } 
    
    handlePopUpToggle = (card, index) => alert(`Card: ${index}
    Term -- ${card.term}: ${card.definition}`);

       
    collectionCards() {
      return this.props.collection.map((card, index) =>
         <li className='termList' key={index}><button onClick={() => this.handlePopUpToggle(card, index)}>{card.term}</button> </li>
        )
    }
    
    render() { 
        return (
            <div>
                <ul>
                    {this.collectionCards()}
                </ul>
            </div>
           
        );
    }
}
 
export default DisplayCollectionCards;