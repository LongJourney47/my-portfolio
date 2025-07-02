'use client';

import Title from './components/title';
import Contacts from './components/contacts';
import Navigation from './components/navigation';
import About from './components/sections/about';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function MainPage() {
  const sectionIds = ['about', 'experience', 'projects'];
  const activeId = useScrollSpy(sectionIds);

  return (
    <main className="flex mt-[7%] mx-[12%]">
      <aside className=" flex flex-col justify-between sticky top-[10%] h-[67rem] w-[50%]">
        <dive>
          <Title />
          <Navigation activeId={activeId} />
        </dive>

        <Contacts />
      </aside>
      <section className="flex-1 overflow-y-auto p-6 space-y-32 w-[50%]">
        <About />
        <Experience />
        <Projects />
      </section>
    </main>
  );
}
