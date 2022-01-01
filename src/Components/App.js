import '../Styles.css';
import FashionHome from './FashionHome'
import Beauty from './Beauty';
import Header from './Header'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/Home' component={Header} />
      <Route exact path='/Home' component={FashionHome} />
      <Route path='/Beauty' component={Beauty} />
    </>
  );
}

export default App;
