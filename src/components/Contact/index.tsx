import CV from '/assets/CV/BartoszBrodowskiCV.pdf';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<div className='flex flex-col items-center gap-12 w-screen px-4 xs:px-12 pt-20 lg:mt-0'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='font-bold text-2xl sm:text-3xl lg:text-5xl text-main-green'>
					Get in touch with me!
				</h1>
				<p className='sm:text-lg lg:text-xl text-center'>
					If you want to hire me, offer to join a cool project, or want to ask me anything, hit me
					up!
				</p>
			</div>
			<div className='flex flex-col sm:flex-row items-center gap-12'>
				<div>
					<div className='flex flex-col items-left gap-8'>
						<div className='flex gap-4 items-center'>
							<img
								className='w-8 md:w-12 color-main-green'
								src='/assets/images/Mail.svg'
								alt='Mail icon'
							/>
							<div>
								<p className='font-semibold text-lg md:text-xl'>Mail</p>
								<p className='md:text-lg text-[#808782]'>bar.brodowski@gmail.com</p>
							</div>
						</div>
						<div className='flex gap-4 items-center'>
							<img className='w-8 md:w-12' src='/assets/images/Location.svg' alt='Location icon' />
							<div>
								<p className='font-semibold text-lg md:text-xl'>Location</p>
								<p className='md:text-lg text-[#808782]'>Gdańsk, Poland</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center gap-4'>
					<p className='sm:font-medium font-semibold text-base lg:text-lg whitespace-nowrap'>
						Feel free to download my CV :)
					</p>
					<a href={CV} download='BartoszBrodowskiCV' target='_blank' rel='noreferrer'>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.2 }}
							className='flex items-center gap-2 border-4 border-main-green rounded-full px-6 py-2 font-medium text-lg'>
							<img className='w-5' src='/assets/images/Download.svg' />
							Get CV
						</motion.button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
