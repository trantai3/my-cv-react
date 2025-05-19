import { FaCode, FaBullhorn, FaPencilRuler, FaBolt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-5xl text-black mb-2" />,
    title: "Web Development",
    desc: "I have been working on web design for 10 years.",
  },
  {
    icon: <FaBullhorn className="text-5xl text-black mb-2" />,
    title: "Branding Identity",
    desc: "We will make you a brand that is catchy and leaves a trace.",
  },
  {
    icon: <FaPencilRuler className="text-5xl text-black mb-2" />,
    title: "Illustrator",
    desc: "I have been working on illustration design for 6 years.",
  },
  {
    icon: <FaBolt className="text-5xl text-black mb-2" />,
    title: "Fast Delivery",
    desc: "I deliver your business as fast as possible.",
  },
];

const designSkills = [
  { name: "Photoshop", percent: 90 },
  { name: "Sketch", percent: 70 },
  { name: "Adobe Xd", percent: 60 },
];
const codeSkills = [
  { name: "Javascript", percent: 90 },
  { name: "HTML5", percent: 80 },
  { name: "CSS3", percent: 70 },
];

const SkillBar = ({ name, percent }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1 text-sm">
      <span>{name}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-yellow-400 h-2 rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow p-6 mt-[32px]">
        <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-2">
          About Me
        </h2>
        <p className="mb-4 text-sm text-gray-700">
          Started earnest brother believe an exposed so. Me he believing
          daughters if forfeited at furniture. Age again and stuff downs spoke.
          Late hour new nay able fat each sell. Nor themselves age introduced
          frequently use unsatiable devonshire get. They why quit gay cold rose
          deal park. One same they four did ask busy. Reserved opinions fat him
          nay position. Breakfast as zealously incommode do agreeable furniture.
          One too nay led fanny allow plate.
        </p>
        <p className="text-sm text-gray-700">
          Quick six blind smart out burst. Perfectly on furniture dejection
          determine my depending an to. Add short water court fat. Her bachelor
          honoured perceive securing but desirous ham required. Questions
          deficient acuteness to engrossed as. Entirely led ten humoured
          greatest and yourself. Besides ye country on observe. She continue
          appetite endeavor she judgment interest the met. For she surrounded
          motionless fat resolution may.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-start h-full"
            >
              {s.icon}
              <h3 className="font-bold text-xl mb-1 mt-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-base underline underline-offset-4 decoration-yellow-400 mb-4">
              Design Skills
            </h3>
            {designSkills.map((s, i) => (
              <SkillBar key={i} name={s.name} percent={s.percent} />
            ))}
          </div>
          <div>
            <h3 className="font-bold text-base underline underline-offset-4 decoration-yellow-400 mb-4">
              Code Skills
            </h3>
            {codeSkills.map((s, i) => (
              <SkillBar key={i} name={s.name} percent={s.percent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
