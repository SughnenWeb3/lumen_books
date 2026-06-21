'use client';

import { useActionState } from 'react';
import { loginAction } from '../lib/actions';

export default function LoginPage() {
  const [state, action, isPending] = useActionState(loginAction, undefined);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-stone-200 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black uppercase tracking-widest text-stone-900 mb-2">
            Seller Login
          </h1>
          <p className="text-stone-500 text-sm">
            Access your Lumen Books seller dashboard
          </p>
        </div>

        <form action={action} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2"
            >
              Email / Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-stone-300 rounded px-4 py-3 focus:outline-none focus:border-[#2c4a2e] focus:ring-1 focus:ring-[#2c4a2e] transition-colors"
              placeholder="Enter 'admin'"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-stone-300 rounded px-4 py-3 focus:outline-none focus:border-[#2c4a2e] focus:ring-1 focus:ring-[#2c4a2e] transition-colors"
              placeholder="Enter 'password'"
              required
            />
          </div>

          {state?.error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded border border-red-200">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#2c4a2e] text-white font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-[#3a5c3c] transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Authenticating...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
