import React, { Component } from 'react'
import Modal from './Modal'

class Movie extends Component {


  displayPop() {
    // const tog = this.state.movieclass
    let modalDiv = document.querySelector(".modal")
    modalDiv.classList.add("showModal");
  }

  render() {
    return (
      <div class="movie" >
        <div class="thumbnail">
          <img class="thumnail-img" src={this.props.movie.Poster} alt="thumbnail" />
        </div>
        <div class="article">
          <div class="movie-name-stars">
            <div class="movie-name"> {this.props.movie.Title}</div>
            <div class="movie-stars"> * * * * * </div>
            <div class="movie-votes"> (XXX votes)</div>
          </div>

          <div class="movie-year">
            {this.props.movie.Year}
          </div>

          <div class="movie-text">
            <br /><br />
                imdbID : {this.props.movie.imdbID} <br />
                Type : <strong> {this.props.movie.Type} </strong>

            {/* <!-- The Modal --> */}
            <Modal movie={this.props} />

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