import '../Styles.css';
import FashionHome from './FashionHome'
import Fashion from './Fashion';
import Beauty from './Beauty';
import Header from './Header'
import Lifestyle from './Lifestyle';
import Culture from './Culture';
import Shopping from './Shopping';
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route exact path='/Home' component={Header} />
      <Route exact path='/Home' component={FashionHome} />
      <Route path ='/Fashion' component={Fashion} />
      <Route path='/Beauty' component={Beauty} />
      <Route path='/Lifestyle' component={Lifestyle} />
      <Route path='/Culture' component={Culture} />
      <Route path='/Shopping' component={Shopping} />
    </>
  );
}

export default App;
