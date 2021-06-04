import React, { Component } from 'react';

class CollectionLink extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            flashcards: [],
        }
     }


    render() { 
        return ( 
            <a href={`http://127.0.0.1:8000/flashcardsapp/${this.props.flashcards}`}>Collection {this.props.flashcards}</a>
         );
    }
}
 
export default CollectionLink;