import React, { Component } from 'react';
import axios from 'axios';
import './app.css'

class DisplayFlashCard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cardNumber: 0,
        }
     } 
    
    

    goToNextCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber++;
        if(tempCardNumber === this.props.cards.length){
            tempCardNumber = 0;
        }
        this.setState({
            cardNumber: tempCardNumber
        });
    }

    goToPreviousCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber--;
        if(tempCardNumber < 0){
            tempCardNumber = this.props.cards.length - 1;
        }
        this.setState({
            cardNumber: tempCardNumber
        });
    }

    async remove_card(){
        const card_id = this.props.cards[this.state.cardNumber].id
        const col_id = parseInt(this.props.cards[this.state.cardNumber].collection_id)
        try{
            await axios.delete(`http://127.0.0.1:8000/flashcardsapp/${col_id}/${card_id}`);
        } catch (er){
            console.log('ERROR in get_collection', er)
        }
    }
    
    
    render() { 
        return (
            
            <div className="row row-spacer">
                <div className="col">
                    <i className='arrow left'  onClick={() => this.goToPreviousCard()}></i>
                </div>
                <div className="col">
                    <div className="col md-4"><p id='termDefinition'><strong>{this.props.cards[this.state.cardNumber].term}: </strong>{this.props.cards[this.state.cardNumber].definition}</p><button type='button' className='deleteBtn' onClick={() => this.remove_card()}><i class="fa fa-trash-o"></i><span className='deleteTxt'>DELETE</span></button></div>
                </div>
                <div className="col">
                    <i className='arrow right' onClick={() => this.goToNextCard()}></i>
                </div>
            </div>
           
        );
    }
}
 
export default DisplayFlashCard;