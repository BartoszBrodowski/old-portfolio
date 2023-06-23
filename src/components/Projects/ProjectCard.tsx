import { motion } from "framer-motion";

const durationTime = 1;

type ProjectCardProps = {
  title: string;
  description: string;
  isClicked: boolean;
  setClickedId: (id: number) => void;
  id: number;
  clickedId: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  isClicked,
  setClickedId,
  id,
  clickedId,
}) => {
  const handleClick = () => {
    if (isClicked && clickedId === id) {
      setClickedId(-1);
    } else {
      setClickedId(id);
    }
  };
  return (
    <motion.div
      transition={{ layout: { duration: durationTime, type: "spring" } }}
      layout
      onClick={() => handleClick()}
      className="max-w-[500px] shadow-card p-4 rounded-lg"
    >
      <motion.h2 layout="position">{title}</motion.h2>
      {isClicked && (
        <motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: durationTime }}
          >
            {description}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
