import React, { Component } from 'react';
import axios from 'axios';
import DisplayFlashCard from './DisplayFlashCard'
import DisplayCollection from './DiplayCollection';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
           flashcards: [],
        }
    }

    /*
    async get_flashcard() {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/${this.props.collection_id}/${this.props.flash_card_id}`);
            this.setState({
                flashcards: response.data
            });
        } catch (er){
            console.log('ERROR in get_flashcard', er)
        }
    }    

    async post_flashcard() {
        const flashCards = {flashcards: this.state.flashcards};
        await axios.post(`http://127.0.0.1:8000/flashcardsapp/${this.state.flashcards}`, { flashCards })
        .then(response => this.setState({
            flashcards: [...this.state.flashcards, response.data]
        }))
        
    }*/

    async get_all_flash_cards(){
        try{
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/`);
            this.setState({
                flashcards: response.data
            });
        } catch (er){
            console.log('ERROR in get_collection', er)
        }
    }

    

    componentDidMount(){
        this.get_all_flash_cards();
      
    }

    
    render() {
        return (
            <div>
                <DisplayFlashCard cards={this.state.flashcards} />
                <DisplayCollection />
            </div>
        );
    };
}

export default App;