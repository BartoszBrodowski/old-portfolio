import { motion } from 'framer-motion';
import { faWindowMaximize, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type GalacticRebornCardProps = {
	title: string;
	description: string;
	link: string;
	isClicked: boolean;
	setClickedId: (id: number) => void;
	id: number;
	clickedId: number;
	techStack: string[];
	animationDurationTime: number;
};

const GalacticRebornCard: React.FC<GalacticRebornCardProps> = ({
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
		<motion.div
			onClick={!isClicked ? handleClick : undefined}
			transition={{
				layout: { duration: animationDurationTime, type: 'spring' },
			}}
			layout
			className={clsx('max-w-[530px] bg-white shadow-card rounded-lg', {
				'shadow-full-page': isClicked && clickedId === id,
			})}>
			<motion.div className='cursor-pointer' onClick={() => handleClick()}>
				<motion.div layout='position' className='flex justify-between items-center p-4 pb-2'>
					<motion.h2 className='font-bold text-xl text-galactic-reborn-purple'>{title}</motion.h2>
					<motion.button
						animate={clickedId === id ? { rotate: -180 } : { rotate: 0 }}
						layout='position'
						onClick={() => handleClick()}>
						<FontAwesomeIcon icon={faAngleUp} />
					</motion.button>
				</motion.div>
				<motion.div className='flex items-center gap-2 p-4 pt-0' layout='position'>
					{Object.entries(techStack).map(([key, value], index) => (
						<motion.img
							key={index}
							className='w-6'
							layout='position'
							src={`${value}`}
							alt={`${key} logo`}
						/>
					))}
				</motion.div>
			</motion.div>
			{isClicked && (
				<motion.div
					className='flex flex-col gap-4 mt-4  px-4 pb-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: animationDurationTime }}>
					<motion.p>{description}</motion.p>
					<motion.div className='flex items-center gap-2'>
						<FontAwesomeIcon icon={faWindowMaximize} />
						<motion.a className='text-linkedin-blue hover:underline' href={link} target='_blank'>
							{link}
						</motion.a>
					</motion.div>
				</motion.div>
			)}
		</motion.div>
	);
};

export default GalacticRebornCard;
