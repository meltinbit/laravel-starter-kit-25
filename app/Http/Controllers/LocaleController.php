<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LocaleController extends Controller
{
	public function setLocale(Request $request)
	{
		$locale = $request->input('locale');

		if (in_array($locale, ['en', 'it'])) {
			App::setLocale($locale);
			Session::put('locale', $locale);

			return redirect()->back();
		}

		return response()->json(['error' => 'Invalid locale'], 400);
	}
}
