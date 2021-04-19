import React, { Component } from 'react'
import Modal from './Modal'

class Movie extends Component {


  displayPop() {
    // const tog = this.state.movieclass
    let modalDiv = document.querySelector(".modal")
    modalDiv.classList.add("showModal");
  }

  render() {
    const { title, vote_count, release_date, overview, poster_path } = this.props.movie
    return (
      <div class="movie" >
        <div class="thumbnail">
          <img class="thumnail-img" src={`https://image.tmdb.org/t/p/w500/` + poster_path} alt="thumbnail" />
        </div>
        <div class="article">
          <div class="movie-name-stars">
            <div class="movie-name"> {title}</div>
            <div class="movie-stars"> * * * * * </div>
            <div class="movie-votes"> ({vote_count} votes)</div>
          </div>

          <div class="movie-year">
            {release_date}
          </div>

          <div class="movie-text">
            <br /><br />
            {overview}

            {/* <!-- The Modal --> */}
            <Modal movie={this.props.movie} />

          </div>

          {/* <!-- Trigger/Open The Modal --> */}
          <div class="pop-link" id="myBtn" onClick={this.displayPop}>
            Lire les details
          </div>
        </div>
      </div>
    )
  }


}

export default Movie;