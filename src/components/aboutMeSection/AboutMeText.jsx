import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hello! I'm Tinku Kumar, a passionate Full-Stack Web Developer and Computer Science Engineering student.
         I specialize in web development with the MERN stack, problem-solving through Data Structures & Algorithms,
          and creating intuitive UI/UX experiences.

          I enjoy building scalable, efficient, and user-friendly solutions. 
          Currently a pre-final year student at IES College of Technology, Bhopal (CGPA: 7.8), 
          I’ve worked on projects like WonderLust (rental platform), MicroFund (loan management), 
          and ConnectChat (real-time messaging). When I'm not coding, you can find me running
          , working out, or drawing inspiration from mentors and peers.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
