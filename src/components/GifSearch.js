import React, {Component} from 'react'

class GifSearch extends Component {

    state = {
        search: ""
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.search)}>
                    <input type="text" id="search" value={this.state.seach} onChange={this.handleChange} />
                    <button type="submit">search</button>
                </form>
            </div>
        )
    }
}

export default GifSearch