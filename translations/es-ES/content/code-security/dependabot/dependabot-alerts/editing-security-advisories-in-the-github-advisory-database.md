---
title: Editar las asesorías de seguridad en la Base de Datos de Asesorías de GitHub
intro: 'Puedes enviar mejoras a cualqueir asesoría publicada en la {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Editar la base de datos de asesorías
---

## Acerca de editar las asesorías en la {% data variables.product.prodname_advisory_database %}
Las asesorías de seguridad en la {% data variables.product.prodname_advisory_database %} en [github.com/advisories](https://github.com/advisories) se consideran asesorías globales. Cualquiera puede sugerir mejoras en cualquier asesoría de seguridad en la {% data variables.product.prodname_advisory_database %}. Puedes editar o agregar cualquier detalle, incluyendo los ecosistemas adicionales afectados, el nivel de severidad o la descripción de quién se vio impactado. El equipo de selección de {% data variables.product.prodname_security %} revisará las mejoras enviadas y las publicará en la {% data variables.product.prodname_advisory_database %} en caso de que se acepten.

Solo los propietarios y adminsitradores de repositorios pueden editar las asesorías de seguridad a nivel de repositorio. Para obtener más información, consulta la sección "[Editar una asesoría de seguridad de repositorio](/code-security/security-advisories/editing-a-security-advisory)".
## Editar las asesorías en la base de datos de asesorías de GitHub

1. Navega hasta https://github.com/advisories.
2. Selecciona la asesoría de seguridad a la cual te gustaría contribuir.
3. En la parte derecha de la página, haz clic en el enlace de **Sugerir mejoras para esta vulnerabilidad**. ![Enlace para sugerir mejoras](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. E el formato de contribución, realiza las mejoras deseadas. Puedes editar o agregar cualquier detalle.
5. Cuand terminas de editar la asesoría, haz clic en **Enviar mejoras**.
6. Una vez que emites tus mejoras, el equipo de selección de {% data variables.product.prodname_security %} creará una solicitud de cambios en [github/advisory-database](https://github.com/github/advisory-database), la cuál contendrá tus cambios para revisarlos. Si la asesoría se originó desde un repositorio de {% data variables.product.prodname_dotcom %}, también etiquetaremos al publicador original para que pueda agregar un comentario opcional. Puedes ver la solicitud de cambios y obtener notificaciones cuando se actualice o cierre.

También puedes abrir una solicitud de cambios directamente en un archivo de asesoría en el repositorio [github/advisory-database](https://github.com/github/advisory-database). Para obtener más información, consulta los [lineamientos de contribución](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 
