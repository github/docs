---
title: Introduction to GitHub Packages
intro: '{% data variables.product.prodname_registry %} es un paquete de software que hospeda el servicio que te permite hospedar tus paquetes de software de forma privada {% if currentVersion == "github-ae@latest" %} para los usuarios específicos o internamente para tu empresa{% else %}o públicamente{% endif %} y utiliza los paquetes como dependencias en tus proyectos.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Acerca de {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} es un servicio de alojamiento de paquetes, totalmente integrado con {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_registry %} combina tu código fuente y paquetes en un solo lugar para proporcionar una administración de permisos {% if currentVersion != "github-ae@latest" %}y facturación {% endif %}integradas, para que puedas centralizar tu desarrollo de software en {% data variables.product.product_name %}.

Puedes integrar {% data variables.product.prodname_registry %} con las API de {% data variables.product.product_name %}, {% data variables.product.prodname_actions %} y webhooks para crear un flujo de trabajo de DevOps de extremo a extremo que incluya tu código, CI y soluciones de implementación.

{% data variables.product.prodname_registry %} offers different package registries for commonly used package managers, such as npm, RubyGems, Apache Maven, Gradle, Docker, and NuGet. {% if currentVersion == "free-pro-team@latest" %}The {% data variables.product.prodname_container_registry %} is optimized for containers and supports Docker and OCI images.{% endif %} For more information on the different package registries that {% data variables.product.prodname_registry %} supports, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."

{% if currentVersion == "free-pro-team@latest" %}

![Diagram showing packages support for Docker, Container registry, RubyGems, npm, Apache Maven, NuGet, and Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagram showing packages support for Docker, RubyGems, npm, Apache Maven, Gradle, NuGet, and Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

You can view a package's README, as well as metadata such as licensing, download statistics, version history, and more on {% data variables.product.product_name %}. Para obtener más información, consulta "[Visualizar paquetes](/packages/manage-packages/viewing-packages)".

#### Overview of package permissions and visibility

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Permisos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                  |
| {% if currentVersion == "free-pro-team@latest" %}The permissions for a package are either inherited from the repository where the package is hosted or, for packages in the {% data variables.product.prodname_container_registry %}, they can be defined for specific user or organization accounts. For more information, see "[Configuring a package’s access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)." {% else %}Each package inherits the permissions of the repository where the package is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version.{% endif %} |                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                  |
| Visibilidad                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | {% data reusables.package_registry.public-or-private-packages %}

For more information, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)."

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de la facturación para {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obtner más información, consulta la sección "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% endif %}

### Formatos y clientes admitidos
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported clients or formats. -->

{% data variables.product.prodname_registry %} usa los comandos de herramientas del paquete nativo con los que ya estás familiarizado para publicar e instalar versiones del paquete.
#### Soporte para los registros de paquetes

| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gema`              |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        |
| N/A        | Plataforma de administración del contenedor Docker             | `Dockerfile`                        | `Docker`            |

{% if currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**Nota:** Docker no es compatible cuando inhabilitas el aislamiento de subdominios.

{% endnote %}

Para obtener más información acerca del aislamiento de subdominios, consulta la sección "[Habilitar el aislamiento de subdominios](/enterprise/admin/configuration/enabling-subdomain-isolation)".

{% endif %}

For more information about configuring your package client for use with {% data variables.product.prodname_registry %}, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."

{% if currentVersion == "free-pro-team@latest" %}
For more information about Docker and the {% data variables.product.prodname_container_registry %}, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)" and "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)."
{% endif %}
### Autenticarte en {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Administrar paquetes

{% if currentVersion == "free-pro-team@latest" %}
You can delete a package in the {% data variables.product.product_name %} user interface or using the REST API. Para obtener más información, consulta la sección "[API del {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
You can delete a private or public package in the {% data variables.product.product_name %} user interface. O, para los paquetes con alcance de repo, puedes borrar una versión de un paquete privado utilizando GraphQL.
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
Puedes borrar una versión de un paquete privado en la interface de usuario de {% data variables.product.product_name %} o utilizar la API de GraphQL.
{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can delete a version of a package in the {% data variables.product.product_name %} user interface or using the GraphQL API.
{% endif %}

Cuando usas la API de GraphQL para consultar y eliminar paquetes privados, debes usar el mismo token que usas para autenticarte en {% data variables.product.prodname_registry %}. Para obtener más información, consulta las secciones "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Borrar un paquete](/packages/learn-github-packages/deleting-a-package){% endif %}" y "[Formar llamados con GraphQL](/graphql/guides/forming-calls-with-graphql)".

Puedes configurar webhooks para suscribirte a eventos relacionados con paquetes, como cuando se publica o se actualiza un paquete. Para obtener más información, consulta el "[evento de webhook de `package`](/webhooks/event-payloads/#package)".

### Contactar con soporte técnico

{% if currentVersion == "free-pro-team@latest" %}
Si tienes comentarios o solicitudes de características para {% data variables.product.prodname_registry %}, usa el formulario de comentarios de [ para {% data variables.product.prodname_registry %}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).

Contacta el {% data variables.contact.github_support %} sobre {% data variables.product.prodname_registry %} usando [nuestro formulario de contacto](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si:

* Experimentas alguna cosa que contradice la documentación
* Encuentras errores vagos o poco claros
* Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

{% else %}
Si necesitas soporte para {% data variables.product.prodname_registry %}, por favor, contacta a tus administradores de sitio.

{% endif %}
