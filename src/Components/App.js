import '../Styles.css';
import FashionHome from './FashionHome'
import Colours from './Colours'
import Magic from './Magic'
import Beauty from './Beauty';

import Homepage from './Homepage'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route path='/Beauty' component={Beauty} />
      <Route path='/FashionHome' component={FashionHome} />
      <Route path='/Colours' component={Colours} />
      <Route path='/Magic' component={Magic} />

    </>
  );
}

export default App;
