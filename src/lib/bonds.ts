// src/lib/bonds.ts
import type { Bond, Player } from "@/types";

export function isBondActive(b: Bond, onCourtIds: Set<string>) {
  const participants =
    b.participants && b.participants.length > 0
      ? b.participants
      : b.to
      ? [b.to]
      : []; // fallback por si algún dato antiguo solo trae "to"
  if (participants.length === 0) return false;
  // Regla actual: deben estar todos en cancha (incluye al propio jugador si viene en participants)
  return participants.every((id) => onCourtIds.has(id));
}

export function getOnCourtIds(team: Record<string, Player | null>) {
  return new Set(
    Object.values(team)
      .filter(Boolean)
      .map((p) => (p as Player).id)
  );
}
