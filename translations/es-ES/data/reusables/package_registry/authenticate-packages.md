Necesitas de un token de acceso para publicar, instalar, y borrar paquetes en {{ site.data.variables.product.prodname_registry }}. Puedes utilizar un token de acceso personal para autenticarte con tu nombre de usuario directamente en {% data variables.product.prodname_registry %} o en la API de {% data variables.product.prodname_dotcom %}. Cuando creas un token de acceso personal, puedes asignar al token diferentes ámbitos en función de tus necesidades.

{% if currentVersion == "free-pro-team@latest" %}
Para autenticarte utilizando un
flujo de trabajo de {% data variables.product.prodname_actions %}:
- Para los registros de paquete (`PACKAGE-REGISTRY.pkg.github.com`), puedes utilizar un `GITHUB_TOKEN`.
- Para el registro de contenedor (`ghcr.io/OWNER/IMAGE-NAME`), debes utilizar un token de acceso personal.
{% else %}
Para autenticarte en el
{% data variables.product.prodname_registry %} utilizando un flujo de trabajo de {% data variables.product.prodname_actions %}, debes utilizar `GITHUB_TOKEN`.
{% endif %}
