import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
	return (
		<div className='flex gap-8'>
			<a href='https://github.com/BartoszBrodowski' target='_blank'>
				<FontAwesomeIcon
					className='hover:cursor-pointer text-main-black duration-300 hover:scale-125'
					size='3x'
					icon={faGithub}
				/>
			</a>
			<a href='https://www.linkedin.com/in/bartoszbrodowski/' target='_blank'>
				<FontAwesomeIcon
					className='hover:cursor-pointer text-linkedin-blue duration-300 hover:scale-125'
					size='3x'
					icon={faLinkedin}
				/>
			</a>
		</div>
	);
};

export default Links;
