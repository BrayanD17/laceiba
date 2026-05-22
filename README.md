# La Ceiba

Sitio web moderno para ferretería y materiales de construcción desarrollado con React y Vite.

## Descripción

La Ceiba es una plataforma web enfocada en la exhibición de productos, catálogo de herramientas, información empresarial y contacto directo mediante WhatsApp para clientes del sector construcción y ferretería.

El proyecto incluye:

* Catálogo dinámico de herramientas.
* Integración con Cloudinary para imágenes.
* Integración con Supabase para almacenamiento de productos.
* Diseño responsive.
* Galería interactiva.
* Sección de contacto con integración a WhatsApp.
* Componentes animados e interfaz moderna.

---

# Tecnologías utilizadas

* React
* Vite
* JavaScript
* CSS3
* Supabase
* Cloudinary
* React Icons
* Lucide React

---

# Características principales

## Catálogo dinámico

* Visualización de productos.
* Búsqueda de herramientas.
* Paginación.
* Vista previa de imágenes.
* Integración con base de datos.

## Gestión de imágenes

* Optimización mediante Cloudinary.
* Transformaciones automáticas.
* Carga rápida y responsive.

## Diseño moderno

* Animaciones interactivas.
* Tarjetas dinámicas.
* Diseño adaptable a dispositivos móviles.
* Experiencia visual enfocada en construcción y ferretería.

## Contacto rápido

* Integración directa con WhatsApp.
* Formulario de contacto.
* Información empresarial.

---

# Estructura del proyecto

```txt
laceiba/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── logo/
│   ├── components/
│   ├── sections/
│   │   ├── CatalogoHerramientas/
│   │   ├── Contacto/
│   │   ├── Galeria/
│   │   ├── Productos/
│   │   └── QuienesSomos/
│   ├── lib/
│   │   ├── cloudinary.js
│   │   └── supabase.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

# Configuración del entorno

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_SUPABASE_URL=TU_URL_SUPABASE
VITE_SUPABASE_ANON_KEY=TU_ANON_KEY
```

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/BrayanD17/laceiba.git
```

## 2. Entrar al proyecto

```bash
cd laceiba
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar el proyecto

```bash
npm run dev
```

---

# Compilación para producción

```bash
npm run build
```

---

# Integraciones

## Supabase

El proyecto utiliza Supabase para:

* Gestión de productos.
* Consulta de inventario.
* Almacenamiento de datos.

## Cloudinary

Cloudinary se utiliza para:

* Hosting de imágenes.
* Optimización automática.
* Transformaciones responsivas.

---

# Diseño visual

El proyecto incorpora:

* Animaciones CSS.
* Íconos personalizados.
* Estilo enfocado en ferretería y construcción.
* Componentes interactivos.

---

# Estado del proyecto

Proyecto en desarrollo activo.

Actualmente se continúa mejorando:

* Integración de catálogo.
* Optimización responsive.
* Experiencia de usuario.
* Panel administrativo.
* Gestión de inventario.

---

# Autor

Desarrollado por **Brayan Gutiérrez Dinarte**.

GitHub:

[https://github.com/Bra](https://github.com/Bra)
