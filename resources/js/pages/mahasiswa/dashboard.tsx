import { Head, router } from '@inertiajs/react';
import { dashboard, logout } from '@/routes';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Mahasiswa" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">

                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold">
                        Dashboard Mahasiswa
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Kelola dan lengkapi profil mahasiswa kamu.
                    </p>
                </div>

                {/* Welcome */}
                <div className="rounded-xl border bg-card p-6">
                    <h2 className="text-xl font-semibold">
                        Selamat datang 👋
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Lengkapi profil kamu agar data akademik dan pribadi
                        tersimpan dengan baik.
                    </p>
                </div>

                {/* Status Profil */}
                <div className="grid gap-4 md:grid-cols-2">

                    <div className="rounded-xl border bg-card p-6">
                        <p className="text-sm text-muted-foreground">
                            Kelengkapan Profil
                        </p>

                        <div className="mt-4">
                            <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>60%</span>
                            </div>

                            <div className="mt-2 h-2 rounded-full bg-muted">
                                <div
                                    className="h-2 rounded-full bg-primary"
                                    style={{ width: '60%' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                        <p className="text-sm text-muted-foreground">
                            Status Profil
                        </p>

                        <p className="mt-3 font-semibold text-orange-500">
                            Belum Lengkap
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Masih ada beberapa data yang perlu dilengkapi.
                        </p>
                    </div>

                </div>

                {/* Profil */}
                <div className="rounded-xl border bg-card p-6">

                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-semibold">
                                Profil Saya
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Informasi pribadi dan akademik kamu.
                            </p>
                        </div>

                        <button
                            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                        >
                            Lengkapi Profil
                        </button>
                    </div>

                </div>

                {/* Logout */}
                <button
                    onClick={() => router.post(logout())}
                    className="w-fit rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                    Logout
                </button>

            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};