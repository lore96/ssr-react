import React, { Component } from 'react';
import routes from '../shared/routes'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet';

class App extends Component {
  render() {
    return(
      <div>
				<Helmet
					htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering appllication example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
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
