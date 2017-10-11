const requireAll = (context) => context.keys().map(context);
requireAll(require.context('./', true, /\.css$/));

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'

import App from '@Tags/App/App.jsx';

const render = () => {
	ReactDOM.render(
			<AppContainer>
				<App>
          Hello World!
        </App>
			</AppContainer>,
		document.getElementById('page')
	);
}

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@Tags/App/App.jsx', () => {
    const NextApp = require('@Tags/App/App.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('page')
    );
  });
}
