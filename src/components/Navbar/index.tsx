import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const path = location.pathname;
	return (
		<div className='bg-[#d3d3d3] w-2/3 mx-auto absolute top-[15%] max-w-[1280px] row-span-1 col-span-5 px-3 py-2 rounded-full'>
			<ul className='flex justify-between'>
				<li
					className={`${
						path === '/home' ? 'bg-main-offwhite' : 'bg-transparent'
					} + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 px-4 duration-150 font-medium`}
					onClick={() => navigate('/home')}>
					Home
				</li>
				<li
					className={`${
						path === '/about' ? 'bg-main-offwhite' : 'bg-transparent'
					} + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 px-4 duration-150 font-medium`}
					onClick={() => navigate('/about')}>
					About me
				</li>
				<li
					className={`${
						path === '/techstack' ? 'bg-main-offwhite' : 'bg-transparent'
					} + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 px-4 duration-150 font-medium`}
					onClick={() => navigate('/techstack')}>
					Tech Stack
				</li>
				<li
					className={`${
						path === '/projects' ? 'bg-main-offwhite' : 'bg-transparent'
					} + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 px-4 duration-150 font-medium`}
					onClick={() => navigate('/projects')}>
					Projects
				</li>
				<li
					className={`${
						path === '/contact' ? 'bg-main-offwhite' : 'bg-transparent'
					} + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 px-4 duration-150 font-medium`}
					onClick={() => navigate('/contact')}>
					Contact
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
