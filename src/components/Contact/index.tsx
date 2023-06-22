import CV from '../../assets/CV/BartoszBrodowskiCV.pdf';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<div className='flex flex-col items-center gap-12'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='font-bold text-6xl text-main-green'>Get in touch with me!</h1>
				<p className='text-xl text'>
					If you want to hire me, offer to join a cool project, or want to ask me anything, hit me
					up!
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
					<a href={CV} download='BartoszBrodowskiCV' target='_blank' rel='noreferrer'>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.2 }}
							className='border-4 border-main-green rounded-full px-6 py-2 font-medium text-lg'>
							Get CV!
						</motion.button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
