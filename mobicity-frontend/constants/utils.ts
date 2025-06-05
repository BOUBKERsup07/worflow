import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// URL de base du backend
const API_BASE_URL = 'http://localhost:8083/api';

// Fonction générique pour faire des requêtes au backend
export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }
  return response.json();
}

// Exemple: récupérer la liste des véhicules
export async function fetchVehicles() {
  return apiFetch('/vehicles');
} 