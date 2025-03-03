"use client";
import { useState, useEffect } from "react";

const chapters = [
  { id: "bab1", title: "BAB 1 - Pendahuluan" },
  { id: "bab2", title: "BAB 2 - Kajian Pustaka" },
  { id: "bab3", title: "BAB 3 - Metodologi Penelitian" },
  { id: "bab4", title: "BAB 4 - Analisis Data" },
  { id: "bab5", title: "BAB 5 - Kesimpulan & Saran" },
];

export default function SkripsiPage() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    const handleScroll = () => {
      for (const chapter of chapters) {
        const element = document.getElementById(chapter.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top >= 0 && top <= 150) {
            setActiveChapter(chapter.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-purple-600 text-white p-4 text-center font-bold z-50 shadow-md">
        Skripsi Online
      </nav>


      {/* Isi Skripsi */}
      <div className="pt-[100px] px-6 max-w-3xl mx-auto">
        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 sticky top-[50px] bg-white py-2 px-4 shadow-md z-30">
              {chapter.title}
            </h2>
            <div className="text-gray-700 text-justify space-y-4">
              {[...Array(10)].map((_, i) => (
                <p key={i}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum, nulla in tincidunt placerat, est nunc aliquet arcu, ut consequat sapien metus vel lacus. 
                  Integer tincidunt euismod lectus, sed tincidunt justo elementum eu. Mauris vitae risus ac metus scelerisque aliquet. 
                  Curabitur vel ligula ut nunc congue scelerisque. Duis euismod lacus id libero convallis, id malesuada justo pharetra. 
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}