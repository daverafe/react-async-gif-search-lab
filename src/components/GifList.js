import React, {Component} from 'react'

class GifList extends Component {

    appendGifs = () => {
       return this.props.gifs.map(gif => {
           return <li><img src={gif.images.original.url} alt=""/></li>
        })
    }

    render(){
        return (
            <div>
                <ul>
                    {this.appendGifs()}
                </ul>
            </div>
        )
    }
}

export default GifList