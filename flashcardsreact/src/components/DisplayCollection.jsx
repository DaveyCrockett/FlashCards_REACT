import React, { Component } from 'react';
import './app.css'
import DisplayCollectionCards from './DisplayCollectionCards';

class DisplayCollection extends Component {
    constructor(props) {
        super(props); 
        this.state = {
        }
     } 
    
    
    render() { 
        return (
            <div>
                <div className="row row-spacer">
                        <div className="col">
                        <i className='arrow up' id="onCollection" name="onCollection" value="Up One" onClick={() => this.props.onCollection(true)}></i>
                        </div>
                        <div className="col">
                            <h3>{this.props.collection.length > 0 && this.props.collection[0].collection_title}: {this.props.collection.length} Cards in Collection</h3>
                        </div>
                        <div className='col'>
                        <i className='arrow down' id="offCollection" name="offCollection" value="Down One" onClick={() => this.props.offCollection(true)}></i>
                        </div>
                    </div>
                    <DisplayCollectionCards collection={this.props.collection} />
            </div>
           
        );
    }
}
 
export default DisplayCollection;