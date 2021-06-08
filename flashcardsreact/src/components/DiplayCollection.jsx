import React, { Component } from 'react';
import axios from 'axios';

class DisplayCollection extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cardNumber: 0,
        }
     } 

    goToNextCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber++;
        if(tempCardNumber === this.state.flashcards.length){
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
            tempCardNumber = this.state.flashcards.length - 1;
        }
        this.setState({
            cardNumber: tempCardNumber
        });
    }

   
    async get_collection() {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/${this.state.flashcards.collection_id}`);
            this.setState({
                flashcards: response.data
            });
        } catch (er){
            console.log('ERROR in get_collection', er)
        }
    }

    componentDidMount(){
        this.get_collection()
    }

 
    
    
    render() { 
        return (
            
            <div className="row row-spacer">
                <div className="col">
                    <button onClick={() => this.goToPreviousCard()}>Previos Card</button>
                </div>
                <div className="col">
                    <div className="col md-4"><p>{this.state.flashcards[this.state.cardNumber].definition}</p></div>
                </div>
                <div className="col">
                    <button onClick={() => this.goToNextCard()}>Next Card</button>
                </div>
            </div>
           
        );
    }
}
 
export default DisplayCollection;