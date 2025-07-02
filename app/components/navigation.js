// 'use client';
// export default function Navigation() {
//   return (
//     <aside className="flex flex-col justify-between">
//       <a href="#about">about</a>
//       <a href="#experience">experience</a>

//       <a href="#projects">projects</a>
//     </aside>
//   );
// }

'use client';
import React from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export default function Navigation({ activeId }) {
  return (
    <nav className="flex flex-col space-y-4">
      {links.map(({ id, label }) => {
        const isActive = id === activeId;
        return (
          <a key={id} href={`#${id}`} className="group flex items-center overflow-hidden">
            {/* Line */}
            <span
              className={`block h-px bg-current transition-all duration-300 ease-out ${
                isActive ? 'w-16' : 'w-8'
              } group-hover:w-16`}
            />

            {/* Text */}
            <span
              className={`transition-all duration-300 ease-out ${
                isActive ? 'ml-4 font-semibold' : 'ml-2'
              } group-hover:ml-4`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
