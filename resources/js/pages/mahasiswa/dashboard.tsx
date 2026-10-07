import { Head, Link } from '@inertiajs/react';
import {
    Activity,
    ArrowRight,
    Bell,
    BookOpen,
    CheckCircle2,
    GraduationCap,
    Lightbulb,
    PencilLine,
    UserRound,
} from 'lucide-react';

export default function MahasiswaDashboard() {
    /*
    |--------------------------------------------------------------------------
    | DATA SEMENTARA
    |--------------------------------------------------------------------------
    |
    | Nanti bagian ini akan diganti dengan data dari controller/database.
    |
    */

    const mahasiswa = {
        nama: 'Achmad Ridwan',
        nim: '202301001',
        programStudi: 'Informatika',
        semester: 7,
        progress: 72,
        lastUpdated: '2 Oktober 2026',
    };

    const profileItems = [
        {
            title: 'Data Diri',
            description: 'Identitas dan informasi dasar',
            icon: UserRound,
            complete: true,
        },
        {
            title: 'Pendidikan',
            description: 'Informasi akademik mahasiswa',
            icon: GraduationCap,
            complete: true,
        },
        {
            title: 'Kompetensi',
            description: 'Keahlian dan kemampuan',
            icon: BookOpen,
            complete: false,
        },
        {
            title: 'Minat',
            description: 'Bidang yang diminati',
            icon: Lightbulb,
            complete: false,
        },
    ];

    return (
        <>
            <Head title="Dashboard Mahasiswa" />

            <div className="min-h-screen bg-slate-50 dark:bg-background">
                <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

                    {/* ==================================================
                        HEADER
                    ================================================== */}

                    <header className="mb-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                    Dashboard Mahasiswa
                                </p>

                                <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    Selamat datang, {mahasiswa.nama} 👋
                                </h1>

                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                    Kelola profil dan informasi akademikmu
                                    melalui Semantic Profile.
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-card dark:text-slate-200 dark:hover:bg-slate-800"
                            >
                                <Bell className="size-4" />
                                Notifikasi
                            </Link>
                        </div>
                    </header>

                    {/* ==================================================
                        PROFILE COMPLETION
                    ================================================== */}

                    <section className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-card">
                        <div className="p-6 sm:p-8">
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                                Kelengkapan Profil
                                            </p>

                                            <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                                                Lengkapi informasi profilmu agar
                                                sistem dapat memahami kompetensi,
                                                minat, dan potensi dengan lebih baik.
                                            </p>
                                        </div>

                                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                            {mahasiswa.progress}%
                                        </span>
                                    </div>

                                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                        <div
                                            className="h-full rounded-full bg-blue-600 transition-all duration-500"
                                            style={{
                                                width: `${mahasiswa.progress}%`,
                                            }}
                                        />
                                    </div>

                                    <div className="mt-2 flex justify-between text-xs text-slate-400">
                                        <span>Profil belum lengkap</span>
                                        <span>100%</span>
                                    </div>
                                </div>

                                <Link
                                    href="#"
                                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    <PencilLine className="size-4" />
                                    Lengkapi Profil
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ==================================================
                        SUMMARY CARDS
                    ================================================== */}

                    <section className="mb-8">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Profil Saya
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Ringkasan informasi profilmu.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {profileItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-card"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                                <Icon className="size-5" />
                                            </div>

                                            {item.complete ? (
                                                <CheckCircle2 className="size-5 text-green-500" />
                                            ) : (
                                                <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                                                    Belum lengkap
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* ==================================================
                        MAIN INFORMATION
                    ================================================== */}

                    <div className="grid gap-6 lg:grid-cols-3">

                        {/* ------------------------------------------------
                            DATA MAHASISWA
                        ------------------------------------------------ */}

                        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-card lg:col-span-2">
                            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                                <div>
                                    <h2 className="font-semibold text-slate-900 dark:text-white">
                                        Informasi Mahasiswa
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        Informasi akademik yang terdaftar.
                                    </p>
                                </div>

                                <Link
                                    href="#"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                                >
                                    Lihat profil
                                </Link>
                            </div>

                            <div className="grid gap-6 p-6 sm:grid-cols-2">
                                <InfoItem
                                    label="Nama Lengkap"
                                    value={mahasiswa.nama}
                                />

                                <InfoItem
                                    label="NIM"
                                    value={mahasiswa.nim}
                                />

                                <InfoItem
                                    label="Program Studi"
                                    value={mahasiswa.programStudi}
                                />

                                <InfoItem
                                    label="Semester"
                                    value={`Semester ${mahasiswa.semester}`}
                                />
                            </div>
                        </section>

                        {/* ------------------------------------------------
                            AKTIVITAS
                        ------------------------------------------------ */}

                        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-card">
                            <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                                <div className="flex items-center gap-2">
                                    <Activity className="size-4 text-blue-600 dark:text-blue-400" />

                                    <h2 className="font-semibold text-slate-900 dark:text-white">
                                        Aktivitas
                                    </h2>
                                </div>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Aktivitas terbaru.
                                </p>
                            </div>

                            <div className="p-6">
                                <div className="flex gap-3">
                                    <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400">
                                        <CheckCircle2 className="size-4" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Profil diperbarui
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                            {mahasiswa.lastUpdated}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* ==================================================
                        REMINDER
                    ================================================== */}

                    <section className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
                        <div className="flex gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                                <Lightbulb className="size-5" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-blue-900 dark:text-blue-200">
                                    Lengkapi profilmu
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-blue-700 dark:text-blue-300">
                                    Beberapa informasi seperti kompetensi dan
                                    minat masih belum lengkap. Lengkapi profil
                                    agar data yang tersedia untuk analisis
                                    menjadi lebih optimal.
                                </p>

                                <Link
                                    href="#"
                                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                                >
                                    Lengkapi sekarang
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ==================================================
                        FOOTER
                    ================================================== */}

                    <footer className="mt-8 border-t border-slate-200 pt-5 text-center text-xs text-slate-400 dark:border-slate-800">
                        Semantic Profile · STIKOM El Rahma
                    </footer>
                </main>
            </div>
        </>
    );
}

/* ================================================================
   INFO ITEM
================================================================ */

function InfoItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                {value}
            </p>
        </div>
    );
}