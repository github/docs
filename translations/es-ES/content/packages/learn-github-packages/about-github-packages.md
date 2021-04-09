---
title: Acerca de GitHub Packages
intro: '{% data variables.product.prodname_registry %} es un paquete de software que hospeda el servicio que te permite hospedar tus paquetes de software de forma privada {% if currentVersion == "github-ae@latest" %} para los usuarios específicos o internamente para tu empresa{% else %}o públicamente{% endif %} y utiliza los paquetes como dependencias en tus proyectos.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
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

Puedes alojar múltiples paquetes en un repositorio y ver más información acerca de cada paquete al ver el README del paquete, las estadísticas de descarga, el historial de la versión y mucho más.

![Diagrama ue muestra la compatibilidad de paquetes para npm, RubyGems, Apache Maven, Nuget y Docker](/assets/images/help/package-registry/packages-overview-diagram.png)

{% if currentVersion == "free-pro-team@latest" %}
Cuando creas un flujo de trabajo de {% data variables.product.prodname_actions %}, puedes usar el `GITHUB_TOKEN` para publicar e instalar paquetes en {% data variables.product.prodname_registry %} sin la necesidad de almacenar y administrar un token de acceso personal. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_github_container_registry %}](/packages/guides/about-github-container-registry)".

{% data reusables.package_registry.container-registry-beta %}

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

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obtner más información, consulta la sección "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### Formatos y clientes admitidos

{% data variables.product.prodname_registry %} usa los comandos de herramientas del paquete nativo con los que ya estás familiarizado para publicar e instalar versiones del paquete.
#### Soporte para los registros de paquetes

| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gem`               |
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
- {% if currentVersion == "free-pro-team@latest" or if currentVersion ver_gt "enterprise-server@3.0" %}Para borrar un paquete en {% data variables.product.product_name %}, tu token deberá tener por lo menos los alcances de `delete:packages` y `read:packages`. El alcance de `repo` también se requiere para los paquetes con dicho alcance.{% elsif currentVersion ver_lt "enterprise-server@3.1" %}Para borrar una versión específica de un paquete privado en {% data variables.product.product_name %}, tu token debe tener el alcance `delete:packages` y `repo`. Los paquetes públicos no se pueden borrar.{% elsif currentVersion == "github-ae@latest" %}Para borrar una versión específica de un paquete en {% data variables.product.product_name %}, tu token debe tener los alcances de `delete:packages` y `repo`.{% endif %} Para obtener más información, consulta la sección "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Borrar un paquete](/packages/learn-github-packages/deleting-a-package){% endif %}".

| Ámbito                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Descripción                                                                          | Permisos de repositorio |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------- |
| `read:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Descarga e instala paquetes de {% data variables.product.prodname_registry %}        | lectura                 |
| `write:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Carga y publica paquetes en {% data variables.product.prodname_registry %}           | escritura               |
| `delete:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                      |                         |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} Borrar paquetes de {% data variables.product.prodname_registry %} {% elsif currentVersion ver_lt "enterprise-server@3.1" %} Borrar versiones específicas de paquetes privados en el {% data variables.product.prodname_registry %}{% elsif currentVersion == "github-ae@latest" %} Borrar versiones específicas de paquetes en el {% data variables.product.prodname_registry %} {% endif %} |                                                                                      |                         |
| admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                      |                         |
| `repo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Carga y borra los paquetes (junto con los `write:packages`, o los `delete:packages`) | escritura o admin       |

Cuando creas un flujo de trabajo de {% data variables.product.prodname_actions %}, puedes usar el `GITHUB_TOKEN` para publicar e instalar paquetes en {% data variables.product.prodname_registry %} sin la necesidad de almacenar y administrar un token de acceso personal.

Para obtener más información, consulta:
- Encuentras algo que contradice la documentación
- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

### Administrar paquetes

{% if currentVersion == "free-pro-team@latest" %}
Puedes borrar un paquete en la
interface de usuario de {% data variables.product.product_name %} o utilizando la API de REST. Para obtener más información, consulta la sección "[API del {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
Puedes borrar un paquete público o privado en la
interfaz de usuario de {% data variables.product.product_name %}. O, para los paquetes con alcance de repo, puedes borrar una versión de un paquete privado utilizando GraphQL.
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
Puedes borrar una versión de un paquete privado en la
interface de usuario de {% data variables.product.product_name %} o utilizando la API de GraphQL.
{% endif %}

{% if currentVersion == "github-ae@latest" %}
Puedes borrar una versión de un paquete en la
interface de usuario de {% data variables.product.product_name %} o utilizando la API de GraphQL.
{% endif %}

Cuando usas la API de GraphQL para consultar y eliminar paquetes privados, debes usar el mismo token que usas para autenticarte en {% data variables.product.prodname_registry %}. Para obtener más información, consulta las secciones "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Borrar un paquete](/packages/learn-github-packages/deleting-a-package){% endif %}" y "[Formar llamados con GraphQL](/graphql/guides/forming-calls-with-graphql)".

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
