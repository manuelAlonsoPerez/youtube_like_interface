import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCyY3pPpQKI597cUA2JkwOBgepUrSLEvEk';

class App extends Component{

  constructor(props){
    super(props);

    // Will record the list of videos from YTSearch in the state
    this.state = { 
      videos : [],
      selectedVideo : null
    };
    // Initially calls videoSearch with argument 'surfboards'
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    // We use YTSearch to search in the API for 'surfboards' and assign 
    // the result [videos] to the state
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });

  }

  render(){
    
    const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300);

    return(
      <div>
        {/* Passing videoSearch tuned-fnc as property argument: onSearchTerm */}
        <SearchBar   onSearchTermChange = { videoSearch } />
        <VideoDetail video = {this.state.selectedVideo} />
        {/* Passing the state via (props) to VideoList Component */}
        <VideoList 
        //  Function that takes a video as argument and sets it as the selectedVIdeo
          onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );  
  }
}

// Takethis component's generated HTML and put it on the page (in the DOM)
// < /> Creates an instance of App component class
// document.querySelector searches for .container Class in index.html
// & renders the component there.

ReactDOM.render(<App />, document.querySelector('.container'));
