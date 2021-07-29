import React, {Component} from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    handleSubmit = (event, searchValue) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=IGTvKRjQJNYR0It7SL8MTbkXDrYlL20r&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {
            gifs.data.length = 3 
            this.setState({
                gifs: gifs.data
            })
        })    
    }


    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default GifListContainer