import React, {Component} from 'react'

class ListUsers extends Component {
  
  // Renders the favourite movie of a user based on profile passed to it.
  renderUserFavoriteMoveForProfile(profile) {
    let users = this.props.users
    let movies = this.props.movies
	return <li key={profile.id}>{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}.</li>
  }
  
  render() {
    return (
    	<ul>
      	{
      		this.props.profiles.map((profile) => (
            this.renderUserFavoriteMoveForProfile(profile)
    		))
      	}
      	</ul>
    )
  }
  
}
export default ListUsers