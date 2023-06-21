import React from 'react';

const Tools = () => {
	return (
		<div className='flex flex-col items-center gap-8 px-4 py-8 bg-white rounded-lg'>
			<h1 className='text-xl font-semibold'>🛠️ Tools</h1>
			<div className='grid grid-cols-2 grid-rows-3 gap-y-8 justify-center items-center w-full'>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Docker.svg' alt='Docker logo' />
					<p>Docker</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Kubernetes.svg' alt='Kubernetes logo' />
					<p>Kubernetes</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Bash.svg' alt='Bash logo' />
					<p>Bash</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Linux.svg' alt='Linux logo' />
					<p>Linux</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Postman.svg' alt='Postman logo' />
					<p>Postman</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/VSCode.svg' alt='Visual Studio Code logo' />
					<p>Visual Studio Code</p>
				</div>
			</div>
		</div>
	);
};

export default Tools;