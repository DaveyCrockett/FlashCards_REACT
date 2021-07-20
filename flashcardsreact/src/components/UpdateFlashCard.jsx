import React, { Component } from 'react';
import axios from 'axios';

class CreateFlashCard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            id: '',
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
        this.update_cards()
    } 

    /* async update_flashcard() {
        const cards = this.props.cards;
        const col_id = parseInt(this.state.collection_id)
        try{
            await axios.put(`http://127.0.0.1:8000/flashcardsapp/${col_id}/${cards.id}`, card)
            .then(response => console.log(response.status))
        }catch(er){
            console.log('ERROR in post_flashcard', er)
        }
    }
     */

    async update_cards(){
        const card = this.state;
        const col_id = parseInt(this.state.collection_id)
        try{
            await axios.put(`http://127.0.0.1:8000/flashcardsapp/${col_id}/${card.id}`, card);
            this.setState({
                collection_title: '',
                collection_id: '',
                term: '',
                definition: '',
            });
        } catch (er){
            console.log('ERROR in get_collection', er)
        }
    }
    
    render() { 
        const {id, collection_title, collection_id, term, definition} = this.state
        return (
            
           <form onSubmit={this.handleSubmit}>
               <h2>Update A Card</h2>
               <label for="id">Enter Chosen ID to Change</label>
               <input type="number" name="id" value={id} onChange={this.onChange} ></input>
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