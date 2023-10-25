# README - Aplicación de Tareas Pendientes

Este README proporciona una descripción general del código de la aplicación "Aplicación de Tareas Pendientes" y las instrucciones sobre cómo ejecutarla. La "Aplicación de Tareas Pendientes" es una aplicación web para gestionar tareas organizadas en diferentes categorías.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Requisitos Previos](#requisitos-previos)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Uso](#uso)
- [Estructura de Archivos](#estructura-de-archivos)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)


## Introducción

La "Aplicación de Tareas Pendientes" es una aplicación web que permite a los usuarios gestionar tareas en diferentes categorías, como "Por Hacer", "En Progreso", "Por Testear" y "Completadas". La aplicación muestra las tareas de manera atractiva visualmente y proporciona la opción de ver los detalles de la tarea en un modal.

## Requisitos Previos

Antes de ejecutar la aplicación, debes tener lo siguiente instalado:

1. **Node.js:** Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo en [nodejs.org](https://nodejs.org/).

2. **npm:** npm es el gestor de paquetes para Node.js y viene incluido con Node.js. Verifica que tienes npm instalado ejecutando `npm -v` en tu terminal.

## Ejecutar la Aplicación

Sigue estos pasos para ejecutar la "Aplicación de Tareas Pendientes" en tu máquina local:

1. Clona o descarga el repositorio de código en tu máquina local.

2. Abre tu terminal y navega al directorio del proyecto.

3. Instala las dependencias requeridas ejecutando el siguiente comando:

   ```bash
   npm install -g json-server
   ```

4. Inicia la aplicación ejecutando:

   ```bash
   json-server --watch db.json
   ```

5. La aplicación debería ser accesible en tu navegador web en `http://localhost:3000`.

## Uso

Al iniciar la aplicación, se te presentará una página web que muestra tareas categorizadas como "Por Hacer" de forma predeterminada. Puedes cambiar la categoría haciendo clic en los botones de categoría en la sección superior de la página.

- Haz clic en una tarea para ver sus detalles en una ventana modal.
- La ventana modal proporciona información sobre la tarea, incluyendo el título, la descripción y una imagen asociada a la tarea.

## Estructura de Archivos

La base de código de la "Aplicación de Tareas Pendientes" se organiza de la siguiente manera:

- `index.js`: El archivo JavaScript principal que contiene la lógica de la aplicación.
- `index.html`: El archivo HTML que define la estructura de la página web.
- `styles.css`: El archivo CSS que contiene los estilos de la aplicación.
- `assets/`: Este directorio contiene imágenes e iconos utilizados en la aplicación.

## Tecnologías Utilizadas

La "Aplicación de Tareas Pendientes" utiliza las siguientes tecnologías y bibliotecas:

- **HTML y CSS**: Se utilizan para estructurar la página web y definir sus estilos.
- **JavaScript**: La lógica de la aplicación está implementada en JavaScript.
- **Bootstrap**: El marco Bootstrap se utiliza para el diseño receptivo y los estilos.
- **Bootstrap Icons**: Se utilizan iconos de Bootstrap Icons.
- **Node.js y npm**: Node.js se utiliza para ejecutar un servidor de desarrollo local y gestionar las dependencias.
- **Fetch API**: Se utiliza para realizar solicitudes HTTP asincrónicas para obtener tareas.


