import { Sertifikasi } from "@/types";
import honeypot from "@/images/sertifikat/honeypot.jpg";
import juara from "@/images/sertifikat/juara-lomba.jpg";
import jwd from "@/images/sertifikat/jwd.jpg";


export const sertifikasi: Sertifikasi[] = [
	{
		title: "Honeypot Software Engineering",
		description: "Seminar Software Engineering dari Honeypot",
		imageUrl: honeypot,
	},
	{
		title: "Juara Lomba LKTIN (Lomba Karya Tulis Ilmiah Nasional)",
		description: "Juara 2 Lomba Karya Tulis Ilmiah Nasional di Universitas Brawijaya",
		imageUrl: juara,
	},
	{
		title: "JWD (Junior Web Developer)",
		description: "Kursus Junior Web Developer dari BPPTIK ( Balai Pelatihan dan Pengembangan Teknologi Informasi dan Komunikasi)",
		imageUrl: jwd,
	},
];