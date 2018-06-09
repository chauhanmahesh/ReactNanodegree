import React, {Component} from 'react';

/**
 * List users who liked passed movie or otherwise display a text that no one likes that movie.
 */
class ListUsers extends Component {

    render() {
        const movieId = this.props.movieId
        const profiles = this.props.profiles
        const usersWhoLikedThisMovie = profiles.filter(profile => profile.favoriteMovieID == movieId).map(profile => profile.userID)
        if (usersWhoLikedThisMovie.length > 0) {
            return <div>
                <p>Liked By:</p>
                <ul>
                    {usersWhoLikedThisMovie.map(userId => <li>{this.props.users[userId].name}</li>)}
                </ul>
            </div>
        } else {
            return <p>None of the current users liked this movie</p>
        }
    }

}

export default ListUsers;