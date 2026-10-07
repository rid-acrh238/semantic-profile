<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdminHasTwoFactor
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        if (
            $user&& $user->role === 'admin' &&
            !$user->two_factor_secret &&
            !$request->routeIs('security.edit')
        ) {
            return redirect()->route('security.edit');

        }
        return $next($request);
    }
}
