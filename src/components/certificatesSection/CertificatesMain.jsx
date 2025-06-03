import CertificatesText from "./CertificatesText";
import SingleCertificate from "./SingleCertificate";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants"; // Assuming this path is correct

const certificates = [
  {
    name: "The Web Developer Bootcamp 2025",
    issuer: "Udemy",
    date: "May 2025",
    image: "/images/Screenshot 2025-05-29 162801.png",
    link: "https://drive.google.com/file/d/1pbkYu0-192QGJHrmoROuA-kdra_ry2lQ/view?usp=sharing",
  },
  {
    name: "Programming in java",
    issuer: "NPTEL",
    date: "May 2025",
    image: "/images/Screenshot 2025-05-31 114413.png",
    link: "https://drive.google.com/file/d/1vVchylf4CE2tmB3ronafCk-UyaxgCg0A/view?usp=sharing",
  },
  {
    name: "Introduction to Internet Of Things",
    issuer: "NPTEL",
    date: "May 2025",
    image: "/images/Screenshot 2025-05-31 114615.png",
    link: "https://drive.google.com/file/d/1vZjUR_0yRr4K1j0fHNNcUxv5yQ1AnRvz/view?usp=sharing",
  },
];

const CertificatesMain = () => {
  return (
    <div id="certificates" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificatesText />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto mt-12">
        {certificates.map((certificate, index) => (
          <SingleCertificate
            key={index} // Consider using a unique ID from your data if available
            name={certificate.name}
            issuer={certificate.issuer}
            date={certificate.date}
            image={certificate.image}
            link={certificate.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesMain;