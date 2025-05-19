import Profile from "../../../assets/images/profile.jpg";
const Sider = () => (
  <div className="bg-white rounded-3xl shadow-2xl p-4 w-80 mx-auto flex flex-col items-center relative overflow-hidden">
    <div className="flex justify-center w-full -mt-20 mb-4">
      <img src={Profile} alt="Profile" />
    </div>
    <h2 className="text-2xl font-extrabold mt-2 mb-1 text-center">
      HENRY ROONEY
    </h2>
    <p className="text-gray-500 mb-6 text-center">Creative Designer</p>
    <ul className="w-full mb-8 space-y-2">
      <li className="flex items-center">
        <span className="text-yellow-400 text-lg mr-2">●</span>
        <span className="font-semibold">Name:</span>
        <span className="ml-2">Chris Johnson</span>
      </li>
      <li className="flex items-center">
        <span className="text-yellow-400 text-lg mr-2">●</span>
        <span className="font-semibold">Birthday:</span>
        <span className="ml-2">06 December 1987</span>
      </li>
      <li className="flex items-center">
        <span className="text-yellow-400 text-lg mr-2">●</span>
        <span className="font-semibold">Job:</span>
        <span className="ml-2">Freelancer</span>
      </li>
      <li className="flex items-center">
        <span className="text-yellow-400 text-lg mr-2">●</span>
        <span className="font-semibold">Email:</span>
        <span className="ml-2">henry@domain.com</span>
      </li>
      <li className="flex items-center">
        <span className="text-yellow-400 text-lg mr-2">●</span>
        <span className="font-semibold">Skype:</span>
        <span className="ml-2">henryrooney85</span>
      </li>
    </ul>
    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 text-lg">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
        />
      </svg>
      Download Cv
    </button>
  </div>
);

export default Sider;
