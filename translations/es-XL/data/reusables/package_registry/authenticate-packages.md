Necesitas de un token de acceso para publicar, instalar, y borrar paquetes en {% data variables.product.prodname_registry %}. Puedes utilizar un token de acceso personal para autenticarte con tu nombre de usuario directamente en {% data variables.product.prodname_registry %} o en la API de {% data variables.product.prodname_dotcom %}. Cuando creas un token de acceso personal, puedes asignar al token diferentes ámbitos en función de tus necesidades.

{% if currentVersion == "free-pro-team@latest" %}
To authenticate using a {% data variables.product.prodname_actions %} workflow:
- For package registries (`PACKAGE-REGISTRY.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`), you can use a `GITHUB_TOKEN`.
- For the container registry (`ghcr.io/OWNER/IMAGE-NAME`), you must use a personal access token.
{% else %}
To authenticate to {% data variables.product.prodname_registry %} using a {% data variables.product.prodname_actions %} workflow, you must use `GITHUB_TOKEN`.
{% endif %}
