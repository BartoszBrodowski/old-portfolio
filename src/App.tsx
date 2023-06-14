import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='w-full flex flex-col items-center m-auto font-poppins text-main-black'>
			<Navbar />
			<Routes>
				<Route path='/home' element={<Introduction />} />
				<Route path='/techstack' element={<TechStack />} />
			</Routes>
		</div>
	);
}

export default App;
