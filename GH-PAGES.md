# Languages and Tools:

| NODE.JS |   Git   | GitHub  |
| :-----: | :-----: | :-----: |
|[![NODE.JS](https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg)](https://nodejs.org/en)| [![Git](https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg)](https://todointerconectado.com/Proyectos/2-Git_GitHub/index_git.html) | [![Github](https://www.vectorlogo.zone/logos/github/github-icon.svg)](#) |
| HTML5 | CSS3 | JavaScript |
| [![html5](https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg)](https://todointerconectado.com/Proyectos/1_Curso_HTML/HTML/index-HTML.html) | [![css3](https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg)](https://todointerconectado.com/Proyectos/3_Curso_CSS3/index_CSS3.html) | [![javascript](https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg)](#) |

# Vite
> Es un build tool y servidor de desarrollo para aplicaciones web modernas. Ofrece una configuración rápida y optimizaciones como recarga en caliente (Hot Module Replacement) y construcción eficiente, utilizando módulos ES. Es especialmente popular para proyectos de Vue y React.
>
> ```
> npm create vite@latest nombre-del-proyecto
> ```
>


# npm
> Es un gestor de paquetes para Node.js que permite instalar, actualizar y gestionar dependencias en proyectos JavaScript.
>
>Para instalar npm, primero debes instalar Node.js, ya que npm viene incluido con él. Aquí tienes los pasos:
>
> 1. `Descarga Node.js:` Ve a [nodejs.org](https://nodejs.org) y descarga la versión recomendada para tu sistema operativo.
>
> 2. `Instala Node.js:` Sigue las instrucciones del instalador. Esto instalará tanto `Node.js` como `npm`.
>
>Verifica la instalación: Abre una terminal y ejecuta:
> ```
> npm -v
> ```
>Esto mostrará la versión de npm instalada, confirmando que la instalación fue exitosa.

# *Install gh-pages*

> Más info: El `módulo gh-pages` es un módulo de npm (Node Package Manager) que permite automatizar la publicación de archivos en una rama gh-pages de un repositorio de GitHub (o cualquier otra rama u otro servicio).
> ```
> npm i gh-pages -D
> ```

# vite.config.js

> Es el archivo de configuración de Vite que permite personalizar cómo funciona este entorno de desarrollo. En un proyecto React, se usa para definir opciones como los plugins (ej. @vitejs/plugin-react), el puerto del servidor de desarrollo, alias de rutas, y otras configuraciones
>
>```
>import { defineConfig } from "vite";
>import react from "@vitejs/plugin-react";
>
>// https://vitejs.dev/config/
>export default defineConfig({
>    plugins: [react()],
>    base: "/el-nombre-de-tu-repositorio/",
>});
>```
> El nombre del repositorio del proyecto tiene que estar en `base`.
>```
> // Ejemplo:
>base: '/crearEntradasQR/',
>```

# @vitejs/plugin-react
> Es un plugin oficial de Vite que añade soporte para React, permitiendo utilizar JSX y habilitando funcionalidades como el React Fast Refresh para recargar componentes de manera rápida sin perder el estado durante el desarrollo.
>
>```
>npm install @vitejs/plugin-react --save-dev
>```
>
> Este comando instala el plugin como una dependencia de desarrollo en tu proyecto, lo que te permitirá usar React en Vite con todas las características necesarias, como JSX y React Fast Refresh

# package.json
> Es un archivo que contiene información sobre un proyecto `Node.js`, se encuentra en la raíz, incluyendo dependencias, scripts y metadatos como el nombre y la versión.
>
> ### Incluye:
>* `Dependencias:` Listado de bibliotecas necesarias para el proyecto.
>* `Scripts:` Comandos que puedes ejecutar, como npm run start o npm run build.
>* `Nombre y versión:` Identificación del proyecto y su versión.
>* `Descripción:` Breve resumen del propósito del proyecto.
>
> Es esencial para gestionar dependencias y automatizar tareas en proyectos JavaScript.
>
> Es un archivo `json`. Se debe agregar `"deploy": "gh-pages -d dist"`
> ```
>  "scripts": {
>    "dev": "vite",
>    "build": "vite build",
>    "preview": "vite preview",
>    "deploy": "gh-pages -d dist"
>  },
> ```
>
> Entonces, cuando ejecutemos:
>```
>npm run deploy
>```
> Se cambiara el `deploy` por `npm run gh-pages -d dist`.

# Git
> Git es un sistema de control de versiones distribuido que permite rastrear cambios en archivos y colaborar en proyectos de software. Facilita la gestión de versiones y el trabajo en equipo.
>```
> git init
> git add .
> git branch -M main
> git commit -m "first commit"
>```

# Crear repositorio en Github
> Subir el proyecto a Github
> ```
> git remote add origin https://github.com/${nombre-cuenta}/${nombre-repositorio}.git
> git branch -M main
> git push -u origin main
> ```

# `npm run build` && `npm run deploy`
> Estos comandos se repiten por cada actualización del proyecto:
>
> ```
> npm run build
> npm run deploy
> ```

# ADVERTENCIA!
> Es importante mencionar que al usar `GitHub pages`, no podrás usar `funcionalidades` que requieran un `servidor`, como `peticiones a bases de datos`. También es importante recordar que es recomendable tener un dominio personalizado para dar una mejor impresión a tus visitantes. Pero si lo que buscas es compartir tu proyecto con amigos, compañeros de trabajo o simplemente mostrar tu portafolio, GitHub pages es una excelente opción.

# NOTA: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
> Es una especificación para escribir mensajes de confirmación (commit messages) que sean comprensibles tanto para humanos como para máquinas. Define un formato estandarizado que ayuda a identificar la naturaleza de los cambios en el código, facilitando la generación de changelogs y la automatización de versiones.
>### Estructura básica:
> * `Tipo:` Indica el tipo de cambio (ej. feat, fix, chore).
> * `Alcance (opcional):` Describe el área afectada.
> * `Descripción:` Breve resumen del cambio.
> ### Ejemplo:
>```
> git commit -m "feat(auth): add user login feature"
> git commit -m "fix(ui): correct button alignment"
>```
> ### Tipos comunes:
> * `feat:` Nueva funcionalidad.
> * `fix:` Corrección de un error.
> * `chore:` Tareas de mantenimiento.
> * `docs:` Cambios en la documentación.
> * `style:` Cambios que no afectan el significado del código (espacios, formato, etc.).
> * `refactor:` Cambios en el código que no añaden funcionalidades ni corrigen errores.
>
> Asegúrate de seguir esta estructura para mantener un historial claro y útil en tu proyecto.
>
> ### Footer Conventional Commits
> Para agregar un footer a tu mensaje de commit en Git siguiendo la convención de Conventional Commits, puedes hacerlo de la siguiente manera:
>
>```
>git commit -m "✨ feat(auth): add user login feature
>
>BREAKING CHANGE: este cambio rompe la compatibilidad con versiones anteriores.
>
>🛠️ ISSUES CLOSED: #123."
>```
>### Estructura:
>* `Título:` Describe el cambio.
>* `Línea en blanco:` Separa el cuerpo del footer.
>* `Footer:` Incluye información sobre cambios incompatibles y referencia de issues.
>
>Esto mantiene un formato claro y legible.
>
>### Ejemplo:
>* ✨ para indicar una nueva característica.
>* 🛠️ para resaltar el cierre de un issue.
>
>Esto puede hacer que tus mensajes de commit sean más visuales y atractivos.




