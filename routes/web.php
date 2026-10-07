<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'admin.2fa'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

Route::inertia('admin/mahasiswa', 'admin/mahasiswa')
    ->name('admin.mahasiswa');
});

Route::middleware(['auth'])->group(function () {
    Route::inertia('mahasiswa/dashboard', 'mahasiswa/dashboard')
        ->name('mahasiswa.dashboard');
});

require __DIR__.'/settings.php';
