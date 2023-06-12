// import '../../index.css';

import ProfileImage from '../ProfileImage';

const Introduction = () => {
	return (
		<div className='grid grid-cols-5 gap-4'>
			<div className='col-span-2'>
				<ProfileImage />
			</div>
			<div className='col-span-3 flex flex-col justify-center gap-4'>
				<span className='font-bold text-5xl'>Bartosz Brodowski, Software Engineer</span>
				<span className='text-xl'>
					Hello! I'm Bartosz Brodowski, a Computer Science student. Based in Gdańsk, Poland.
				</span>
			</div>
		</div>
	);
};

export default Introduction;
