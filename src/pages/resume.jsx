import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import imgClient1 from "../assets/images/imgClient1.jpg";
import imgClient2 from "../assets/images/imgClient2.jpg";
import imgClient3 from "../assets/images/imgClient3.jpg";
import imgClient4 from "../assets/images/imgClient4.jpg";
import imgProfile from "../assets/images/profile.jpg";

const workingHistory = [
  {
    title: "Art Director - Facebook Inc",
    time: "2010 - Present",
    desc: "Expresses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
  },
  {
    title: "Senior Designer - Google",
    time: "2008 - 2010",
    desc: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
  },
  {
    title: "Junior Designer - Creative Shake",
    time: "2005 - 2008",
    desc: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
  },
];

const educationHistory = [
  {
    title: "Abc University of Los Angeles",
    time: "2004 - 2009",
    desc: "Expresses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
  },
  {
    title: "Drawing Course",
    time: "2003 - 2004",
    desc: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
  },
  {
    title: "Abe High School",
    time: "2000 - 2003",
    desc: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
  },
];

const clients = [
  {
    name: "paymo",
    logo: imgClient1,
  },
  {
    name: "envato",
    logo: imgClient2,
  },
  {
    name: "conneqt",
    logo: imgClient3,
  },
  {
    name: "tijdwinst",
    logo: imgClient4,
  },
];

const testimonials = [
  {
    name: "April M. Griffin",
    role: "Founder",
    avatar: imgProfile,
    feedback: "Our logo and business card design look great. Thanks Henry",
  },
  {
    name: "Larry M. Johnson",
    role: "Freelancer",
    avatar: imgProfile,
    feedback:
      "Henry is a very creative and talented designer. I do not hesitate to work again.",
  },
  {
    name: "Jack Garratt",
    role: "Freelancer",
    avatar: imgProfile,
    feedback:
      "Great designer! He finished our work wonderfully and just in time. thanks for everything.",
  },
];

const Resume = () => (
  <div className="space-y-8">
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4">
        Resume
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-2xl text-yellow-400 mr-2" />
            <h3 className="font-bold text-lg">Working History</h3>
          </div>
          {workingHistory.map((item, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-bold">{item.title}</div>
              <div className="text-sm text-gray-600 mb-1">{item.time}</div>
              <div className="text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-2xl text-yellow-400 mr-2" />
            <h3 className="font-bold text-lg">Education History</h3>
          </div>
          {educationHistory.map((item, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-bold">{item.title}</div>
              <div className="text-sm text-gray-600 mb-1">{item.time}</div>
              <div className="text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4">
        Clients
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow flex items-center justify-center h-24"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-5 flex flex-col h-full"
          >
            <div className="flex items-center mb-2">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-bold">
                  {t.name}{" "}
                  <span className="text-xs font-normal text-gray-500">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm">{t.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Resume;
