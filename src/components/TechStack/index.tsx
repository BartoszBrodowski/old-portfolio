import Backend from './Cards/Backend';
import Frontend from './Cards/Frontend';
import Tools from './Cards/Tools';

const TechStack = () => {
	return (
		<div className='flex flex-col items-center w-full p-8 mt-20'>
			<div className='flex items-center flex-col gap-8 w-2/3'>
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
