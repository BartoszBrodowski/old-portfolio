import { TypeAnimation } from 'react-type-animation';
import ProfileImage from '../ProfileImage';
import Links from '../Links';

const Introduction = () => {
	return (
		<div className='w-2/3 grid grid-cols-5 gap-4 h-screen'>
			<div className='col-span-2 flex justify-center items-center'>
				<ProfileImage />
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
