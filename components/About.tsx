// --- About ---
const About = () => (
	<section id="about" className="py-20 px-4 bg-base-200">
		<div className="container mx-auto max-w-4xl text-center">
			<h2 className="text-4xl font-bold mb-4 animate-on-scroll">Tentang Saya</h2>
			<div className="divider mb-8 animate-on-scroll"></div>
			<p className="text-lg leading-relaxed mb-8 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
				Saya adalah seorang <b>Fullstack Web Developer</b> dengan spesialisasi di <b>frontend</b> (React, Next.js, TypeScript)
				dan <b>backend</b> (Laravel, Node.js, REST API).  
				Saya menggabungkan keahlian membangun antarmuka pengguna yang elegan dengan logika server yang efisien,
				menghasilkan aplikasi yang cepat, aman, dan mudah di-scale.  
				Berpengalaman dari tahap perencanaan, pengembangan, hingga deployment.
			</p>
			<h3 className="text-2xl font-bold mb-4 animate-on-scroll" style={{ transitionDelay: '200ms' }}>Keahlian Saya</h3>
			<div className="flex justify-center flex-wrap gap-2 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
				{[
					"React", "Next.js", "TypeScript", "JavaScript", "Laravel", "PHP",
					"Node.js", "MySQL", "REST API", "Tailwind CSS", "Vite", "Figma"
				].map(skill => (
					<div key={skill} className="badge badge-primary badge-lg">{skill}</div>
				))}
			</div>
		</div>
	</section>
);

export default About;