import { motion } from 'framer-motion';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type ProjectCardProps = {
	title: string;
	description: string;
	link: string;
	isClicked: boolean;
	setClickedId: (id: number) => void;
	id: number;
	clickedId: number;
	techStack: object;
	animationDurationTime: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	link,
	isClicked,
	setClickedId,
	id,
	clickedId,
	techStack,
	animationDurationTime,
}) => {
	const handleClick = () => {
		if (isClicked && clickedId === id) {
			setClickedId(-1);
		}
		if (clickedId === -1) {
			setClickedId(id);
		}
	};
	return (
		<motion.div onClick={!isClicked ? handleClick : undefined}>
			<motion.div
				transition={{
					layout: {
						duration: animationDurationTime,
						type: 'spring',
					},
				}}
				layout
				className={clsx('mx-4 max-w-[550px] bg-white shadow-card rounded-lg', {
					'shadow-full-page': isClicked && clickedId === id,
				})}>
				<motion.div className='cursor-pointer' onClick={() => handleClick()} layout='position'>
					<motion.div
						layout='position'
						className='flex justify-between items-center cursor-pointer p-4 pb-2'>
						<motion.h2 className='font-bold text-xl text-main-green'>{title}</motion.h2>
						<motion.button animate={clickedId === id ? { rotate: -180 } : { rotate: 0 }} layout>
							<FontAwesomeIcon icon={faAngleUp} />
						</motion.button>
					</motion.div>
					<motion.div className='flex items-center gap-2 p-4 pt-0' layout='position'>
						{Object.entries(techStack).map(([name, image_path], index) => (
							<motion.img
								key={index}
								className='w-6'
								layout='position'
								src={`${image_path}`}
								alt={`${name} logo`}
							/>
						))}
					</motion.div>
				</motion.div>
				{isClicked && (
					<motion.div
						className='flex flex-col gap-4 px-4 pb-4 lg:text-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: animationDurationTime }}>
						<motion.p>{description}</motion.p>
						<motion.div className='flex items-center gap-2'>
							<motion.img className='w-6' src='/assets/images/Github.svg' alt='Github logo' />
							<motion.a
								className='text-sm sm:text-base text-linkedin-blue hover:underline'
								href={link}
								target='_blank'>
								{link}
							</motion.a>
						</motion.div>
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default ProjectCard;
