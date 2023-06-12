import Introduction from './components/Introduction';
import TechStack from './components/TechStack';

function App() {
	return (
		<div className='w-full flex flex-col items-center m-auto font-poppins text-main-black'>
			<Introduction />
			<TechStack />
		</div>
	);
}

export default App;
