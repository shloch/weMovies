import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Movie from './Movie'
import SidebarItem from './SidebarItem'
import apiKey from './apiKey'


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
    const fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`
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
    if (prevState.genreID !== this.state.genreID) {
      const fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${this.state.genreID}`
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
    this.setState({
      genreID: genreID
    })
  }


  render() {
    const { allMovies } = this.state;
    let movies = allMovies.map((mov) => <Movie key={uuidv4()} movie={mov} />)
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
