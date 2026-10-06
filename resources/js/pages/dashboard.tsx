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

                    <button
                        onClick={() => router.post(logout())}
                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                    >
                        Logout
                    </button>
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

                {/* Data Mahasiswa */}
                <div className="rounded-xl border bg-card">

                    <div className="flex items-center justify-between border-b p-5">
                        <div>
                            <h2 className="font-semibold">
                                Data Mahasiswa
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Daftar mahasiswa yang terdaftar dalam sistem.
                            </p>
                        </div>

                        <button
                            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                        >
                            Lihat Semua
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">

                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-5 py-3 text-left">
                                        Nama
                                    </th>

                                    <th className="px-5 py-3 text-left">
                                        Email
                                    </th>

                                    <th className="px-5 py-3 text-left">
                                        Status Profil
                                    </th>

                                    <th className="px-5 py-3 text-left">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b">
                                    <td
                                        colSpan={4}
                                        className="px-5 py-8 text-center text-muted-foreground"
                                    >
                                        Belum ada data mahasiswa.
                                    </td>
                                </tr>
                            </tbody>

                        </table>
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