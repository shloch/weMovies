import React, { Component } from 'react'

class Modal extends Component {

  hidePop() {

    let modalDiv = document.querySelector('.modal')
    modalDiv.classList.remove("showModal");
  }

  render() {
    const { movie } = this.props.movie
    return (
      <div class={"myModal modal " + movie.imdbID}>
        <button id="myBtn2" onClick={this.hidePop}>Close</button><br />
        {/* <!-- Modal content --> */}
        <div class="modal-content">
          <span class="close"><h4>MOVIE: {movie.Title}</h4></span>
          <p>A {movie.Type}, released in <strong>{movie.Year}</strong></p>
          <div class="thumbnail">
            <img src={movie.Poster} alt="thumbnail" />
          </div>
        </div>
      </div>
    )
  }
}
export default Modal