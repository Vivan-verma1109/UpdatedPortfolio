import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionIds.map((id) => {
        const element = document.querySelector(id);
        return { id, offset: element?.offsetTop || 0 };
      });

      const current = offsets.find((section) => window.scrollY >= section.offset - 200);
      setActiveSection(current?.id || sectionIds[0]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}