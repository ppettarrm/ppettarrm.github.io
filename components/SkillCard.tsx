import Image from "next/image";

const SkillCard = ({ skillName, imagePath }) => {
  return (
    <div className="flex m-5">
      <div className="flex text-center justify-center items-center p-2">
        <div className="bg-white h-[12rem] rounded-lg shadow-lg p-4 hover:scale-125 ease-in-out duration-500">
          <div className="flex mb-5 justify-center items-center">
            <Image src={imagePath} alt={skillName} width={100} height={100} />
          </div>
          <h2 className="flex-1 flex justify-center text-lg font-medium mb-2">
            {skillName}
          </h2>
        </div>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const skills = [
    { skillName: "Python", imagePath: "/../public/python.png" },
    { skillName: "Java", imagePath: "/../public/java.png" },
    { skillName: "C", imagePath: "/../public/c.png" },
    { skillName: "C++", imagePath: "/../public/cpp.png" },
    { skillName: "C#", imagePath: "/../public/csharp.png" },
    { skillName: "Next.js", imagePath: "/../public/nextjs.png" },
    { skillName: "React.js", imagePath: "/../public/react.png" },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="flex justify-center text-3xl font-medium mb-6 text-gray-600">
        Skills
      </h1>
      <div className="flex justify-center items-center flex-wrap -mx-2">
        {skills.map((skill) => (
          <SkillCard
            key={skill.skillName}
            skillName={skill.skillName}
            imagePath={skill.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
