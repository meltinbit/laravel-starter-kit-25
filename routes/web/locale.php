<?php

use App\Http\Controllers\LocaleController;
use Illuminate\Support\Facades\Route;

Route::post('/set-locale', [LocaleController::class, 'setLocale'])
	->name('locale.set');
