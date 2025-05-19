import { useState } from "react";
import babel from "../assets/images/babel.jpg";
import george from "../assets/images/george.jpg";
import amazon from "../assets/images/amazon.jpg";
import workspace from "../assets/images/workspace.jpg";
import recoba from "../assets/images/recoba.jpg";
import doddy from "../assets/images/doddy.jpg";
import bob from "../assets/images/bob.jpg";
import exemag from "../assets/images/exmag.jpg";
import babecode from "../assets/images/code.jpg";

const categories = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Design" },
  { key: "motion", label: "Motion Graphic" },
  { key: "illustration", label: "Illustration" },
  { key: "photo", label: "Photography" },
];

const portfolioData = [
  {
    title: "Babel Admin",
    desc: "An admin template design.",
    img: babel,
    category: "web",
  },
  {
    title: "George Motion",
    desc: "A motion graphic design.",
    img: george,
    category: "motion",
  },
  {
    title: "Amazon Travel",
    desc: "Nature photography work.",
    img: amazon,
    category: "photo",
  },
  {
    title: "My Workspace",
    desc: "My current workspace design.",
    img: workspace,
    category: "web",
  },
  {
    title: "Recoba Template",
    desc: "Html template design.",
    img: recoba,
    category: "illustration",
  },
  {
    title: "Doddy App",
    desc: "Mobile app ui kit design.",
    img: doddy,
    category: "web",
  },
  {
    title: "Bob Stayler",
    desc: "Illustration character design.",
    img: bob,
    category: "motion",
  },
  {
    title: "Exemag Wordpress Theme",
    desc: "Multiconcept Blog Theme.",
    img: exemag,
    category: "web",
  },
  {
    title: "Babel Admin Html Code",
    desc: "An admin template design.",
    img: babecode,
    category: "photo",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === active);

  return (
    <div>
      <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4 mt-4">
        Portfolio
      </h2>
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`font-medium cursor-pointer px-2 pb-1 border-b-2 ${
              active === cat.key
                ? "text-yellow-400 border-yellow-400"
                : "text-black border-transparent hover:text-yellow-400"
            } transition`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
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

export default Portfolio;
