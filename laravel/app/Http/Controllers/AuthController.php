<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login', 'register', 'requestOtp', 'verifyOtp', 'changepassword']]);
    //     auth()->setDefaultDriver('api');
    // }
    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required',
                'password' => 'required',
            ]);
            $credentials = $request->only('email', 'password');
            $user = Auth::getProvider()->retrieveByCredentials($credentials);
            if (Auth::attempt($credentials, $request->filled('remember'))) {
                // return redirect()->intended();
                return response()->json([
                    'success' => true,
                    // 'token'   => $jwtToken,
                    'message' => __('You are logged in successfully.'),
                    'data'    => $user,
                    // 'expires_in' => auth()->factory()->getTTL() * 60
                ]);
            }else{
                return response()->json([
                    'success' => false,
                    'message' => __('Please check your credentials and try again.')
                ]);
            }
        } catch (ValidationException $exception) {
            return response()->json([
                'success' => false,
                'message'    => $exception->getMessage(),
                'errors' => $exception->errors(),
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message'    => $e->getMessage(),
            ], 200);
        }
    }
}
