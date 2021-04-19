import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Movie from './Movie'
import SidebarItem from './SidebarItem'

//   <!--middle section with checkboxes-->
class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies: [],
      genreID: ''
    }
    this.updateSearchGenre = this.updateSearchGenre.bind(this);

  }

  componentDidMount() {
    const key = 'ee652a4c10bbae4e71f91b8eb0d004ba'
    const fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US`
    fetch(fetchURL)
      .then(Response => Response.json())
      .then(apiData => {
        this.setState({
          allMovies: apiData.results
        })
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let fetchURL = ''
    const key = 'ee652a4c10bbae4e71f91b8eb0d004ba'
    if (prevState.genreID !== this.state.genreID) {
      const key = 'ee652a4c10bbae4e71f91b8eb0d004ba'
      const fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=${this.state.genreID}`
      fetch(fetchURL)
        .then(Response => Response.json())
        .then(apiData => {
          this.setState({
            allMovies: apiData.results
          })
        })
        .catch(e => {
          console.log(e);
          return e;
        });
    }
  }

  updateSearchGenre(genreID) {
    // console.log(`genreID  = ${genreID}`)
    this.setState({
      genreID: genreID
    })
  }


  render() {
    const { allMovies } = this.state;
    console.log(`genreID init = ${this.state.genreID}`)
    let movies = allMovies.map((mov) => <Movie key={uuidv4()} movie={mov} />)
    // let movieCategories = genres.map((gen) => <SidebarItem key={uuidv4()} genre={gen} />)
    return (
      <main>
        <div id="sideBar">
          <SidebarItem updateSearchGenre={this.updateSearchGenre} />
        </div>

        <div id="movies">
          {movies}
        </div>
      </main >
    )
  }

}
export default MainSection
