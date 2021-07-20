import React, { Component } from 'react';
import axios from 'axios';
import DisplayFlashCard from './DisplayFlashCard'
import CreateFlashCard from './CreateFlashCard';
import UpdateFlashCard from './UpdateFlashCard'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
           flashcards: [],
           showCollection: false,
           currentIndex: 0,
           collection: []
        }
        this.get_collection = this.get_collection.bind(this)
    }

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

 

    async get_collection(bool, collection) {
        try{
            console.log(collection)
            let response = await axios.get(`http://127.0.0.1:8000/flashcardsapp/${collection}`);
            this.setState({
                showCollection: bool,
                collection: response.data,
            });
        } catch (er){
            console.log('ERROR in get_collection', er)
        }
    }

    onlyCollection(){
        let collection_id = []
        for(let index = 0; index < this.state.flashcards.length; index++){
            let collection = this.state.flashcards[index].collection_id 
            collection_id.push(collection);
            
        }
        let unique = [...new Set(collection_id)];
        return unique
        
    }

    onCollection(bool){
        let tempIndex = this.state.currentIndex;
        tempIndex++;
        const onlyCollection = this.onlyCollection();
        if(tempIndex > onlyCollection.length){
            tempIndex = 0;
        }
        this.setState({
            currentIndex: tempIndex,
            bool: bool
        });
        this.get_collection(bool, tempIndex)
    }

    offCollection(bool){
        let tempIndex = this.state.currentIndex;
        tempIndex--;
        const onlyCollection = this.onlyCollection();
        if(tempIndex < 0){
            tempIndex = onlyCollection.length - 1;
        }
        this.setState({
            currentIndex: tempIndex,
            bool: bool
        });
        this.get_collection(bool, tempIndex)
    }


    componentDidMount(){
        this.get_all_flash_cards();
      
    }

    
    render() {
        return (
            <div>
                <h1>All Flash Cards</h1>
                {this.state.flashcards.length > 0 && <DisplayFlashCard cards={this.state.flashcards} />}
                <h1>Collection Titles</h1>
                {this.state.flashcards.length > 0 && <div>
                    <div className="row row-spacer">
                        <div className="col">
                            <input type="button" id="onCollection" name="onCollection" value="Up One" onClick={() => this.onCollection(true)}></input>
                        </div>
                        <div className="col">
                            <h1>{this.state.collection.length > 0 && this.state.collection[0].collection_title}</h1>
                        </div>
                        <div className='col'>
                            <input type="button" id="offCollection" name="offCollection" value="Down One" onClick={() => this.offCollection(true)} ></input>
                        </div>
                    </div>
                </div>}
                <CreateFlashCard />
                <UpdateFlashCard cards={this.state.flashcards}/>
            </div>
        );
    };
}

export default App;