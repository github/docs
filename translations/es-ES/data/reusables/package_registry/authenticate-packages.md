Necesitas de un token de acceso para publicar, instalar, y borrar paquetes en {{ site.data.variables.product.prodname_registry }}. Puedes utilizar un token de acceso personal para autenticarte con tu nombre de usuario directamente en {% data variables.product.prodname_registry %} o en la API de {% data variables.product.prodname_dotcom %}. Cuando creas un token de acceso personal, puedes asignar al token diferentes ámbitos en función de tus necesidades.

{% if currentVersion == "free-pro-team@latest" %}
Para autenticarte utilizando un
flujo de trabajo de {% data variables.product.prodname_actions %}:
- Para los registros de paquete (`PACKAGE-REGISTRY.pkg.github.com`), puedes utilizar un `GITHUB_TOKEN`.
- Para el registro del contenedor (`ghcr.io/OWNER/IMAGE-NAME`), puedes utilizar un `GITHUB_TOKEN` o un token de acceso personal. Es muy recomendable que utilices un `GITHUB_TOKEN` para evitar el acceso innecesario a tus repositorios.

Para obtener más información acerca del `GITHUB_TOKEN` que se utiliza en los flujos de trabajo de {% data variables.product.prodname_actions %}, consulta las secciones de "[Secretos cifrados"](/actions/reference/encrypted-secrets)" y "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

{% else %}
Para autenticarte en el
{% data variables.product.prodname_registry %} utilizando un flujo de trabajo de {% data variables.product.prodname_actions %}, debes utilizar `GITHUB_TOKEN`.
{% endif %}
