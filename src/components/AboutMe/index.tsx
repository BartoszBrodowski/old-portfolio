const AboutMe = () => {
	return (
		<div className='flex gap-8 justify-center items-center mx-auto w-2/3 pt-20 lg:mt-0'>
			<div className='flex justify-center items-center'>
				<div className='flex flex-col gap-4 sm:gap-12 max-w-[600px]'>
					<div>
						<h1 className='text-main-green text-xl sm:text-xl lg:text-2xl font-bold'>About me</h1>
						<p className='text-sm sm:text-base lg:text-lg'>
							I'm a 2nd year Computer Science student at University of Gdańsk 🎓 keen on learning
							new things and taking on challenges 💪 and open to new friendships.
						</p>
					</div>
					<div>
						<h1 className='text-main-green text-xl sm:text-xl lg:text-2xl font-bold'>Hobbies</h1>
						<div className='flex flex-col gap-2 sm:gap-2text-sm sm:text-base lg:text-lg'>
							<p>
								🏁 Formula 1 became my big interest back in 2021 and ever since I've been a big fan
								of the sport.
							</p>
							<p>
								🎸 From time to time I really enjoy playing Electric Guitar, mostly fingerstyle.
							</p>
							<p>
								💿 Music, especially Rap genre has been a big part of my youth and it still is to
								this day. I love listening to albums and expanding my horizons while forming my own
								opinion.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden xl:block max-w-[400px] flex-col gap-8 justify-center w-full'>
				<img className='rounded-lg' src='/assets/images/GdanskView.jpg' alt='View of Gdansk' />
			</div>
		</div>
	);
};

export default AboutMe;
