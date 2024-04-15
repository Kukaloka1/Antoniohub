
import Loader from 'react-loaders';
import './index.scss';

const Skills = () => {
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>Skills</h1>
          <p>
            Throughout my career as a developer, I'am building a strong foundation in essential technologies that enable me to tackle dynamic and challenging projects. HTML, CSS, and JavaScript allows me to create interactive and responsive user interfaces, while my experience with the React framework enables me to develop complex and efficient web applications.
          </p>
          <p>
            On the backend, I use Python and Flask to construct robust and scalable servers, ensuring that both functionality and security meet the project's requirements. Additionally, my skills with design tools like Adobe Illustrator and Figma allow me to collaborate effectively with design teams, ensuring a seamless integration of visual and functional aspects of applications.
          </p>
          <p>
            I also utilize Notion for project management, which enhances team organization and collaboration. Furthermore, I am deeply involved in exploring artificial intelligence, specifically using OpenAI's AI (GPT-4) and its APIs to render and automate tasks, opening new possibilities in integrating machine learning capabilities into the applications I develop.
          </p>
          <p>
            I am seeking roles in companies that value innovation and offer opportunities to work with cutting-edge technologies on varied and challenging projects.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Skills;


