import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    GraduationCap,
    Network,
    Sparkles,
    UserRound,
} from 'lucide-react';

import { login, register } from '@/routes';

export default function Welcome() {
    return (
        <>
            <Head title="Semantic Profile" />

            <div className="min-h-screen overflow-hidden bg-[#061b3a] text-white">
                {/* =====================================================
                    BACKGROUND
                ===================================================== */}

                <div className="pointer-events-none fixed inset-0">
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#04152f] via-[#082b5c] to-[#064ea3]" />

                    {/* Campus image */}
                    <img
                        src="/images/campus.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
                    />

                    {/* Grid */}
                    <div className="semantic-grid absolute inset-0 opacity-50" />

                    {/* Glow */}
                    <div className="absolute left-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-3xl" />
                </div>

                {/* =====================================================
                    NAVBAR
                ===================================================== */}

                <header className="relative z-20 border-b border-white/10">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                        {/* Brand */}
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-md">
                                <img
                                    src="/img/logo.png"
                                    alt="STIKOM El Rahma"
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div>
                                <p className="font-bold tracking-wide">
                                    SEMANTIC PROFILE
                                </p>

                                <p className="text-[10px] tracking-widest text-blue-200/60">
                                    STIKOM EL RAHMA
                                </p>
                            </div>
                        </Link>

                        {/* Navigation */}
                        <nav className="flex items-center gap-3">
                            <Link
                                href={login()}
                                className="rounded-lg px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-white/10"
                            >
                                Masuk
                            </Link>

                            <Link
                                href={register()}
                                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#082b5c] shadow-lg transition hover:bg-blue-50"
                            >
                                Daftar
                            </Link>
                        </nav>
                    </div>
                </header>

                {/* =====================================================
                    HERO
                ===================================================== */}

                <main className="relative z-10">
                    <section className="mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

                        {/* Left */}
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 backdrop-blur-sm">
                                <Sparkles className="size-4 text-blue-300" />

                                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-200">
                                    Student Intelligence System
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                                Kenali Potensi
                                <span className="block text-blue-300">
                                    Mahasiswa Lebih Dalam.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100/70">
                                Semantic Profile membantu mengelola,
                                menghubungkan, dan memahami informasi mahasiswa
                                berdasarkan data, kompetensi, minat, dan
                                potensi.
                            </p>

                            {/* CTA */}
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={register()}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#082b5c] shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
                                >
                                    Mulai Sekarang
                                    <ArrowRight className="size-4" />
                                </Link>

                                <Link
                                    href={login()}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                                >
                                    Sudah punya akun?
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>

                            {/* Trust */}
                            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-blue-200/50">
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="size-4 text-green-400" />
                                    Data mahasiswa terstruktur
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="size-4 text-green-400" />
                                    Profil mandiri
                                </span>
                            </div>
                        </div>

                        {/* Right visual */}
                        <div className="relative hidden lg:block">
                            <ProfileVisualization />
                        </div>
                    </section>

                    {/* =================================================
                        FEATURES
                    ================================================= */}

                    <section className="border-t border-white/10 bg-[#04152f]/70">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                            <div className="max-w-2xl">
                                <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300">
                                    Platform
                                </p>

                                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Satu profil untuk memahami mahasiswa.
                                </h2>

                                <p className="mt-4 leading-7 text-blue-100/60">
                                    Informasi mahasiswa tidak berhenti sebagai
                                    data administratif. Semantic Profile
                                    menghubungkan berbagai informasi menjadi
                                    gambaran profil yang lebih bermakna.
                                </p>
                            </div>

                            <div className="mt-10 grid gap-4 md:grid-cols-3">
                                <FeatureCard
                                    icon={UserRound}
                                    title="Profil Mahasiswa"
                                    description="Kelola informasi pribadi dan akademik dalam satu profil terstruktur."
                                />

                                <FeatureCard
                                    icon={BrainCircuit}
                                    title="Kompetensi & Minat"
                                    description="Catat kemampuan, bidang yang diminati, pengalaman, dan potensi mahasiswa."
                                />

                                <FeatureCard
                                    icon={Network}
                                    title="Analisis Semantik"
                                    description="Hubungkan informasi profil untuk menghasilkan pemahaman yang lebih kontekstual."
                                />
                            </div>
                        </div>
                    </section>

                    {/* =================================================
                        FINAL CTA
                    ================================================= */}

                    <section className="border-t border-white/10">
                        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
                            <GraduationCap className="mx-auto size-10 text-blue-300" />

                            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                                Bangun profilmu.
                                <span className="text-blue-300">
                                    {' '}Kenali potensimu.
                                </span>
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100/60">
                                Lengkapi profil mahasiswa dan biarkan data
                                membantu menggambarkan kompetensi serta
                                minatmu.
                            </p>

                            <Link
                                href={register()}
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#082b5c] transition hover:bg-blue-50"
                            >
                                Buat Profil
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </section>
                </main>

                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <footer className="relative z-10 border-t border-white/10">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-blue-200/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                        <span>
                            © 2026 Semantic Profile · STIKOM El Rahma
                        </span>

                        <span className="font-mono">
                            SYSTEM ONLINE
                            <span className="ml-2 inline-block size-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                        </span>
                    </div>
                </footer>
            </div>
        </>
    );
}

/* ================================================================
   FEATURE CARD
================================================================ */

function FeatureCard({
    icon: Icon,
    title,
    description,
}: {
    icon: typeof UserRound;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.07]">
            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                <Icon className="size-5" />
            </div>

            <h3 className="mt-5 font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100/50">
                {description}
            </p>
        </div>
    );
}

/* ================================================================
   PROFILE VISUALIZATION
================================================================ */

function ProfileVisualization() {
    return (
        <div className="relative mx-auto aspect-square max-w-[520px]">
            {/* Outer rings */}
            <div className="absolute inset-[8%] rounded-full border border-blue-300/10" />
            <div className="absolute inset-[18%] rounded-full border border-blue-300/10" />
            <div className="absolute inset-[29%] rounded-full border border-blue-300/10" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />

            {/* Connection lines */}
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 500"
                fill="none"
            >
                <path
                    d="M250 250 L115 145 L85 285 L150 395 L360 380 L420 220 L365 105 Z"
                    stroke="rgba(147,197,253,0.25)"
                    strokeWidth="1"
                />

                <path
                    d="M250 250 L115 145 M250 250 L85 285 M250 250 L150 395 M250 250 L360 380 M250 250 L420 220 M250 250 L365 105"
                    stroke="rgba(147,197,253,0.18)"
                    strokeWidth="1"
                />

                <circle
                    cx="250"
                    cy="250"
                    r="58"
                    fill="rgba(59,130,246,0.08)"
                    stroke="rgba(147,197,253,0.35)"
                />

                <circle
                    cx="115"
                    cy="145"
                    r="5"
                    fill="#93c5fd"
                />

                <circle
                    cx="85"
                    cy="285"
                    r="4"
                    fill="#60a5fa"
                />

                <circle
                    cx="150"
                    cy="395"
                    r="5"
                    fill="#93c5fd"
                />

                <circle
                    cx="360"
                    cy="380"
                    r="4"
                    fill="#60a5fa"
                />

                <circle
                    cx="420"
                    cy="220"
                    r="5"
                    fill="#93c5fd"
                />

                <circle
                    cx="365"
                    cy="105"
                    r="4"
                    fill="#60a5fa"
                />
            </svg>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-300/20 bg-[#082b5c]/80 shadow-[0_0_50px_rgba(59,130,246,0.15)] backdrop-blur-xl">
                <BrainCircuit className="size-8 text-blue-300" />

                <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-blue-200/60">
                    Semantic
                </span>
            </div>

            {/* Labels */}
            <VisualLabel
                className="left-[4%] top-[24%]"
                label="Profil"
            />

            <VisualLabel
                className="left-[13%] bottom-[14%]"
                label="Minat"
            />

            <VisualLabel
                className="right-[2%] top-[39%]"
                label="Kompetensi"
            />

            <VisualLabel
                className="right-[12%] top-[11%]"
                label="Potensi"
            />

            <VisualLabel
                className="right-[15%] bottom-[13%]"
                label="Akademik"
            />
        </div>
    );
}

function VisualLabel({
    className,
    label,
}: {
    className: string;
    label: string;
}) {
    return (
        <div
            className={`absolute rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] text-blue-200/70 backdrop-blur-md ${className}`}
        >
            {label}
        </div>
    );
}