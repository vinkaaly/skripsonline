"use client";
import { useState, useEffect } from "react";

const chapters = [
  { id: "bab1", title: "BAB 1 - Pendahuluan", content: "Pendahuluan berisi latar belakang penelitian, rumusan masalah, tujuan penelitian, serta manfaat penelitian. Latar belakang menjelaskan alasan pentingnya penelitian ini dilakukan, sedangkan rumusan masalah merinci pertanyaan utama yang ingin dijawab. Tujuan penelitian memberikan gambaran mengenai hasil yang ingin dicapai, dan manfaat penelitian menjelaskan kontribusi penelitian ini dalam bidang ilmu terkait." },
  { id: "bab2", title: "BAB 2 - Kajian Pustaka", content: "Kajian pustaka membahas teori-teori yang relevan dengan penelitian, termasuk penelitian terdahulu yang mendukung. Bagian ini menguraikan konsep-konsep utama yang menjadi dasar penelitian, serta menghubungkan penelitian ini dengan studi yang telah dilakukan sebelumnya. Selain itu, teori yang dikaji membantu dalam memahami variabel yang diteliti serta membangun kerangka berpikir yang sistematis." },
  { id: "bab3", title: "BAB 3 - Metodologi Penelitian", content: "Metodologi penelitian menjelaskan metode penelitian yang digunakan, teknik pengumpulan data, serta teknik analisis data. Metode penelitian meliputi jenis penelitian (kualitatif atau kuantitatif), populasi dan sampel yang digunakan, serta pendekatan yang diterapkan. Teknik pengumpulan data mencakup wawancara, observasi, atau survei, sedangkan teknik analisis data menjelaskan cara mengolah data agar dapat menjawab rumusan masalah yang telah disusun." },
  { id: "bab4", title: "BAB 4 - Analisis Data", content: "Analisis data menyajikan hasil penelitian yang diperoleh serta pembahasan terhadap hasil yang telah dianalisis. Bagian ini mencakup deskripsi data, uji validitas dan reliabilitas, serta interpretasi hasil penelitian. Hasil yang diperoleh dibandingkan dengan teori yang telah dikaji pada bab sebelumnya untuk melihat sejauh mana kesesuaian temuan dengan teori yang ada. Pembahasan ini juga mengidentifikasi faktor-faktor yang memengaruhi hasil penelitian." },
  { id: "bab5", title: "BAB 5 - Kesimpulan & Saran", content: "Bab ini berisi kesimpulan dari penelitian yang telah dilakukan serta saran untuk penelitian selanjutnya. Kesimpulan merangkum hasil utama yang diperoleh dari penelitian ini, sedangkan saran diberikan kepada pihak yang berkepentingan agar dapat mengaplikasikan hasil penelitian atau melanjutkan studi lebih lanjut dalam topik yang terkait. Selain itu, bagian ini juga memberikan rekomendasi bagi praktisi dan akademisi untuk meningkatkan pemahaman terhadap isu yang diteliti." },
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
              <p>{chapter.content}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
