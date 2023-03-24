import Image from "next/image";

const SkillCard = ({ skillName, imagePath }) => {
  return (
    <div className="flex m-5">
      <div className="inline-block p-2">
        <div className="bg-white h-[12rem] rounded-lg border-[#242425] shadow-xl border-2 p-4 hover:scale-125 ease-in-out duration-500">
          <div className="inline-block mb-5 justify-center items-center align-middle">
            <Image src={imagePath} alt={skillName} width={100} height={100} />
          </div>
          <h2 className="flex justify-center text-lg font-medium mb-2">
            {skillName}
          </h2>
        </div>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const skills = [
    { skillName: "Python", imagePath: "/python.png" },
    { skillName: "Java", imagePath: "/java.png" },
    { skillName: "C", imagePath: "/C.png" },
    { skillName: "C++", imagePath: "/Cpp.png" },
    { skillName: "C#", imagePath: "/CSharp.png" },
    { skillName: "Next.js", imagePath: "/nextjs.png" },
    { skillName: "React.js", imagePath: "/react.png" },
    { skillName: "React.js", imagePath: "/react.png" },
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
