import React, { Component } from 'react';
import axios from 'axios';

class CreateFlashCard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            collection_title: '',
            collection_id: '',
            term: '',
            definition: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
     }  
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.post_flashcard()
    } 

    async post_flashcard() {
        const card = this.state;
        const col_id = parseInt(this.state.collection_id)
        try{
            await axios.post(`http://127.0.0.1:8000/flashcardsapp/${col_id}`, card)
            .then(response => console.log(response.status))
        }catch(er){
            console.log('ERROR in post_flashcard', er)
        }
    }
     
    
    render() { 
        const {collection_title, collection_id, term, definition} = this.state
        return (
            
           <form onSubmit={this.handleSubmit}>
               <h2>Create a Card</h2>
               <label for="collection_title">Enter Collection Title</label>
               <input type="text" name="collection_title" value={collection_title} onChange={this.onChange} ></input>
               <label for="collection_id">Enter Collection ID</label>
               <input type="number" name="collection_id" value={collection_id} onChange={this.onChange} ></input>
               <label for="term">Enter Term</label>
               <input type="text" name="term" value={term} onChange={this.onChange} ></input>
               <label for="definition">Enter Definition</label>
               <input type="text" name="definition" value={definition} onChange={this.onChange} ></input>
               <input type="submit"></input>
           </form>
        );
    }
}
 
export default CreateFlashCard;