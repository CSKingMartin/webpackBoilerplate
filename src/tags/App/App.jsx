import createClassStack from '@Helpers/createClassStack';

let classStack = createClassStack([
  'App',
  'App--default'
]);

const App = (props) => {
	return (
		<div className={classStack}>
			{props.children}
		</div>
	)
}

module.exports = App;