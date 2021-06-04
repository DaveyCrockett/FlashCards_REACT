import React, { Component } from 'react';
import GetCollection from './GetCollection';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
           flashcards: [],
        }
    }

    async get_collection(collection_id) {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/${collection_id}`);
            this.setState({
                flashcards: response.data
            });
        } catch (er){
            console.log('ERROR in get_collection', er)
        }

    }

    async get_flashcard(collection_id, flash_card_id) {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/${collection_id}/${flash_card_id}`)
            this.setState({
                flashcards: response.data
            });
        } catch (er){
            console.log('ERROR in get_flashcard', er)
        }
    }

    async post_flashcard() {
        const flashCards = {flashcards: this.state.flashcards};
        await axios.post(`http://127.0.0.1:8000/flashcardsapp/${}`, { flashCards })
        .then(response => this.setState({
            flashcards: [...this.state.flashcards, response.data]
        }))
        
    }

    async post_flashcard(collection_id, flash_card_id) {
        const flashCards = {flashcards: this.state.flashcards};
        await axios.put(`http://127.0.0.1:8000/flashcardsapp/${collection_id}/${flash_card_id}`, { flashCards })
        .then(response => this.setState({
            flashcards: [...this.state.flashcards, response.data]
        }))
        
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <GetCollection />
                    </tbody>
                </table>
            </div>
        );
    };
}

export default App;