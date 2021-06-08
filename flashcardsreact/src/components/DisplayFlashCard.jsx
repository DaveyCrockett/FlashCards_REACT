import React, { Component } from 'react';

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

   


 
    
    
    render() { 
        return (
            
            <div className="row row-spacer">
                <div className="col">
                    <button onClick={() => this.goToPreviousCard()}>Previos Card</button>
                </div>
                <div className="col">
                    <div className="col md-4"><p>{this.props.cards[this.state.cardNumber].definition}</p></div>
                </div>
                <div className="col">
                    <button onClick={() => this.goToNextCard()}>Next Card</button>
                </div>
            </div>
           
        );
    }
}
 
export default DisplayFlashCard;