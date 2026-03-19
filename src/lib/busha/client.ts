import { env } from "@/lib/env";

export class BushaApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: unknown,
  ) {
    super(message);
  }
}

export async function bushaFetch<T>(
  path: string,
  init?: RequestInit,
  fallback?: T,
): Promise<T> {
  if (env.demoMode) {
    if (fallback === undefined) {
      throw new BushaApiError("Demo response not configured.", 501);
    }
    return fallback;
  }

  const response = await fetch(`${env.bushaApiBaseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.bushaSecretKey}`,
      "X-BU-PROFILE-ID": env.bushaProfileId ?? "",
      ...init?.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    let details: unknown = undefined;
    try {
      details = await response.json();
    } catch {}
    throw new BushaApiError("Busha API request failed.", response.status, details);
  }

  return response.json() as Promise<T>;
}
