import { Head, router } from '@inertiajs/react';
import { dashboard, logout } from '@/routes';
import { UsersRound, Search, Eye } from 'lucide-react';

export default function Mahasiswa() {
    return (
        <>
            <Head title="Data Mahasiswa" />

            <div className="flex h-full flex-1 flex-col gap-6 p-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <UsersRound className="size-6" />

                            <h1 className="text-2xl font-bold">
                                Data Mahasiswa
                            </h1>
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Daftar mahasiswa yang terdaftar dalam sistem.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="rounded-xl border bg-card">

                    {/* Toolbar */}
                    <div className="flex flex-col gap-4 border-b p-5 md:flex-row md:items-center md:justify-between">

                        <div>
                            <h2 className="font-semibold">
                                Daftar Mahasiswa
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Kelola dan lihat informasi mahasiswa.
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <input
                                type="text"
                                placeholder="Cari mahasiswa..."
                                className="w-full rounded-md border bg-background py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">

                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="px-5 py-3 text-left font-medium">
                                        No
                                    </th>

                                    <th className="px-5 py-3 text-left font-medium">
                                        Nama
                                    </th>

                                    <th className="px-5 py-3 text-left font-medium">
                                        Email
                                    </th>

                                    <th className="px-5 py-3 text-left font-medium">
                                        Status Profil
                                    </th>

                                    <th className="px-5 py-3 text-left font-medium">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b">
                                    <td
                                        colSpan={5}
                                        className="px-5 py-10 text-center text-muted-foreground"
                                    >
                                        Belum ada data mahasiswa.
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t p-4">
                        <p className="text-sm text-muted-foreground">
                            Menampilkan 0 mahasiswa
                        </p>
                    </div>

                </div>

                {/* Logout
                <button
                    onClick={() => router.post(logout())}
                    className="w-fit rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                    Logout
                </button> */}

            </div>
        </>
    );
}

Mahasiswa.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Data Mahasiswa',
            href: '#',
        },
    ],
};