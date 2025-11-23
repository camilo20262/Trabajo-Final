# Trabajo Final
 📌 PROYECTO: Migración de Sitio Web Estático a Angular
📅 FECHA: 22 de noviembre de 2025
👨‍💻 AUTOR: Juan
📂 REPOSITORIO: https://github.com/camilo20262/Trabajo-Final

📄 1. Resumen Ejecutivo

Este informe describe el proceso de migración de un sitio web universitario desarrollado en HTML, CSS y JavaScript Vanilla, hacia una arquitectura moderna basada en Angular (v18+).
El propósito principal fue mejorar la mantenibilidad, incorporar tipado estático y garantizar la escalabilidad futura del proyecto.

🛠️ 2. Preparación del Entorno

Antes de iniciar la migración se validaron herramientas esenciales:

⚙️ Node.js v22.14.0 verificado correctamente

📦 Instalación global del Angular CLI (@angular/cli)

🔐 Ajuste de políticas de ejecución en PowerShell para permitir scripts del framework

🧱 3. Arquitectura del Nuevo Proyecto

Se generó el proyecto mi-web-angular con:

🎨 CSS estándar para compatibilidad con estilos heredados

🌐 Renderizado Client-Side Rendering (CSR)

🧩 Uso de Standalone Components, evitando módulos complejos

🗂️ 4. Migración de Recursos
📁 4.1 Gestión de Imágenes

📍 Antes: carpeta images/

📍 Ahora: src/assets/

✨ Se refactorizaron todas las rutas (src="assets/...")

🎨 4.2 Hojas de Estilo

Todo el CSS original fue unificado en src/styles.css

🎯 Se mantuvo la identidad visual institucional del sitio

🧩 5. Desarrollo de Componentes y Vistas

La estructura HTML original se integró en AppComponent.

🧹 Limpieza del código generado por Angular CLI

🧱 Integración de Header, Nav, Main y Footer

🐞 Corrección de errores como atributos mal escritos (rc ➝ src)

⚡ 6. Lógica de Negocio y Reactividad (TypeScript)

Se reemplazó la manipulación directa del DOM por el sistema reactivo de Angular.

🔑 Implementaciones principales:

📋 Formularios Reactivos con FormsModule

🔄 Data Binding:

[(ngModel)]

*ngIf

(ngSubmit) y (click)

🖥️ Simulación de backend con función asíncrona + estado “Enviando…” y validaciones

🌐 7. Control de Versiones y Despliegue

🔗 Repositorio GitHub conectado y actualizado

🌿 Rama principal: main

📌 Proyecto público con la última versión estable

✅ 8. Conclusiones

La migración fue realizada exitosamente y ahora el sitio cuenta con:

🚀 Tecnología moderna y escalable

🛡️ Mejor manejo de errores y validaciones

🗂️ Estructura ordenada y profesional

🔧 Base sólida para futuras mejoras


