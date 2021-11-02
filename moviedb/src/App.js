import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/movies/:movie_id" component={MovieDetails} />
        <Route exact path="/" component={Movies} />
      </Switch>
    </div>
  )
}

export default App
