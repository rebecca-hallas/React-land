import '../Styles.css';
import Counter from './Counter'
import Data from './Data'
import Home from './Home'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Counter' component={Counter} />
      <Route path='/Data' component={Data} />

    </>
  );
}

export default App;
