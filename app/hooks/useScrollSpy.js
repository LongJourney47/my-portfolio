import { useState, useEffect } from 'react';

export function useScrollSpy(ids, rootMargin = '-50% 0px -50% 0px') {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!ids || ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
