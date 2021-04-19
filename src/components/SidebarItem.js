
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export class SidebarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      isChecked: false
    }
  }

  componentDidMount() {
    const key = 'ee652a4c10bbae4e71f91b8eb0d004ba'
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
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

    let movieCategories = this.state.genres.map(gen =>
      <div class='checkb'>
        <input type="checkbox" value={gen.id} checked={isChecked} key={uuidv4()} onChange={(e) => this.props.updateSearchGenre(e.target.value)} /> {gen.name}
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
