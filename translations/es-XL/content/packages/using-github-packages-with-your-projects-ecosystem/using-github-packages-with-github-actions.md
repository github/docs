---
title: Usar GitHub Packages con GitHub Actions
intro: 'Puedes configurar un flujo de trabajo en {% data variables.product.prodname_actions %} para publicar o instalar automáticamente un paquete desde {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Acerca de {% data variables.product.prodname_registry %} con {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)."

Puedes ampliar las capacidades de CI y CD de tu repositorio publicando o instalando paquetes como parte de tu flujo de trabajo.

{% if currentVersion == "free-pro-team@latest" %}
#### Autenticar a {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

En lugar de usar un token de acceso personal para autenticarte a {% data variables.product.prodname_registry %}, usa el `GITHUB_TOKEN` que {% data variables.product.prodname_dotcom %} crea automáticamente para tu repositorio cuando habilitas {% data variables.product.prodname_actions %}. For an authentication example, see "[Authenticating with the {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)."

{% endif %}

#### Authenticating to package registries on {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}If you want your workflow to authenticate to {% data variables.product.prodname_registry %} to access a package registry other than the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, then{% else %}To authenticate to package registries on {% data variables.product.product_name %},{% endif %} we recommend using the `GITHUB_TOKEN` that {% data variables.product.product_name %} automatically creates for your repository when you enable {% data variables.product.prodname_actions %} instead of a personal access token for authentication. El `GITHUB_TOKEN` tiene ámbitos `read:packages` y `write:packages` en el repositorio actual. Para las bifurcaciones, el token también tiene el ámbito `read:packages` para el repositorio padre.

Puedes hacer referencia al `GITHUB_TOKEN` en tu archivo de flujo de trabajo mediante el contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para más información, consulta "[Autenticando con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."

### Publicar un paquete mediante una acción

Puedes publicar paquetes como parte de tu flujo de integración continua (CI) mediante {% data variables.product.prodname_actions %}. Por ejemplo, podrías configurar un flujo de trabajo para que cada vez que un desarrollador suba código a la rama predeterminada, el flujo de trabajo ejecute pruebas de IC. Si esas pruebas se superan, el flujo de trabajo publica una nueva versión del paquete en {% data variables.product.prodname_registry %}. Este flujo de trabajo automatiza la creación de nuevas versiones de paquete solo si el código cumple con tus estándares de calidad.

{% data reusables.package_registry.actions-configuration %}

### Instalar un paquete mediante una acción

Puedes instalar paquetes como parte de tu flujo de CI mediante {% data variables.product.prodname_actions %}. Por ejemplo, podrías configurar un flujo de trabajo para que cada vez que un programador suba código a una solicitud de extracción, el flujo de trabajo resuelva las dependencias al descargar e instalar paquetes alojados por el {% data variables.product.prodname_registry %}. Luego, el flujo de trabajo puede ejecutar pruebas de CI que requieran las dependencias.

Instalar paquetes alojados por el {% data variables.product.prodname_registry %} a través de las {% data variables.product.prodname_actions %} requiere una configuración mínima o una autenticación adicional, mediante el `GITHUB_TOKEN`. La transferencia de datos también es gratuita cuando una acción instala un paquete. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% if currentVersion == "free-pro-team@latest" %}
`GITHUB_TOKEN` no puede instalar paquetes desde ningún repositorio privado además del repositorio donde se ejecuta la acción.  You cannot currently use `GITHUB_TOKEN` to authenticate to {% data variables.product.prodname_github_container_registry %}.
{% endif %}

{% data reusables.package_registry.actions-configuration %}
