import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Links = () => {
	return (
		<div className='flex items-center gap-8 mt-4'>
			<a href='https://github.com/BartoszBrodowski' target='_blank'>
				<div className='flex items-center gap-2 text-xl hover:cursor-pointer hover:text-linkedin-blue duration-300 hover:scale-110'>
					<img className='w-10' src='src/assets/Github.svg' alt='Github logo' />
					<p className='flex items-center gap-2'>
						Github <FontAwesomeIcon icon={faUpRightFromSquare} />
					</p>
				</div>
			</a>
			<a href='https://www.linkedin.com/in/bartoszbrodowski/' target='_blank'>
				<div className='flex items-center gap-2 text-xl hover:cursor-pointer hover:text-linkedin-blue duration-300 hover:scale-110'>
					<img className='w-10' src='src/assets/LinkedIn.svg' alt='LinkedIn logo' />
					<p className='flex items-center gap-2'>
						LinkedIn <FontAwesomeIcon icon={faUpRightFromSquare} />
					</p>
				</div>
			</a>
		</div>
	);
};

export default Links;
