import { useState } from 'react';
import { sertifikasi } from "@/constant/sertifikasi";
import { Sertifikasi as Sertifikat } from "@/types";

interface SertifikasiCardProps {
  sertifikat: Sertifikat;
  delay: number;
}

const SertifikasiCard: React.FC<SertifikasiCardProps> = ({ sertifikat, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="card w-full bg-base-100 shxadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll cursor-pointer" 
        style={{ transitionDelay: `${delay}ms` }}
        onClick={() => setIsOpen(true)}
      >
        <figure>
          <img 
            src={sertifikat.imageUrl} 
            alt={sertifikat.title} 
            className="aspect-video object-cover" 
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{sertifikat.title}</h2>
          <p>{sertifikat.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-ghost">Lihat Detail</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog className="modal" open={isOpen}>
        <div className="modal-box max-w-5xl">
          <h3 className="font-bold text-lg">{sertifikat.title}</h3>
          <img 
            src={sertifikat.imageUrl} 
            alt={sertifikat.title} 
            className="w-full h-auto mt-4 rounded-lg"
          />
          <div className="modal-action">
            <button className="btn" onClick={() => setIsOpen(false)}>Tutup</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

const Sertifikasi = () => (
  <section id="sertifikasi" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll">Sertifikasi</h2>
      <div className="divider mb-12 animate-on-scroll"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sertifikasi.map((p, i) => <SertifikasiCard key={p.title} sertifikat={p} delay={i * 100} />)}
      </div>
    </div>
  </section>
);

export default Sertifikasi;