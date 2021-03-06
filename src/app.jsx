import styles from './app.module.css';
import Login from './components/login/login';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({authService}) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
