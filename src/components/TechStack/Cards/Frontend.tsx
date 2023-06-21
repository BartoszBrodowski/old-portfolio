const Frontend = () => {
	return (
		<div className='flex flex-col items-center gap-8 px-4 py-8 bg-white'>
			<h1 className='text-xl font-semibold'>🖥️ Frontend</h1>
			<div className='grid grid-cols-2 grid-rows-3 gap-y-8 justify-center items-center w-full'>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/HTML.svg' alt='HTML logo' />
					<p>HTML</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/CSS.svg' alt='CSS logo' />
					<p>CSS</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/TypeScript.svg' alt='TypeScript logo' />
					<p>TypeScript</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/React.svg' alt='React logo' />
					<p>React</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/TailwindCSS.svg' alt='TailwindCSS logo' />
					<p>TailwindCSS</p>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<img className='w-16' src='src/assets/images/Sass.svg' alt='Sass logo' />
					<p>Sass</p>
				</div>
			</div>
		</div>
	);
};

export default Frontend;
