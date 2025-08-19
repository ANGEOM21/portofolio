// --- Contact ---
const Contact = () => (
  <section id="contact" className="py-20 px-4 bg-base-200">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-4xl font-bold mb-4 animate-on-scroll">Hubungi Saya</h2>
      <div className="divider mb-8 animate-on-scroll"></div>
      <p className="text-lg mb-8 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
        Terbuka untuk proyek, kolaborasi, atau diskusi teknologi. Silakan hubungi saya melalui email atau media sosial.
      </p>
      <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
        <a href="mailto:idrisanjounghan313@gmail.com" className="btn btn-primary btn-lg">Kirim Email</a>
      </div>
    </div>
  </section>
);


export default Contact;