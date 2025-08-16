"use client"

import { useMemo, useState } from "react"
import type { Slot, SlotKey, Role } from "@/types"
import { players } from "@/data/players"
import { useTeamStore } from "@/stores/teamStore"

const SLOTS: Slot[] = [
  { key: "S", label: "Setter", role: "Setter" },
  { key: "OP", label: "Opposite", role: "Opposite" },
  { key: "OH1", label: "Outside Hitter 1", role: "Outside Hitter" },
  { key: "OH2", label: "Outside Hitter 2", role: "Outside Hitter" },
  { key: "MB1", label: "Middle Blocker 1", role: "Middle Blocker" },
  { key: "MB2", label: "Middle Blocker 2", role: "Middle Blocker" },
  { key: "L", label: "Libero", role: "Libero" }
]

export default function Page() {
  const [q, setQ] = useState("")
  const { selected, selectSlot, assignments, clearSlot, assignSelected, reset, isAssigned } =
    useTeamStore()

  const selectedSlot = useMemo(() => SLOTS.find((s) => s.key === selected) ?? null, [selected])

  const assignedName = (k: SlotKey) => {
    const id = assignments[k]
    if (!id) return "— vacío —"
    const p = players.find((x) => x.id === id)
    return p?.name ?? "—"
  }

  const candidates = useMemo(() => {
    if (!selectedSlot) return []
    const role: Role = selectedSlot.role
    const nameQ = q.trim().toLowerCase()
    return players
      .filter((p) => p.roles.includes(role))
      .filter((p) => !isAssigned(p.id) || assignments[selectedSlot.key] === p.id) // permitir el que ya está
      .filter((p) => (nameQ ? p.name.toLowerCase().includes(nameQ) : true))
  }, [selectedSlot, q, assignments, isAssigned])

  return (
    <main className="mx-auto max-w-6xl p-6 space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Team Builder — Haikyuu!!</h1>
          <p className="text-sm text-gray-500">Selecciona una posición y asigna jugadores.</p>
        </div>
        <button
          onClick={reset}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
          title="Resetear equipo"
        >
          Reset
        </button>
      </header>

      {/* Slots */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
        {SLOTS.map((s) => {
          const active = selected === s.key
          return (
            <button
              key={s.key}
              onClick={() => selectSlot(s.key)}
              className={[
                "rounded-2xl border p-4 text-left transition",
                active ? "ring-2 ring-black bg-gray-50" : "hover:bg-gray-50"
              ].join(" ")}
            >
              <div className="text-xs uppercase tracking-wide text-gray-500">{s.label}</div>
              <div className="mt-1 text-[13px] text-gray-600">{s.role}</div>
              <div className="mt-3 text-sm font-medium">{assignedName(s.key)}</div>

              {assignments[s.key] && (
                <div className="mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      clearSlot(s.key)
                    }}
                    className="text-xs rounded-lg border px-2 py-1 hover:bg-gray-100"
                  >
                    Quitar
                  </button>
                </div>
              )}
            </button>
          )
        })}
      </section>

      {/* Panel de asignación */}
      <section className="rounded-2xl border p-4">
        {!selectedSlot ? (
          <p className="text-sm text-gray-500">Selecciona una posición para ver candidatos.</p>
        ) : (
          <>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">
                Asignar a: <span className="font-normal">{selectedSlot.label}</span>
              </h2>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por nombre..."
                className="w-64 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <ul className="mt-4 divide-y">
              {candidates.length === 0 && (
                <li className="py-3 text-sm text-gray-500">Sin resultados para esta posición.</li>
              )}
              {candidates.map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-2 py-3">
                  <div>
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-gray-500">
                      {p.team ? `${p.team} · ` : ""}{p.roles.join(", ")}
                    </div>
                  </div>
                  <button
                    onClick={() => assignSelected(p.id)}
                    className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50"
                  >
                    Asignar
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  )
}
