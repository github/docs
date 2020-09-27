---
title: Acerca de GitHub Packages
intro: '{{ site.data.variables.product.prodname_registry }} es un servicio de alojamiento de paquete de software que te permite alojar tus paquetes de software de forma privada o pública y usar paquetes como dependencias en tus proyectos.'
product: '{{ site.data.reusables.gated-features.packages }}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.package_registry.packages-ghes-release-stage }}

### Acerca de {{ site.data.variables.product.prodname_registry }}

{{ site.data.variables.product.prodname_registry }} es un servicio de alojamiento de paquetes, totalmente integrado con {{ site.data.variables.product.prodname_dotcom }}. {{ site.data.variables.product.prodname_registry }} combina tu código fuente y tus paquetes en un solo lugar para proporcionar facturación y gestión de permisos integrada, para que puedas centralizar tu desarrollo de software en {{ site.data.variables.product.product_name }}.

Puedes integrar {{ site.data.variables.product.prodname_registry }} con las API de {{ site.data.variables.product.product_name }}, {{ site.data.variables.product.prodname_actions }} y webhooks para crear un flujo de trabajo de DevOps de extremo a extremo que incluya tu código, CI y soluciones de implementación.

Puedes alojar múltiples paquetes en un repositorio y ver más información acerca de cada paquete al ver el README del paquete, las estadísticas de descarga, el historial de la versión y mucho más.

{% if currentVersion == "free-pro-team@latest" %}
Cuando creas un flujo de trabajo de {{ site.data.variables.product.prodname_actions }}, puedes usar el `GITHUB_TOKEN` para publicar e instalar paquetes en {{ site.data.variables.product.prodname_registry }} sin la necesidad de almacenar y administrar un token de acceso personal. Para obtener más información, consulta "[Acerca de {{ site.data.variables.product.prodname_github_container_registry }}](/packages/getting-started-with-github-container-registry/about-github-container-registry)".

{{ site.data.reusables.package_registry.container-registry-beta }}

{% endif %}

#### Ver paquetes

You can review the package's README, some metadata like licensing, download statistics, version history, and more on {{ site.data.variables.product.product_name }}. Para obtener más información, consulta "[Visualizar paquetes](/packages/publishing-and-managing-packages/viewing-packages)".

#### About package permissions and visibility
{% if currentVersion == "free-pro-team@latest" %}
|                   | Package registries                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {{ site.data.variables.product.prodname_github_container_registry }}                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosting locations | You can host multiple packages in one repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                              | You can host multiple container images in one organization or user account.                                                                                                            |
| Permissions       | {{ site.data.reusables.package_registry.public-or-private-packages }} Puedes utilizar los roles y equipos de {{ site.data.variables.product.prodname_dotcom }} para limitar quién puede instalar o publicar cada paquete, ya que los paquetes heredan los permisos del repositorio. Cualquier persona con permisos de lectura para un repositorio puede instalar un paquete como una dependencia en un proyecto, y cualquier persona con permisos de escritura puede publicar una nueva versión del paquete. | For each container image, you can choose the access level that others have. The permissions for container image access are separate from your organization and repository permissions. |
 Visibility | {{ site.data.reusables.package_registry.public-or-private-packages }} | You can set the visibility of each of your container images. A private container image is only visible to people and teams who are given access within your organization. A public container image is visible to anyone. | Anonymous access | N/A | You can access public container images anonymously.

{% else %}
|                   | Package registries                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosting locations | You can host multiple packages in one repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Permissions       | {{ site.data.reusables.package_registry.public-or-private-packages }} Puedes utilizar los roles y equipos de {{ site.data.variables.product.prodname_dotcom }} para limitar quién puede instalar o publicar cada paquete, ya que los paquetes heredan los permisos del repositorio. Cualquier persona con permisos de lectura para un repositorio puede instalar un paquete como una dependencia en un proyecto, y cualquier persona con permisos de escritura puede publicar una nueva versión del paquete. |
| Visibility        | {{ site.data.reusables.package_registry.public-or-private-packages }}                                                                                                                                                                                                                                                                                                                                                                                                                                          |

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

For more information about permissions and visibility for {{ site.data.variables.product.prodname_github_container_registry }}, see "[Configuring access control and visibility for containers](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de la facturación para {{ site.data.variables.product.prodname_registry }}

{{ site.data.reusables.package_registry.packages-billing }} Para obtener más información, consulta "[Acerca de la facturación para {{ site.data.variables.product.prodname_registry }}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".


{{ site.data.reusables/package_registry/container-registry-beta-billing-note }}
{% endif %}

### Formatos y clientes admitidos

{{ site.data.variables.product.prodname_registry }} usa los comandos de herramientas del paquete nativo con los que ya estás familiarizado para publicar e instalar versiones del paquete.

{% if currentVersion == "free-pro-team@latest" %}
#### Support for {{ site.data.variables.product.prodname_github_container_registry }}

The {{ site.data.variables.product.prodname_github_container_registry }} hosts containers at `ghcr.io/OWNER/IMAGE-NAME`.

| Cliente del paquete | Lenguaje | Formato del paquete | Descripción             |
| ------------------- | -------- | ------------------- | ----------------------- |
| docker              | N/A      | `Dockerfile`        | Gestor de paquetes Node |

For more information about the container support offered by {{ site.data.variables.product.prodname_github_container_registry }}, see "[About {{ site.data.variables.product.prodname_github_container_registry }}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."
{% endif %}

#### Support for package registries

{% if currentVersion == "free-pro-team@latest" %}
Package registries use `PACKAGE-TYPE.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL, replacing `PACKAGE-TYPE` with the Package namespace. For example, your Gemfile will be hosted at `rubygem.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`.

{% else %}

The package types supported on {{ site.data.variables.product.product_location_enterprise }} may vary since your site administrator can enable or disable support for different package types. For more information, see "[Managing GitHub Packages for your enterprise](/enterprise/admin/packages)."

If {{ site.data.variables.product.product_location_enterprise }} has subdomain isolation enabled, then package registries will use `PACKAGE-TYPE.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL, replacing `PACKAGE-TYPE` with the Package namespace. For example, your Dockerfile will be hosted at `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`.

If {{ site.data.variables.product.product_location_enterprise }} has subdomain isolation disabled, then package registries will use `HOSTNAME/_registry/PACKAGE-TYPE/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL. For example, your Gemfile will be hosted at `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME`, replacing *HOSTNAME* with the host name of your {{ site.data.variables.product.prodname_ghe_server }} instance. |{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete | Package namespace                                     |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- | ----------------------------------------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               | `npm.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gema`              | `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`          |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`          |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        | nuget.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |

{% else %}

With subdomain isolation enabled on {{ site.data.variables.product.product_location_enterprise }}:

| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete | Package namespace                               |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- | ----------------------------------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               | `npm.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gema`              | `rubygems.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        | `nuget.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| N/A        | Plataforma de administración del contenedor Docker             | `Dockerfile`                        | `Docker`            | `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`   |

With subdomain isolation disabled on {{ site.data.variables.product.product_location_enterprise }}:

| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete | Package namespace                                         |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- | --------------------------------------------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               | `HOSTNAME/_registry/npm/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gema`              | `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        | `HOSTNAME/_registry/nuget/OWNER/REPOSITORY/IMAGE-NAME`    |

{% note %}

**Note:** Docker is not supported when subdomain isolation is disabled.

{% endnote %}

For more information about subdomain isolation, see "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)."

{% endif %}

Para obtener más información acerca de la configuración de tu cliente de paquete para usar con {{ site.data.variables.product.prodname_registry }}, consulta [Usar {{ site.data.variables.product.prodname_registry }} con el ecosistema de tu proyecto](/packages/using-github-packages-with-your-projects-ecosystem)."

### Autenticar a {{ site.data.variables.product.prodname_registry }}

{{ site.data.reusables.package_registry.authenticate-packages }}

{% if currentVersion == "free-pro-team@latest" %}
### Sobre tokens

| Ámbito            | Descripción                                                                                                                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read:packages`   | Download and install container images from {{ site.data.variables.product.prodname_github_container_registry }}                                                                                                                                                                                     |
| `write:packages`  | Upload and publish container images to {{ site.data.variables.product.prodname_github_container_registry }}                                                                                                                                                                                         |
| `delete:packages` | Delete specified versions of private or public container images from {{ site.data.variables.product.prodname_github_container_registry }}. For more information, see "[Deleting a container image](/packages/managing-container-images-with-github-container-registry/deleting-a-container-image)." |

To learn about available scopes and permissions for container images, see "[About {{ site.data.variables.product.prodname_github_container_registry }}](/packages/getting-started-with-github-container-registry/about-github-container-registry)" or "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

Para obtener más información, consulta las secciones "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token/)" y "[Alcances disponibles](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)".

{% endif %}

### Administrar paquetes

Para instalar o publicar un paquete, debes usar un token con el ámbito adecuado, y tu cuenta de usuario debe tener los permisos pertinentes para ese repositorio.

Por ejemplo:
-  Para descargar e instalar paquetes desde un repositorio, tu token debe tener el ámbito `read:packages`, y tu cuenta de usuario debe tener permisos de lectura para el repositorio. Si el repositorio es privado, tu token también debe tener el ámbito `repo`.
- Para eliminar una versión especificada de un paquete privado en {{ site.data.variables.product.product_name }}, tu token debe tener los ámbitos `delete:packages` y `repo`. Los paquetes públicos no se pueden eliminar. Para obtener más información, consulta "[Eliminar un paquete](/packages/publishing-and-managing-packages/deleting-a-package)".

| Ámbito            | Descripción                                                                                                                               | Permisos de repositorio    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `read:packages`   | Descarga e instala paquetes de {{ site.data.variables.product.prodname_registry }}                                                        | lectura                    |
| `write:packages`  | Carga y publica paquetes en {{ site.data.variables.product.prodname_registry }}                                                           | escritura                  |
| `delete:packages` | Elimina versiones especificadas de paquetes privados de {{ site.data.variables.product.prodname_registry }}                               | admin                      |
| `repo`            | Instala, carga y elimina determinados paquetes en repositorios privados (junto con `read:packages`, `write:packages` o `delete:packages`) | lectura, escritura o admin |

Cuando creas un flujo de trabajo de {{ site.data.variables.product.prodname_actions }}, puedes usar el `GITHUB_TOKEN` para publicar e instalar paquetes en {{ site.data.variables.product.prodname_registry }} sin la necesidad de almacenar y administrar un token de acceso personal.

Para obtener más información, consulta:
- Encuentras algo que contradice la documentación
- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

### Administrar paquetes

Puedes eliminar una versión de un paquete privado en {{ site.data.variables.product.product_name }} o usar la API de GraphQL. Cuando usas la API de GraphQL para consultar y eliminar paquetes privados, debes usar el mismo token que usas para autenticarte en {{ site.data.variables.product.prodname_registry }}. Para obtener más información, consulta las secciones "[Borrar un paquete](/packages/publishing-and-managing-packages/deleting-a-package)" y "[Formar llamadas con GraphQL](/v4/guides/forming-calls/)".

Puedes configurar webhooks para suscribirte a eventos relacionados con paquetes, como cuando se publica o se actualiza un paquete. Para obtener más información, consulta el "[evento de webhook de `package`](/webhooks/event-payloads/#package)".

### Contactar con soporte técnico

{% if currentVersion == "free-pro-team@latest" %}
Si tienes comentarios o solicitudes de características para {{ site.data.variables.product.prodname_registry }}, usa el formulario de comentarios de [ para {{ site.data.variables.product.prodname_registry }}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).

Contacta el {{ site.data.variables.contact.github_support }} sobre {{ site.data.variables.product.prodname_registry }} usando [nuestro formulario de contacto](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si:

* Encuentras algo que contradice la documentación
* Encuentras errores vagos o poco claros
* Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

{% else %}
If you need support for {{ site.data.variables.product.prodname_registry }}, please contact your site administrators.

{% endif %}
