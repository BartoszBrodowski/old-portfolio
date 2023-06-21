const Contact = () => {
	const onButtonClick = () => {
		fetch('src/assets/CV/BartoszBrodowskiCV.pdf').then((response) => {
			response.blob().then((blob) => {
				const fileURL = window.URL.createObjectURL(blob);
				const alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'BartoszBrodowskiCV.pdf';
				alink.click();
			});
		});
	};
	return (
		<div className='flex flex-col items-center gap-12'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='font-bold text-4xl text-main-green'>Get in touch with me!</h1>
				<p className='text-lg'>
					If you want to hire, have an offer of joining a cool project, or want to ask me anything,
					hit me up!
				</p>
			</div>
			<div className='flex items-center gap-12'>
				<div>
					<div className='flex flex-col items-left gap-8'>
						<div className='flex gap-4 items-center'>
							<img className='w-16' src='src/assets/images/Mail.svg' alt='Mail' />
							<div>
								<p className='font-semibold text-2xl'>Mail</p>
								<p className='text-xl text-[#808782]'>bar.brodowski@gmail.com</p>
							</div>
						</div>
						<div className='flex gap-4 items-center'>
							<img className='w-16' src='src/assets/images/Location.svg' alt='Mail' />
							<div>
								<p className='font-semibold text-2xl'>Location</p>
								<p className='text-xl text-[#808782]'>Gdańsk, Poland</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center gap-4'>
					<p className='font-semibold text-xl'>Feel free to download my CV :)</p>
					<button
						onClick={() => onButtonClick()}
						className='border-4 border-main-green rounded-full px-6 py-2 font-medium text-lg hover:bg-main-green hover:text-white duration-150'>
						Get CV!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
