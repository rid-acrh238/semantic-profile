import { Head, router } from '@inertiajs/react';
import { dashboard, logout } from '@/routes';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Admin" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Dashboard Admin
                        </h1>

                        <p className="text-sm text-muted-foreground">
                            Kelola data dan profil mahasiswa.
                        </p>
                    </div>

                    {/* <button
                        onClick={() => router.post(logout())}
                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                    >
                        Logout
                    </button> */}
                </div>

                {/* Statistik */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground">
                            Total Mahasiswa
                        </p>

                        <p className="mt-2 text-3xl font-bold">
                            0
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground">
                            Profil Lengkap
                        </p>

                        <p className="mt-2 text-3xl font-bold text-green-600">
                            0
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground">
                            Belum Lengkap
                        </p>

                        <p className="mt-2 text-3xl font-bold text-orange-500">
                            0
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground">
                            Administrator
                        </p>

                        <p className="mt-2 text-3xl font-bold">
                            1
                        </p>
                    </div>

                </div>

                

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