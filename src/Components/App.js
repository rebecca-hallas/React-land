import '../Styles.css';
import Counter from './Counter'
import Colours from './Colours'
import Home from './Home'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Counter' component={Counter} />
      <Route path='/Colours' component={Colours} />

    </>
  );
}

export default App;
