import { Project } from "@/types";
import antarAje from "@/images/antar-aje.png";
import laundrySyifa from "@/images/laundry.png";
import tulleCapture from "@/images/tulle-capture.png";
import bsmLedger from "@/images/bsm-ledger.png";
import qrCattering from "@/images/qr-cattering.png";
import desa from "@/images/desa.png";
import tiktok from "@/images/tiktok.png";


export const projects: Project[] = [
	{
		title: "Aplikasi Web Laundry",
		description: "Aplikasi Laundry untuk management pelanggan dan penyucian secara target",
		imageUrl: laundrySyifa,
		liveUrl: "https://syifa-laundry.project-web.my.id",
		sourceUrl: "https://github.com/ANGEOM21/laundry-syifa",
		tags: ["Javascript", "php", "Bootstrap", "Jquery"],
	},
	{
		title: "Aplikasi Pengantaran Barang",
		description: "Sistem Pengantaran paket barang dan manajemen staf",
		imageUrl: antarAje,
		liveUrl: "https://antar-aje.my.id/login",
		sourceUrl: "https://github.com/ANGEOM21/antar-aje",
		tags: ["php", "laravel", "livewire", "Bootstrap", ],
	},
	{
		title: "Tulle Capture",
		description: "Aplikasi boking videpgrapher dan weeding.",
		imageUrl: tulleCapture,
		liveUrl: "https://capturing-moments.vercel.app/",
		sourceUrl: "https://github.com/ANGEOM21/capturing-moments",
		tags: ["React Vite", "Tailwind", "Redux", "Vercel"],
	},
	{
		title: "Bsm Ledger",
		description: "Aplikasi manajemen keuangan untuk PT. BSM (Berkah Sayidah Mandiri) dengan fitur ledger, transaksi, dan laporan.",
		imageUrl: bsmLedger,
		liveUrl: "https://bsm-ledger.project-web.my.id/dashboard",
		sourceUrl: "https://github.com/ANGEOM21/bsm-ledger",
		tags: ["Laravel", "php", "Tailwind", "DaisyUI", "MySQL", "Livewire"],
	},
	{
		title: "Qr Scanner Cattering",
		description: "Aplikasi pemesanan makanan secara online dengan fitur scan QR untuk mengambil pesanan.",
		imageUrl: qrCattering,
		liveUrl: "https://qr-catering.my.id/dashboard",
		sourceUrl: "https://github.com/ANGEOM21/qr-cattering",
		tags: ["Laravel", "php", "Tailwind", "MySQL", "Filament"],
	},
	{
		title: "Aplikasi Desa",
		description: "Aplikasi untuk mempermudah pengelolaan desa dan penduduk. Fitur meliputi manajemen penduduk, surat menyurat, dan informasi desa.",
		imageUrl: desa,
		liveUrl: "https://desa-pasirkamuning.kkn-ubp-2025.my.id/",
		sourceUrl: "https://github.com/ANGEOM21/desa-paskam",
		tags: ["Laravel", "php", "Tailwind", "MySQL", "Livewire", "DaisyUI"],
	},
	{
		title: "Tiktok Downloader",
		description: "Aplikasi untuk mengunduh video TikTok tanpa watermark dengan mudah.",
		imageUrl: tiktok,
		liveUrl: "https://tiktok-snap.project-web.my.id/",
		sourceUrl: "https://github.com/ANGEOM21/tik-snap-scrap",
		tags: ["ExpressJs", "NodeJs", "React", "Tailwind", "DasyUi", "typescript", "Vite"],
	},
];