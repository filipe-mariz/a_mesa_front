import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Landing  from './pages/landing';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
