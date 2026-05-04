"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";

const STORAGE_KEY = "case-studies-auth";
const CORRECT_PASSWORD = "palak-work-2026";

const AuthGate = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored === "true") {
        setIsAuthenticated(true);
      }
    } catch {
      /* sessionStorage unavailable (e.g. locked storage) — stay on gate */
    }
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (password === CORRECT_PASSWORD) {
        sessionStorage.setItem(STORAGE_KEY, "true");
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Incorrect password");
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    },
    [password]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit(e);
      }
    },
    [handleSubmit]
  );

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
            <svg
              className="h-5 w-5 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-zinc-900">
            This portfolio is private
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Enter the password to view case studies.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password-input" className="sr-only">
              Password
            </label>
            <input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              onKeyDown={handleKeyDown}
              placeholder="Enter password"
              autoFocus
              autoComplete="off"
              className={`w-full rounded-xl border bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-300 focus:border-zinc-300 focus:bg-white focus:ring-2 focus:ring-zinc-100 ${
                error
                  ? "border-red-300 focus:border-red-300 focus:ring-red-50"
                  : "border-zinc-200"
              } ${shake ? "animate-shake" : ""}`}
              aria-label="Password"
              aria-describedby={error ? "password-error" : undefined}
              aria-invalid={!!error}
            />
            {error && (
              <p
                id="password-error"
                className="mt-2 text-xs text-red-400"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2"
            tabIndex={0}
            aria-label="Submit password"
          >
            Continue
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] text-zinc-300">
          Palak&apos;s Design Portfolio
        </p>
      </div>
    </div>
  );
};

export default AuthGate;
