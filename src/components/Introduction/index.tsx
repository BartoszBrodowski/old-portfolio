import { TypeAnimation } from 'react-type-animation';
import ProfileImage from '../ProfileImage';
import Links from '../Links';

const Introduction = () => {
	return (
		<div className='w-2/3 grid items-center grid-cols-5 gap-4 h-screen'>
			<div className='col-span-2 flex flex-col gap-4 justify-center h-max items-center relative'>
				<ProfileImage />
				<div className='flex flex-col items-center absolute top-80'>
					<p className='text-4xl font-semibold'>Currently:</p>
					<p className='text-2xl text-main-green'>Looking for a job!</p>
					<button className='mt-4 group'>
						<span className=''>Test</span>Contact
					</button>
				</div>
			</div>
			<div className='flex col-span-3 flex flex-col justify-center gap-4'>
				<span className='font-bold text-5xl'>Bartosz Brodowski,</span>
				<span className='font-bold text-5xl text-main-green'>
					<TypeAnimation
						sequence={['Software Engineer 💻', 2000, 'CS Student 🎓', 2000]}
						wrapper='span'
						speed={50}
						repeat={Infinity}
					/>
				</span>
				<span className='text-xl'>
					Hello! I'm Bartosz Brodowski, a Computer Science student. Based in Gdańsk, Poland. 📍
				</span>
				<Links />
			</div>
		</div>
	);
};

export default Introduction;
