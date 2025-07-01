import Image from 'next/image';
('use client');

import Title from './components/title';
import About from './components/sections/about';
export default function MainPage() {
  return (
    <main className=" flex flex-row justify-between mt-[7%] mx-[12%] h-[25rem]">
      <section className="w-[50%]">
        {' '}
        <Title />
      </section>
      <section className="w-[50%] ">
        {' '}
        <About />
      </section>
    </main>
  );
}
