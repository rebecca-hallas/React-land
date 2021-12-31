import '../Styles.css';
import Counter from './Counter'
import Colours from './Colours'
import Magic from './Magic'

import Homepage from './Homepage'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route path='/Counter' component={Counter} />
      <Route path='/Colours' component={Colours} />
      <Route path='/Magic' component={Magic} />

    </>
  );
}

export default App;
