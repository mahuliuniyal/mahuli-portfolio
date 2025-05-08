
import { Card } from "@/components/ui/card";

interface Skill {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface SkillProgressProps {
  skill: Skill;
}

const SkillProgress = ({ skill }: SkillProgressProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900/60 text-white">
      <div className="md:flex">
        <div className="md:w-1/2 bg-black/40 flex items-center justify-center p-4">
          <img 
            src={skill.image} 
            alt={skill.title} 
            className="max-h-[350px] object-contain" 
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
          <p className="text-gray-300">{skill.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default SkillProgress;
