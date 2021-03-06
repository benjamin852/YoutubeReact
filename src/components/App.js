import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import 'semantic-ui-css/semantic.min.css';
class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };
    componentDidMount() {
        this.onTermSubmit('babcock');
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items
        });
    }
    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    render() {
        return (
            <div>
                <SearchBar
                    onFormSubmit={this.onTermSubmit}
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedVideo}
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;