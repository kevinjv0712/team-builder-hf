export type Role = 'Setter' | 'Opposite' | 'Outside Hitter' | 'Middle Blocker' | 'Libero'
export type SlotKey = 'S' | 'OP' | 'OH1' | 'OH2' | 'MB1' | 'MB2' | 'L'
export type Slot = { key: SlotKey; label: string; role: Role }
export type Player = {
  id: string
  name: string
  roles: Role[]
  team?: string
  rarity?: 'SSR' | 'SR' | 'R' | 'N'
}
