import '../Styles.css';
import Counter from './Counter'
import Home from './Home'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Counter' component={Counter} />
    </>
  );
}

export default App;
