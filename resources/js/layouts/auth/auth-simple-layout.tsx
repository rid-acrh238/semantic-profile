import { Link } from '@inertiajs/react';
import type { CSSProperties } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="min-h-svh bg-background lg:grid lg:grid-cols-2">
            {/* ============================================================
                PANEL KIRI
            ============================================================ */}
            <div className="relative hidden overflow-hidden bg-[#061b3a] lg:flex">
                {/* Background campus */}
                <img
                    src="/images/campus.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-10"
                />

                {/* Corporate gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#04152f] via-[#082b5c] to-[#064ea3]" />

                {/* Animated grid */}
                <div className="semantic-grid absolute inset-0 opacity-70" />

                {/* Main glow */}
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Scan line */}
                <div className="semantic-scan absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

                {/* Network background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Network lines */}
                    <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 800 900"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        <path
                            d="M120 220 L330 360 L570 230 L700 390"
                            stroke="rgba(96,165,250,0.35)"
                            strokeWidth="1"
                            className="semantic-line"
                        />

                        <path
                            d="M150 600 L330 360 L620 610"
                            stroke="rgba(147,197,253,0.3)"
                            strokeWidth="1"
                            className="semantic-line"
                        />

                        <path
                            d="M330 360 L330 700"
                            stroke="rgba(96,165,250,0.3)"
                            strokeWidth="1"
                            className="semantic-line"
                        />

                        <path
                            d="M570 230 L570 500"
                            stroke="rgba(96,165,250,0.25)"
                            strokeWidth="1"
                            className="semantic-line"
                        />
                    </svg>

                    {/* Network nodes */}
                    <NetworkNode
                        className="left-[14%] top-[24%]"
                        delay="0s"
                    />

                    <NetworkNode
                        className="left-[40%] top-[39%]"
                        delay="1s"
                    />

                    <NetworkNode
                        className="left-[71%] top-[25%]"
                        delay="0.5s"
                    />

                    <NetworkNode
                        className="left-[87%] top-[43%]"
                        delay="1.5s"
                    />

                    <NetworkNode
                        className="left-[18%] top-[67%]"
                        delay="2s"
                    />

                    <NetworkNode
                        className="left-[40%] top-[78%]"
                        delay="1s"
                    />

                    <NetworkNode
                        className="left-[77%] top-[68%]"
                        delay="2.5s"
                    />
                </div>

                {/* Left panel content */}
                <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
                    {/* Branding */}
                    <div>
                        <Link
                            href={home()}
                            className="inline-flex items-center gap-4"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-md">
                                <AppLogoIcon className="h-full w-full object-contain" />
                            </div>

                            <div className="text-white">
                                <p className="text-lg font-bold tracking-wide">
                                    STIKOM EL RAHMA
                                </p>

                                <p className="text-xs text-blue-200/70">
                                    SEKOLAH TINGGI ILMU KOMPUTER
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Main information */}
                    <div className="max-w-xl">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="h-px w-12 bg-blue-300" />

                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">
                                Student Intelligence System
                            </span>
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight text-white xl:text-6xl">
                            Semantic
                            <span className="block text-blue-300">
                                Profile
                            </span>
                        </h1>

                        <p className="mt-5 text-xl font-medium text-blue-100">
                            Platform Profil dan Analisis Semantik Mahasiswa
                        </p>

                        <p className="mt-5 max-w-lg leading-7 text-blue-100/70">
                            Menghubungkan data, kompetensi, minat, dan potensi
                            mahasiswa untuk mendukung pengembangan akademik
                            yang lebih baik.
                        </p>

                        {/* Feature cards */}
                        <div className="mt-10 grid grid-cols-2 gap-3">
                            <Feature
                                icon="◉"
                                title="Profil Mahasiswa"
                                description="Data terstruktur"
                            />

                            <Feature
                                icon="◈"
                                title="Analisis Semantik"
                                description="Pemahaman kompetensi"
                            />

                            <Feature
                                icon="◇"
                                title="Data Terintegrasi"
                                description="Informasi terhubung"
                            />

                            <Feature
                                icon="↗"
                                title="Dukungan Keputusan"
                                description="Insight akademik"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-blue-200/50">
                        <span>SEMANTIC PROFILE</span>

                        <span className="font-mono">
                            SYSTEM ONLINE
                            <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                        </span>
                    </div>
                </div>
            </div>

            {/* ============================================================
                PANEL KANAN
            ============================================================ */}
            <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-slate-50 px-6 py-10 dark:bg-background sm:px-10">
                {/* Mini network background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <MiniNetwork
                        className="left-[8%] top-[10%]"
                        size={85}
                        speed="19s"
                        morph="11s"
                        delay="0s"
                    />

                    <MiniNetwork
                        className="right-[8%] top-[14%]"
                        size={70}
                        speed="23s"
                        morph="14s"
                        delay="2s"
                    />

                    <MiniNetwork
                        className="left-[5%] top-[38%]"
                        size={60}
                        speed="17s"
                        morph="9s"
                        delay="4s"
                    />

                    <MiniNetwork
                        className="right-[6%] top-[42%]"
                        size={90}
                        speed="25s"
                        morph="13s"
                        delay="1s"
                    />

                    <MiniNetwork
                        className="left-[12%] bottom-[13%]"
                        size={75}
                        speed="21s"
                        morph="10s"
                        delay="5s"
                    />

                    <MiniNetwork
                        className="right-[13%] bottom-[10%]"
                        size={65}
                        speed="18s"
                        morph="15s"
                        delay="3s"
                    />

                    {/* Center glow */}
                    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-3xl" />
                </div>

                {/* Right panel content */}
                <div className="relative z-10 w-full max-w-md">
                    {/* Mobile logo */}
                    <div className="mb-8 flex flex-col items-center lg:hidden">
                        <div className="mb-3 flex h-20 w-20 items-center justify-center">
                            <AppLogoIcon className="h-20 w-20 object-contain" />
                        </div>

                        <p className="text-lg font-bold">
                            Semantic Profile
                        </p>

                        <p className="text-sm text-muted-foreground">
                            STIKOM El Rahma
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {title}
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            {description}
                        </p>
                    </div>

                    {/* Form card */}
                    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
                        {children}
                    </div>

                    {/* Footer */}
                    <p className="mt-6 text-center text-xs text-muted-foreground">
                        Semantic Profile · STIKOM El Rahma
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ================================================================
   FEATURE CARD
================================================================ */

function Feature({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10">
            <div className="mb-3 text-2xl">{icon}</div>

            <p className="font-semibold text-white">
                {title}
            </p>

            <p className="mt-1 text-xs leading-5 text-blue-100/70">
                {description}
            </p>
        </div>
    );
}

/* ================================================================
   LEFT NETWORK NODE
================================================================ */

function NetworkNode({
    className = '',
    delay = '0s',
}: {
    className?: string;
    delay?: string;
}) {
    return (
        <div
            className={`semantic-network-node absolute h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)] ${className}`}
            style={{ animationDelay: delay }}
        />
    );
}

/* ================================================================
   RIGHT MINI NETWORK
================================================================ */

function MiniNetwork({
    className = '',
    size = 70,
    speed = '20s',
    morph = '12s',
    delay = '0s',
}: {
    className?: string;
    size?: number;
    speed?: string;
    morph?: string;
    delay?: string;
}) {
    const style = {
        '--network-speed': speed,
        '--morph-speed': morph,
        animationDelay: delay,
    } as CSSProperties;

    return (
        <svg
            className={`mini-network absolute text-black/40 ${className}`}
            width={size}
            height={size}
            viewBox="0 0 70 70"
            fill="none"
            style={style}
        >
            {/* Main geometry */}
            <path
                d="M10 25 L35 5 L60 25 L45 55 L15 50 Z"
                stroke="currentColor"
                strokeWidth="0.8"
                className="mini-network-path"
            />

            {/* Internal connections */}
            <path
                d="
                    M10 25 L45 55
                    M35 5 L45 55
                    M60 25 L15 50
                "
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.5"
            />

            {/* Nodes */}
            <circle
                cx="10"
                cy="25"
                r="2"
                fill="currentColor"
                className="mini-network-node"
            />

            <circle
                cx="35"
                cy="5"
                r="2"
                fill="currentColor"
                className="mini-network-node"
            />

            <circle
                cx="60"
                cy="25"
                r="2"
                fill="currentColor"
                className="mini-network-node"
            />

            <circle
                cx="45"
                cy="55"
                r="2"
                fill="currentColor"
                className="mini-network-node"
            />

            <circle
                cx="15"
                cy="50"
                r="2"
                fill="currentColor"
                className="mini-network-node"
            />
        </svg>
    );
}