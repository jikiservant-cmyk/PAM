'use client';

/**
 * Fellowship store backed by localStorage.
 *
 * There is no backend here, so registrations live in the browser that made
 * them. Swap these three functions for real API calls when a server exists.
 */

export type Fellowship = {
  id: string;
  name: string;
  leader: string;
  role: string;
  email: string;
  phone: string;
  district: string;
  members: string;
  meetingDay: string;
  about: string;
  createdAt: string;
};

const KEY = 'pam.fellowships';
const SESSION_KEY = 'pam.session';

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getFellowships(): Fellowship[] {
  if (typeof window === 'undefined') return [];
  return safeParse<Fellowship[]>(window.localStorage.getItem(KEY), []);
}

function save(list: Fellowship[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
}

export function registerFellowship(
  data: Omit<Fellowship, 'id' | 'createdAt'>
): { ok: true; fellowship: Fellowship } | { ok: false; error: string } {
  const list = getFellowships();

  const exists = list.some(
    (f) => f.email.trim().toLowerCase() === data.email.trim().toLowerCase()
  );
  if (exists) {
    return { ok: false, error: 'A fellowship is already registered with that email.' };
  }

  const fellowship: Fellowship = {
    ...data,
    id: `pam_${Date.now().toString(36)}`,
    createdAt: new Date().toISOString(),
  };

  save([...list, fellowship]);
  return { ok: true, fellowship };
}

export function signIn(
  email: string
): { ok: true; fellowship: Fellowship } | { ok: false; error: string } {
  const found = getFellowships().find(
    (f) => f.email.trim().toLowerCase() === email.trim().toLowerCase()
  );
  if (!found) {
    return { ok: false, error: 'No fellowship found with that email. Register first.' };
  }
  window.localStorage.setItem(SESSION_KEY, found.id);
  return { ok: true, fellowship: found };
}

export function signOut() {
  if (typeof window !== 'undefined') window.localStorage.removeItem(SESSION_KEY);
}

export function getCurrentFellowship(): Fellowship | null {
  if (typeof window === 'undefined') return null;
  const id = window.localStorage.getItem(SESSION_KEY);
  if (!id) return null;
  return getFellowships().find((f) => f.id === id) ?? null;
}
