
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import apiKey from './apiKey'

export class SidebarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      isChecked: false
    }
  }

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    fetch(url)
      .then(Response => Response.json())
      .then(apiData => {
        this.setState({
          genres: apiData.genres
        })
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  render() {
    const { isChecked } = this.state

    let movieCategories = this.state.genres.map(genre =>
      <div class='checkb'>
        <input type="checkbox" value={genre.id} key={uuidv4()} onChange={(e) => this.props.updateSearchGenre(e.target.value)} /> {genre.name}
      </div>
    )

    return (
      <form action="/" name="selectMovie" class="select-movie">
        {movieCategories}
      </form>
    )
  }
}

export default SidebarItem
