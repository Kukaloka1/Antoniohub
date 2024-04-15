import { useRef } from 'react';
import LogoS from '../../../assets/images/botonsendbot7.svg';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  );
}

export default Logo;

