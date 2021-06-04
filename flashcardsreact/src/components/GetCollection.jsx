import React, { Component } from 'react';
import CollectionLink from './CollectionLink'

class GetCollection extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            flashcards: [],
        }
     }

    flashCardMapTable() {
        const current_cards = this.props.get_all()
        current_cards.map((index) => {
            return (
              <tr key={index}>
                <td><CollectionLink get_all={current_cards} /></td>
              </tr>
            );
          })
    } 

    render() { 
        return (
            this.flashCardMapTable()
         );
    }
}
 
export default GetCollection;