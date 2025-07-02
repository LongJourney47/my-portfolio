'use client';
import { FaGoodreads, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Contacts() {
  return (
    <section className="flex flex-row justify-between w-1/4">
      <a href="https://github.com/LongJourney47" target="_blank">
        <FaGithub size={32} />
      </a>
      <a href="https://www.linkedin.com/in/william-cook-fernandez-472121195/" target="_blank">
        <FaLinkedin size={32} />
      </a>
      <a href="https://www.goodreads.com/user/show/191681423-william-j" target="_blank">
        <FaGoodreads size={32} />
      </a>
    </section>
  );
}
