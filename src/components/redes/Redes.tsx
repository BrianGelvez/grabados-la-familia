import Image from 'next/image';
import instram from '../../../public/instagram.svg';
import facebook from '../../../public/facebook.svg';
import whatsapp from '../../../public/whatsapp.svg';
import styles from './redes.module.css';

const Redes = () => {
  return (
    <article className={styles.redes}>
      <a
        target='_blank'
        rel="noopener noreferrer"
        className={`${styles.whatsapp} hover:animate-pulse animate-once`}
        href="https://github.com/BrianGelvez"
      >
        <Image src={whatsapp} alt="logo de whatsapp" />
      </a>
      {/* <a
        target='_blank'
        rel="noopener noreferrer"
        className={`${styles.facebook} hover:animate-pulse animate-once`}
        href="https://www.linkedin.com/in/briangelvez97/"
      >
        <Image src={facebook} alt="logo de LinkedIn" />
      </a>
      <a
        target='_blank'
        rel="noopener noreferrer"
        className={`${styles.instagram} hover:animate-pulse animate-once`}
        href="https://instagram.com/brian.gelvez?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
      >
        <Image src={instram} alt="logo de Instagram" />
      </a> */}
    </article>
  );
};

export default Redes;
