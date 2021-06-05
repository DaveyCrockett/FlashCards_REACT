import  { Component } from 'react';

class GetCollection extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            flashcards: [],
        }
     } 
    
    
    render() { 
        return (
                <tr>
                    <td><a href={`http://127.0.0.1:8000/flashcardsapp/${this.props.flash_card.collection_id}`}>Collection {this.props.flash_card.collection_id}</a></td>
                </tr>
        );
    }
}
 
export default GetCollection;