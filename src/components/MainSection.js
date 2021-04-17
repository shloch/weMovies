import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Movie from './Movie'


//   <!--middle section with checkboxes-->
class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies: []
    }
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=ab5b6fa3&s=fast')
      .then(Response => Response.json())
      .then(apiData => {
        this.setState({
          allMovies: apiData.Search
        })
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }


  render() {
    const { allMovies } = this.state;
    let movies = allMovies.map((mov) => <Movie key={uuidv4()} movie={mov} />)
    return (
      <main>
        <div id="sideBar">
          <form action="/" name="selectMovie" class="select-movie">
            <div class='checkb'> <input type="checkbox" /> Comedie </div>
            <div class='checkb'> <input type="checkbox" /> Aventure </div>
            <div class='checkb'> <input type="checkbox" /> Fantastique </div>
            <div class='checkb'> <input type="checkbox" checked="checked" /> Animation </div>
            <div class='checkb'> <input type="checkbox" /> Action </div>
          </form>
        </div>

        <div id="movies">
          {movies}
        </div>
      </main >
    )
  }

}
export default MainSection
