'use client';

import Title from './components/title';
import Contacts from './components/contacts';
import About from './components/sections/about';
export default function MainPage() {
  return (
    <main className="flex flex-row justify-between mt-[7%] mx-[12%]">
      <section className="w-[50%] flex flex-col justify-between h-[67rem]">
        {' '}
        <Title />
        <Contacts></Contacts>
      </section>
      <section className="w-[50%] h-[25rem]">
        {' '}
        <About />
      </section>
    </main>
  );
}
