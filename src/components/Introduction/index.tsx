import { TypeAnimation } from 'react-type-animation';
import ProfileImage from '../ProfileImage';
import Links from '../Links';
import Navbar from '../Navbar';

const Introduction = () => {
	return (
		<div className='w-2/3 flex flex-col items-center justify-center h-screen'>
			<div className='flex justify-center gap-16'>
				<div className='col-span-2 flex flex-col gap-4 justify-center h-max items-center relative'>
					<ProfileImage />
					<div className='flex flex-col items-center absolute top-80'>
						<p className='flex items-center gap-2 text-2xl'>
							<div className='animate-status-glow bg-[#24AB1E] rounded-full w-4 h-4'></div>
							Looking for a job!
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-4 justify-center'>
					<span className='font-bold text-5xl'>Bartosz Brodowski,</span>
					<span className='font-bold text-5xl text-main-green'>
						<TypeAnimation
							sequence={['Software Engineer 💻', 2000, 'CS Student 🎓', 2000]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</span>
					<div>
						<span className='text-xl block'>
							Hello! I'm Bartosz Brodowski, a Computer Science student.
						</span>
						<span className='text-xl block'>Based in Gdańsk, Poland. 📍</span>
					</div>
					<Links />
				</div>
			</div>
		</div>
	);
};

export default Introduction;
