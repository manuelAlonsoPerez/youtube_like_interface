import React, {Component} from 'react';

// Class component
class SearchBar extends Component{
   
    constructor(props){
        super(props);
        //Creates the state object with a term property
        this.state = {term: ''};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    };

    render(){
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange = { (event) => this.onInputChange(event.target.value)} />;
            </div>
        );
    }
  
}


export default SearchBar;


