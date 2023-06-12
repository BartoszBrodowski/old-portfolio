const TechStack = () => {
	return (
		<div className='flex flex-col items-center bg-main-offwhite w-full p-8'>
			<div className='flex items-center flex-col gap-16 w-2/3'>
				<h1 className='text-6xl font-medium'>Tech Stack</h1>
				<div className='w-full grid grid-cols-3 gap-8'>
					<div className='cols-span-1 bg-white shadow-md h-96 rounded-lg'>Frontend</div>
					<div className='cols-span-1 bg-white shadow-md h-96 rounded-lg'>Backend</div>
					<div className='cols-span-1 bg-white shadow-md h-96 rounded-lg'>Tools</div>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
