import React, {Component} from 'react';
import ListUsers from './ListUsers'

class ListMovies extends Component {
    render() {
        const allMovies = Object.entries(this.props.movies)
        return allMovies.map((movie) => (
            <div>
                <h2>{movie[1].name}</h2>
                <ListUsers movieId={movie[0]} profiles={this.props.profiles} users={this.props.users}/>
            </div>
        ))
    }
}

export default ListMovies;