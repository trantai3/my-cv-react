import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Contact = () => (
  <div className="space-y-8">
    <div className="bg-white mt-[32px] rounded-2xl shadow p-6">
      <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4">
        Contact Form
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="col-span-1 space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 border border-gray-300 rounded p-2 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-1/2 border border-gray-300 rounded p-2 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded transition"
          >
            Submit
          </button>
        </form>
        <div className="ml-[24px]">
          <h3 className="font-bold mb-2 text-xl">Contact Informations</h3>
          <div className="mb-1">
            <span className="font-bold">Address:</span> 107727 Santa Monica
            Boulevard Los Angeles
          </div>
          <div className="mb-1">
            <span className="font-bold">Phone:</span> +38 012-3456-7890
          </div>
          <div className="mb-1">
            <span className="font-bold">Job:</span> Freelancer
          </div>
          <div className="mb-1">
            <span className="font-bold">E-mail:</span> chris@domain.com
          </div>
          <div className="mb-1">
            <span className="font-bold">Skype:</span> chrisjohnson85
          </div>
          <div className="flex gap-3 mt-3 text-xl">
            <a href="#" className="!text-black hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="!text-black hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="!text-black hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="!text-black hover:text-yellow-400">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="font-bold text-lg underline underline-offset-4 decoration-yellow-400 mb-4">
        Contact Map.
      </h2>
      <div className="rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.451546713128!2d105.75335909412443!3d21.008149221684395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453594e700953%3A0xdbaaf70dcbb82eb4!2zUGh1IERvLCBOYW0gVOG7qyBMacOqbSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1747323806556!5m2!1sen!2s"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Contact;
