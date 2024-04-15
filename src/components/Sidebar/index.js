import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faScrewdriverWrench, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
         
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="skills-link" to="/skills">
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/antonio-fernandez-r%C3%ADos-24007b234/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Kukaloka1" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aaatube" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} color="#b9b9b9" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;

