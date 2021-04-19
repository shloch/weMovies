import React, { Component } from 'react'

class Modal extends Component {

  hidePop() {

    let modalDiv = document.querySelector('.modal')
    modalDiv.classList.remove("showModal");
  }

  render() {
    console.log(this.props)
    const { title, vote_count, release_date, overview, poster_path, backdrop_path } = this.props.movie
    return (
      <div class={"myModal modal"}>
        <button id="myBtn2" onClick={this.hidePop}>Close</button><br />
        {/* <!-- Modal content --> */}
        <div class="modal-content">
          <span class="close"><h4>MOVIE: {title}</h4></span>
          <p>A Movie, released in <strong>{release_date}</strong></p>
          <p>{overview}</p>
          <div class="thumbnail">
            <img src={`https://image.tmdb.org/t/p/w500/` + backdrop_path} alt="thumbnail" />
          </div>
        </div>
      </div>
    )
  }
}
export default Modal