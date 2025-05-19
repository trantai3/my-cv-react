import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";
import blog5 from "../assets/images/blog5.jpg";
import blog6 from "../assets/images/blog6.jpg";

const portfolioData = [
  {
    title: "See my current workspace",
    desc: "The first thing to remember about success is that it is a process.",
    img: blog1,
  },
  {
    title: "How to become a web designer?",
    desc: "He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering.",
    img: blog2,
  },
  {
    title: "Why is it better to work nights?",
    desc: "Legs, and only stopped when he began to feel a mild, dull pain there that he had never felt.",
    img: blog3,
  },
  {
    title: "Can you work everywhere?",
    desc: "Drops of rain could be heard hitting the pane, which made him feel quite sad..",
    img: blog4,
  },
  {
    title: "How to connect your imac or macBook",
    desc: "However hard he threw himself onto his right, he always rolled back to where he was.",
    img: blog5,
  },
  {
    title: "I'm starting a new project",
    desc: "The first thing to remember about success is that it is a process...",
    img: blog6,
  },
];

const Blog = () => {
  return (
    <div>
      <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4 mt-4">
        Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow overflow-hidden flex flex-col"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <div className="font-bold text-base mb-1">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
