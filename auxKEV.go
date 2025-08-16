// Package docs — Guía de trabajo del proyecto Haikyu!! (formato .go de solo comentarios)
package docs

//* 1. Mapa del proyecto — Lo que SÍ vas a tocar

//* src/app/page.tsx — Pantalla principal
//? Qué hace: UI de la cancha, banca, panel de detalles y lista de candidatos.
//? Tú aquí: layout/estilos, animaciones, botones (rotar/reset), cómo se pinta cada carta.
//? Tip: cualquier ajuste visual primero se hace aquí.

//* src/stores/teamStore.ts — Estado global (Zustand)
//? Qué hace: selected (slot activo), assignments (jugador por slot), acciones assignSelected, clearSlot, rotate, reset.
//? Tú aquí: modifica la lógica (asignación/rotación/limpieza) sin tocar la UI.

//* src/data/players.ts — Catálogo de jugadores (archivo de tu amigo)
//? Qué hace: lista de jugadores con stats/roles y campo image.
//? Tú aquí: agregar/editar jugadores. image debe apuntar a /characters/<archivo>.png|jpg y el archivo existir en public/characters/.

//* public/characters/* — Imágenes de jugadores
//? Qué hace: assets estáticos servidos por Next.
//? Tú aquí: agrega las imágenes (nombres en minúsculas y sin espacios). Ej.: public/characters/atsumu-miya-ur.png
//?        → En players.ts usa image: "/characters/atsumu-miya-ur.png"

//* src/types.ts — Tipos compartidos (archivo de tu amigo)
//? Qué hace: RoleCode, SlotKey, Player, etc.
//? Tú aquí: amplía tipos solo si agregas nuevas props a players.ts. Evita renombrar tipos.

//* src/components/ui/* — shadcn/ui
//? Qué hace: componentes base (Button, Card, Input…).
//? Tú aquí: reúsalos en page.tsx para estilizar mejor la UI.

//* src/lib/utils.ts — Utilidades
//? Qué hace: cn (merge de clases Tailwind).
//? Tú aquí: helpers pequeños de UI si los necesitas.

//* src/app/globals.css — Estilos globales
//? Qué hace: Tailwind base/utilities.
//? Tú aquí: estilos globales puntuales (lo grueso con clases en JSX).

//! 2. Lo que normalmente NO tocas
// .next/, node_modules/, pnpm-lock.yaml — generados.
// next.config.ts, postcss.config.mjs, Tailwind v4 — solo si vas a cambiar build/config.
// components.json — config de shadcn (tócala solo al agregar componentes del registry).

//! 3. ¿Qué archivos puso tu amigo y cómo los usas?
//* src/types.ts → definió RoleCode, SlotKey, Player; te da tipado en page.tsx/players.ts.
//* src/data/players.ts → dataset de jugadores con imágenes/stats; lo usas para candidatos y mostrar nombres/fotos.
//* (posibles) ajustes en page.tsx → para ver detalles/imagenes; puedes simplificar/estilizar sin romper la interfaz con la store.

//! 4. Flujo de trabajo recomendado (paso a paso)
//? 0) Arrancar el proyecto
// $ cd ~/frontend/haikyu-fly
// $ pnpm install
// $ pnpm dev
//? Abre http://localhost:3000

//? 1) Agregar/editar un jugador (y su imagen)
// $ cp /ruta/local/mi-jugador.png public/characters/mi-jugador.png
//? Edita src/data/players.ts y agrega algo como:
/*
{
  id: "mi-jugador-ssr",
  name: "Mi Jugador",
  team: "Karasuno",
  rarity: "SSR",
  roles: ["WS"],                // usa RoleCode del types.ts
  image: "/characters/mi-jugador.png"
}
*/
//? Guarda. Debería verse en candidatos y cartas al asignarlo.

//? 2) Cambiar layout/animación de cartas
//? Edita src/app/page.tsx: grid, tamaños, espaciados, etiquetas, framer-motion, etc.

//? 3) Cambiar lógica (rotación/asignación)
//? Edita src/stores/teamStore.ts: rotate, assignSelected, clearSlot, reset.

//? 4) Confirmar ESLint y correr en local
// $ pnpm lint
// $ pnpm dev

//! 5. Checklist express (para imágenes que no cargan)
//? image debe empezar con /characters/... (SIN /public).
//? El archivo debe existir bajo public/characters/ y tener la extensión correcta (.png/.jpg).
//? Si agregas imágenes nuevas y no aparecen, reinicia el dev server.

//! 6. Confirmar que estás 1:1 con GitHub
// $ git status                        // debe decir: up to date con 'origin/main'
// $ git rev-parse HEAD                // commit local
// $ git rev-parse origin/main         // commit remoto (debe ser el mismo)
// $ git log --oneline -n 5            // historial corto para verificar

// Fin de la guía.
