---
title: Actualizar la información de GitHub
intro: 'Puedes actualizar a la última versión de {% data variables.product.prodname_insights %} para beneficiarte de las mejoras y correcciones de errores.'
redirect_from:
  - /github/installing-and-configuring-github-insights/updating-github-insights
permissions: 'People with read permissions to the `github/insights-releases` repository and administrative access to the application server can update {% data variables.product.prodname_insights %}.'
versions:
  enterprise-server: '*'
---

### Acerca de las actualizaciones {% data variables.product.prodname_insights %}

Antes de actualizar {% data variables.product.prodname_insights %}, puedes comprobar la versión que estás usando actualmente en el ángulo inferior derecho de cualquier página.

El proceso de actualización tardará hasta 10 minutos. Durante este tiempo, los usuarios no pueden acceder a {% data variables.product.prodname_insights %}.

### Actualizar desde {% data variables.product.prodname_insights %} 0.4.0 +

Para actualizar {% data variables.product.prodname_insights %} desde 0.4.0 +, puedes instalar la última versión. {% data variables.product.prodname_insights %} pedirá que uses la configuración de instalación anterior.

{% data reusables.github-insights.download-latest-release %}
4. Ejecuta el script del shell `Install.sh`.
5. Si el SSL se habilitó previamente, {% data variables.product.prodname_insights %} encontrará un certificado SSL existente. Escribe "Y" para aceptar o "n" para cambiar el certificado SSL o inhabilitar SSL.
6. Si el SSL se habilitó previamente, {% data variables.product.prodname_insights %} encontrará una clave SSL existente. Escribe "Y" para aceptar o "n" para cambiar la clave SSL.
5. {% data variables.product.prodname_insights %} encontrará un nombre de host existente. Escribe "Y" para aceptar o "n" para ingresar a un nombre de host diferente. El nombre del host es la misma URL que usaste para el servidor de aplicaciones al crear el {% data variables.product.prodname_github_app %}.
6. La instalación tomará unos cuantos minutos en ejecutarse. Una vez que esté completo, verás un mensaje impreso en el terminal.
  ```
  Installation complete
  Run /opt/insights/scripts/start.sh to start GitHub Insights
  ```
{% data reusables.github-insights.run-script %}

### Actualizar desde {% data variables.product.prodname_insights %} 0.3.1 o inferior

Las versiones {% data variables.product.prodname_insights %} 0.3.1 o inferiores no son compatibles con las versiones 0.4.0+. Para actualizar desde {% data variables.product.prodname_insights %} 0.3.1 o inferior, instalar y configurar {% data variables.product.prodname_insights %} en un nuevo servidor de aplicaciones.
