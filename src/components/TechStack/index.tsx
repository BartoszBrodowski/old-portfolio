import Backend from './Cards/Backend';
import Frontend from './Cards/Frontend';
import Tools from './Cards/Tools';

const TechStack = () => {
	return (
		<div className='flex flex-col items-center w-full p-8'>
			<div className='flex items-center flex-col gap-8 w-2/3'>
				<h1 className='flex items-center gap-4 text-6xl font-medium'>Tech Stack</h1>
				<p className='text-center text-xl text-[#999CA5]'>
					During my time at <span className='text-main-green'>University of Gdańsk</span> I've
					learned a lot of different technologies and tools. With many of those I've experimented of
					my own in my free time. Studying <span className='text-main-green'>Computer Science</span>{' '}
					gave me a broad understanding of IT as a whole. I'm always eager to learn new things and
					I'm not afraid of challenges.
				</p>
				<div className='w-full grid grid-cols-3 gap-6'>
					<Frontend />
					<Backend />
					<Tools />
				</div>
			</div>
		</div>
	);
};

export default TechStack;
