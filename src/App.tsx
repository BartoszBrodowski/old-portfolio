import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='w-full flex flex-col items-center m-auto font-poppins text-main-black'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Introduction />} />
				<Route path='/about' element={<AboutMe />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
