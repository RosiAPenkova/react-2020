import React from 'react';
import { connect } from 'react-redux';


class Users extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.movies);
  }

  componentDidMount = () => {
    this.props.getMovies();
  }


  render() {

    return <ul className="list-group">
              {this.props.movies.map(movie =>{
              return <li key={movie.id} className="list-group-item">{movie.title}</li>
              })}
            </ul>
            }
          }
          
function getGlobalMovies() {
  return dispatch => {
              fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                  console.log(responseJson);
                  dispatch({
                    type: "FETCHED_MOVIES",
                    payload: responseJson.movies
                  })
                })
                .catch((error) => {
                  console.error(error);
                });
        };
      }
const mapStateToProps = state => ({movies: state.movies });
const mapStateToDispatch = dispatch => {
  return {
              getMovies: () => dispatch(getGlobalMovies())
          }
        }
        
export default connect(mapStateToProps, mapStateToDispatch)(Users);