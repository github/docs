---
title: Acerca de GitHub Packages
intro: '{% data variables.product.prodname_registry %} es un servicio de alojamiento de paquete de software que te permite alojar tus paquetes de software de forma privada o pública y usar paquetes como dependencias en tus proyectos.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Acerca de {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} es un servicio de alojamiento de paquetes, totalmente integrado con {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_registry %} combina tu código fuente y tus paquetes en un solo lugar para proporcionar facturación y gestión de permisos integrada, para que puedas centralizar tu desarrollo de software en {% data variables.product.product_name %}.

Puedes integrar {% data variables.product.prodname_registry %} con las API de {% data variables.product.product_name %}, {% data variables.product.prodname_actions %} y webhooks para crear un flujo de trabajo de DevOps de extremo a extremo que incluya tu código, CI y soluciones de implementación.

Puedes alojar múltiples paquetes en un repositorio y ver más información acerca de cada paquete al ver el README del paquete, las estadísticas de descarga, el historial de la versión y mucho más.

<!--This diagram excludes ghcr.io since it's not released for GHES yet.-->
{% if currentVersion ver_gt "enterprise-server@2.21" %}

![Diagram showing the GitHub Packages hosting urls for npm, RubyGems, Apache Maven, Gradle, Nuget, and Docker](/assets/images/help/package-registry/ghes-packages-diagram.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Cuando creas un flujo de trabajo de {% data variables.product.prodname_actions %}, puedes usar el `GITHUB_TOKEN` para publicar e instalar paquetes en {% data variables.product.prodname_registry %} sin la necesidad de almacenar y administrar un token de acceso personal. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_github_container_registry %}](/packages/guides/about-github-container-registry)".

{% data reusables.package_registry.container-registry-beta %}

![Diagram showing the GitHub Packages hosting urls for npm, RubyGems, Apache Maven, Gradle, Nuget, and Docker](/assets/images/help/package-registry/packages-overview-diagram.png)

{% endif %}

#### Visualizar paquetes

Puedes revisar el README del paquete, algunos metadatos como los detalles de la licencia, las estadísticas de descarga, el historial de versiones y más en {% data variables.product.product_name %}. Para obtener más información, consulta "[Visualizar paquetes](/packages/manage-packages/viewing-packages)".

#### Acerca de los permisos y la visibilidad de los paquetes

|                          | Registros de los paquetes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ubicaciones de hospedaje | Puedes hospedar paquetes múltiples en un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Permisos                 | {{ site.data.reusables.package_registry.public-or-private-packages }} Puedes utilizar los roles y equipos de {{ site.data.variables.product.prodname_dotcom }} para limitar quién puede instalar o publicar cada paquete, ya que los paquetes heredan los permisos del repositorio. Cualquier persona con permisos de lectura para un repositorio puede instalar un paquete como una dependencia en un proyecto, y cualquier persona con permisos de escritura puede publicar una nueva versión del paquete. |
| Visibilidad              | {% data reusables.package_registry.public-or-private-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de la facturación para {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}{% data reusables.package_registry.packages-spending-limit-brief %} Para obtener más información, consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### Formatos y clientes admitidos

{% data variables.product.prodname_registry %} usa los comandos de herramientas del paquete nativo con los que ya estás familiarizado para publicar e instalar versiones del paquete.
#### Soporte para los registros de paquetes

{% if currentVersion == "free-pro-team@latest" %}
Los registros de paquetes utilizan a `PACKAGE-TYPE.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` como la URL de hospedaje de paquetes, reemplazando `PACKAGE-TYPE` con el espacio de nombre de paquete. Por ejemplo, tu Gemfile se hospedará en `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`.

{% else %}

Los tipos de paquete compatibles en {% data variables.product.product_location %} pueden variar ya que tu administrador de sitio puede habilitar o inhabilitar el soporte para diferentes tipos de paquetes. Para obtener más informacón, consulta la sección "[Administrar GitHub Packages para tu empresa](/enterprise/admin/packages)".

Si {% data variables.product.product_location %} tiene habilitado el aislamiento de subdominio, entonces los registros de paquete utilizarán `PACKAGE-TYPE.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` como la URL de hospedaje de paquetes, reemplazando a `PACKAGE-TYPE` con el espacio de nombre del paquete. Por ejemplo, tu Dockerfile se hospedará en `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`.

Si se inhabilitó el aislamiento de subdominios en {% data variables.product.product_location %}, entonces los registros de paquete utilizarán `HOSTNAME/_registry/PACKAGE-TYPE/OWNER/REPOSITORY/IMAGE-NAME` como la URL de hospedaje de pquetes. Por ejemplo, tu Gemfile se hospedaría en `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME`, reemplazando *HOSTNAME* con el nombre del host de tu instancia de {% data variables.product.prodname_ghe_server %}. |{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete | Nombre de espacio del paquete                         |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- | ----------------------------------------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               | `npm.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gem`               | `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        | `nuget.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |

{% else %}

Con el aislamiento de subdominios habilitado en {% data variables.product.product_location %}:

| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete | Nombre de espacio del paquete                   |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- | ----------------------------------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               | `npm.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gem`               | `rubygems.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        | `nuget.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| N/A        | Plataforma de administración del contenedor Docker             | `Dockerfile`                        | `Docker`            | `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`   |

Con el aislamiento de subdominios inhabilitado en {% data variables.product.product_location %}:

| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete | Nombre de espacio del paquete                             |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- | --------------------------------------------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               | `HOSTNAME/_registry/npm/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gem`               | `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        | `HOSTNAME/_registry/nuget/OWNER/REPOSITORY/IMAGE-NAME`    |

{% note %}

**Nota:** Docker no es compatible cuando inhabilitas el aislamiento de subdominios.

{% endnote %}

Para obtener más información acerca del aislamiento de subdominios, consulta la sección "[Habilitar el aislamiento de subdominios](/enterprise/admin/configuration/enabling-subdomain-isolation)".

{% endif %}

Para obtener más información sobre cómo configurar tu cliente de paquetes para utilizarlo con el {% data variables.product.prodname_registry %}, consulta la sección "[Guías del cliente de paquetes para el {% data variables.product.prodname_registry %}](/packages/guides/package-client-guides-for-github-packages)".

{% if currentVersion == "free-pro-team@latest" %}
Para obtener más información acerca de Docker y del
{% data variables.product.prodname_github_container_registry %}, consulta la sección "[Guías de contenedor para {% data variables.product.prodname_registry %}](/packages/guides/container-guides-for-github-packages)".
{% endif %}
### Autenticarte en {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

### Administrar paquetes

Para instalar o publicar un paquete, debes usar un token con el ámbito adecuado, y tu cuenta de usuario debe tener los permisos pertinentes para ese repositorio.

Por ejemplo:
-  Para descargar e instalar paquetes desde un repositorio, tu token debe tener el ámbito `read:packages`, y tu cuenta de usuario debe tener permisos de lectura para el repositorio.
- Para eliminar una versión especificada de un paquete privado en {% data variables.product.product_name %}, tu token debe tener los ámbitos `delete:packages` y `repo`. Los paquetes públicos no se pueden eliminar. Para obtener más información, consulta "[Eliminar un paquete](/packages/manage-packages/deleting-a-package)".

| Ámbito            | Descripción                                                                                            | Permisos de repositorio |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| `read:packages`   | Descarga e instala paquetes de {% data variables.product.prodname_registry %}                          | lectura                 |
| `write:packages`  | Carga y publica paquetes en {% data variables.product.prodname_registry %}                             | escritura               |
| `delete:packages` | Elimina versiones especificadas de paquetes privados de {% data variables.product.prodname_registry %} | admin                   |
| `repo`            | Carga y borra los paquetes (junto con los `write:packages`, o los `delete:packages`)                   | escritura o admin       |

Cuando creas un flujo de trabajo de {% data variables.product.prodname_actions %}, puedes usar el `GITHUB_TOKEN` para publicar e instalar paquetes en {% data variables.product.prodname_registry %} sin la necesidad de almacenar y administrar un token de acceso personal.

Para obtener más información, consulta:
- Encuentras algo que contradice la documentación
- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

### Administrar paquetes

You can delete a version of a private package in the {% data variables.product.product_name %} user interface or using the GraphQL API. Cuando usas la API de GraphQL para consultar y eliminar paquetes privados, debes usar el mismo token que usas para autenticarte en {% data variables.product.prodname_registry %}. Para obtener más información, consulta las secciones "[Borrar un paquete](/packages/manage-packages/deleting-a-package)" y "[Formar llamadas con GraphQL](/graphql/guides/forming-calls-with-graphql)".

Puedes configurar webhooks para suscribirte a eventos relacionados con paquetes, como cuando se publica o se actualiza un paquete. Para obtener más información, consulta el "[evento de webhook de `package`](/webhooks/event-payloads/#package)".

### Contactar con soporte técnico

{% if currentVersion == "free-pro-team@latest" %}
Si tienes retroalimentación o solicitudes de características para
{% data variables.product.prodname_registry %}, utiliza el [formato de retroalimentación para {% data variables.product.prodname_registry %}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).

Contacta el {% data variables.contact.github_support %} sobre {% data variables.product.prodname_registry %} usando [nuestro formulario de contacto](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si:

* Experimentas alguna cosa que contradice la documentación
* Encuentras errores vagos o poco claros
* Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

{% else %}
Si necesitas soporte para
{% data variables.product.prodname_registry %}, por favor, contacta a tus administradores de sistema.

{% endif %}
