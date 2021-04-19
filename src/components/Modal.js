import React, { Component } from 'react'

class Modal extends Component {

  hidePop(e) {
    const closeButtonID = e.target.id;
    const closeButtonID_tmp = closeButtonID.split('').splice(5,).join('') // remove string "close" injected into the button ID tag (exemple: from 'close334' to '334')
    const idPopup = `div${closeButtonID_tmp}`
    let popupDIV = document.querySelector(`.${idPopup}_`)
    popupDIV.classList.remove("showModal");

  }


  render() {
    const { title, release_date, overview, backdrop_path, id } = this.props.movie
    return (
      <div class={`myModal modal div${id}_`}>
        <button class="myBtn2" id={`close${id}`} onClick={this.hidePop}>Close</button><br />
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