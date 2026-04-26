# SnapLink Frontend

Frontend de sitio web multipagina construido con Astro, React y Tailwind CSS.

## Estructura escalable

```text
src/
├── components/
│   ├── home/            # Secciones de la pagina de inicio
│   ├── layout/          # Header y Footer reutilizables
│   └── shared/          # Componentes compartidos entre paginas
├── config/
│   └── site.ts          # Navegacion y enlaces globales
├── layouts/
│   └── MainLayout.astro # Shell base del sitio
├── pages/
│   ├── index.astro      # Compositor principal de la home
│   ├── caracteristicas.astro
│   ├── precios.astro
│   └── contacto.astro
└── styles/
	└── global.css
```

## Rutas disponibles

- `/`
- `/caracteristicas`
- `/precios`
- `/contacto`
- `/login`

## Comandos

- `pnpm install`: instala dependencias
- `pnpm dev`: inicia entorno local en `localhost:4321`
- `pnpm build`: genera build de produccion
- `pnpm preview`: previsualiza build de produccion
