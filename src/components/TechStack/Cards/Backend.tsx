const Backend = () => {
	return (
		<div className='flex flex-col items-center gap-8 px-4 py-8 bg-white'>
			<h1 className='text-xl font-semibold'>⚙️ Backend</h1>
			<div className='grid grid-cols-2 grid-rows-3 gap-y-8 justify-center items-center w-full'>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Python.svg' alt='Python logo' />
					<p>Python</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Java.svg' alt='Java logo' />
					<p>Java</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/NodeJS.svg' alt='NodeJS logo' />
					<p>NodeJS</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/ExpressJS.svg' alt='ExpressJS logo' />
					<p>ExpressJS</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Neo4j.svg' alt='Neo4j logo' />
					<p>Neo4j</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/MySQL.svg' alt='MySQL logo' />
					<p>MySQL</p>
				</div>
			</div>
		</div>
	);
};

export default Backend;
