import React, { Component } from 'react';
import GetCollection from './GetCollection';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
           flashcards: [],
        }
    }

    async get_collection() {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/${this.state.flashcards}`);
            console.log(response.data)
            this.setState({
                flashcards: response.data
            });
        } catch (er){
            console.log('ERROR in get_collection', er)
        }

    }

    async get_flashcard(collection_id, flash_card_id) {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/${collection_id}/${flash_card_id}`);
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
        
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <GetCollection get_all={this.get_collection.bind(this)} />
                    </tbody>
                </table>
            </div>
        );
    };
}

export default App;