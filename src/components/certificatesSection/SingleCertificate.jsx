import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants"; // Assuming this path is correct

const SingleCertificate = ({ name, issuer, date, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)} // You can adjust animation variants if needed
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center group"
    >
      <div className="max-h-[180px] max-w-[300px] rounded-xl overflow-hidden mb-4 border border-white relative">
        {/* Overlay for hover effect - similar to your project component */}
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 group-hover:opacity-0 transition-all duration-500"></div>
        <img
          src={image}
          alt={`${name} certificate`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl text-orange font-semibold mb-2">{name}</h3>
      <p className="text-md text-white mb-1">{issuer}</p>
      <p className="text-sm font-thin text-gray-300 mb-4">{date}</p>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
        >
          View Certificate <BsFillArrowUpRightCircleFill />
        </a>
      ) : (
        <span className="text-gray-400 italic text-sm">Link not available</span>
      )}
    </motion.div>
  );
};

export default SingleCertificate;