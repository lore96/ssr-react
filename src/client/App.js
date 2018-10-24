import React, { Component } from 'react';
import routes from '../shared/routes'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          {routes.map(({ path, exact, component: Page, ...rest }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(props) => (
                  <Page {...props} {...rest} />
                )}
              />
            ))}
          </Switch>
      </div>
    );
  }
}

export default App;
