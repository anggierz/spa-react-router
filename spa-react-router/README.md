# 🎬 MovieDB SPA - React Router

Este proyecto es una aplicación SPA (Single Page Application) desarrollada en **React** utilizando **React Router** para la navegación. La aplicación permite a los usuarios explorar películas en tendencia, ver detalles individuales y navegar entre páginas sin recargar el navegador.

## 📌 Descripción de la aplicación

La aplicación **MovieDB** permite:

- Consultar películas en tendencia mediante la API de TMDB.
- Visualizar tarjetas con información básica (imagen, título, sinopsis y fecha de estreno).
- Acceder a una vista detallada de cada película al hacer clic en su tarjeta.
- Navegación fluida entre páginas utilizando React Router.

Esta práctica forma parte de la asignatura **Desarrollo Front con Frameworks I** – Práctica 2 de React.

## 🚀 Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/anggierz/spa-react-router.git
cd spa-react-router/spa-react-router
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

### 4. Ejecutar pruebas

> No se incluyen pruebas automatizadas. Puedes verificar el correcto funcionamiento de la app navegando por las rutas.

## 📁 Estructura del proyecto

```bash
spa-react-router/
│
├── public/                 # Archivos estáticos
│
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── pages/              # Vistas de cada página principal
│   ├── App.jsx             # Componente raíz con enrutamiento
│   ├── main.jsx            # Punto de entrada de la app
│   └── index.css           # Estilos globales
│
├── .gitignore              # Archivos ignorados por Git
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
└── README.md               # Este archivo
```

## 🛠️ Tecnologías utilizadas

- React
- React Router DOM
- Vite
- HTML & CSS

---

