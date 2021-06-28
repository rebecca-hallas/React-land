import '../Styles.css';
import Counter from './Counter'
import Colours from './Colours'
import Magic from './Magic'

import Home from './Home'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Counter' component={Counter} />
      <Route path='/Colours' component={Colours} />
      <Route path='/Magic' component={Magic} />

    </>
  );
}

export default App;
