---
title: Actualizar la información de GitHub
intro: 'Puedes actualizar a la última versión de {{ site.data.variables.product.prodname_insights }} para beneficiarte de las mejoras y correcciones de errores.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/updating-github-insights
permissions: 'Las personas con permisos de lectura para el repositorio de `github/insights-releases` y el acceso administrativo al servidor de aplicaciones pueden actualizar {{ site.data.variables.product.prodname_insights }}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de las actualizaciones {{ site.data.variables.product.prodname_insights }}

Antes de actualizar {{ site.data.variables.product.prodname_insights }}, puedes comprobar la versión que estás usando actualmente en el ángulo inferior derecho de cualquier página.

El proceso de actualización tardará hasta 10 minutos. Durante este tiempo, los usuarios no pueden acceder a {{ site.data.variables.product.prodname_insights }}.

### Actualizar desde {{ site.data.variables.product.prodname_insights }} 0.4.0 +

Para actualizar {{ site.data.variables.product.prodname_insights }} desde 0.4.0 +, puedes instalar la última versión. {{ site.data.variables.product.prodname_insights }} pedirá que uses la configuración de instalación anterior.

{{ site.data.reusables.github-insights.download-latest-release }}
4. Ejecuta el script del shell `Install.sh`.
5. Si el SSL se habilitó previamente, {{ site.data.variables.product.prodname_insights }} encontrará un certificado SSL existente. Escribe "Y" para aceptar o "n" para cambiar el certificado SSL o inhabilitar SSL.
6. Si el SSL se habilitó previamente, {{ site.data.variables.product.prodname_insights }} encontrará una clave SSL existente. Escribe "Y" para aceptar o "n" para cambiar la clave SSL.
5. {{ site.data.variables.product.prodname_insights }} encontrará un nombre de host existente. Escribe "Y" para aceptar o "n" para ingresar a un nombre de host diferente. El nombre del host es la misma URL que usaste para el servidor de aplicaciones al crear el {{ site.data.variables.product.prodname_github_app }}.
6. La instalación tardará unos minutos en ejecutarse. Una vez que esté completo, verás un mensaje impreso en el terminal.
  ```
  Installation complete
  Run /opt/insights/scripts/start.sh to start GitHub Insights
  ```
{{ site.data.reusables.github-insights.run-script }}

### Actualizar desde {{ site.data.variables.product.prodname_insights }} 0.3.1 o inferior

Las versiones {{ site.data.variables.product.prodname_insights }} 0.3.1 o inferiores no son compatibles con las versiones 0.4.0+. Para actualizar desde {{ site.data.variables.product.prodname_insights }} 0.3.1 o inferior, instalar y configurar {{ site.data.variables.product.prodname_insights }} en un nuevo servidor de aplicaciones.
