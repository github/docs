---
title: Introducción a los Paquetes de GitHub
intro: '{% data variables.product.prodname_registry %} es un paquete de software que hospeda el servicio que te permite hospedar tus paquetes de software de forma privada {% ifversion ghae %} para los usuarios específicos o internamente para tu empresa{% else %}o públicamente{% endif %} y utiliza los paquetes como dependencias en tus proyectos.'
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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introducción
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## Acerca de {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} es un servicio de alojamiento de paquetes, totalmente integrado con {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_registry %} combina tu código fuente y paquetes en un solo lugar para proporcionar una administración de permisos {% ifversion not ghae %}y facturación {% endif %}integradas, para que puedas centralizar tu desarrollo de software en {% data variables.product.product_name %}.

You can integrate {% data variables.product.prodname_registry %} with {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs, {% data variables.product.prodname_actions %}, and webhooks to create an end-to-end DevOps workflow that includes your code, CI, and deployment solutions.

El {% data variables.product.prodname_registry %} ofrece diversos registros de paquetes para los adminsitradores de paquetes que se utilizan comunmente, tales como npm, RubyGems, Apache Maven, Gradle, Docker, y NuGet. {% ifversion fpt or ghec %}El {% data variables.product.prodname_container_registry %} de {% data variables.product.prodname_dotcom %} se optimiza para los contenedores y es compatible con imágenes de Docker y OCI.{% endif %} Para obtener más información sobre los diferentes registros de paquete que son compatibles con el {% data variables.product.prodname_registry %}, consulta la sección "[Trabajar con un registro del {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".

{% ifversion fpt or ghec %}

![Diagrama que muestra la compatibilidad de paquetes para el registro, RubyGems, npm, Apache Maven, NuGet y Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagrama ue muestra la compatibilidad de paquetes para el registro de Docker, RubyGems, npm, Apache Maven, Gradle, NuGet y Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

Puedes ver el README de un paquete, así como los metadatos tales como el licenciamiento, estadísticas de descarga, historial de la versión y más en {% data variables.product.product_name %}. Para obtener más información, consulta "[Visualizar paquetes](/packages/manage-packages/viewing-packages)".

### Resumen de los permisos y visibilidad de los paquetes

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Permisos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                  |
| {% ifversion fpt or ghec %}Es posible heredar los permisos para un paquete del repositorio donde este se hospeda o, para los paquetes en el {% data variables.product.prodname_container_registry %}, pueden definirse para cuentas de usuario y organización específicas. Para obtener más información, consulta la sección "[Configurar la visibilidad y el control de accesos de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)". {% else %}Cada paquete hereda los permisos del repositorio en donde este mismo se hospeda. <br> <br> Por ejemplo, cualquiera con permisos de lectura en un repositorio puede instalar un paquete como una dependencia en un proyecto y cualquiera con permisos de escritura puede publicar una versión nueva de un paquete.{% endif %} |                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                  |
| Visibilidad                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | {% data reusables.package_registry.public-or-private-packages %}

Para obtener más información, consulta la sección "[Acerca de los permisos para el {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

{% ifversion fpt or ghec %}
## Acerca de la facturación para {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obtner más información, consulta la sección "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% endif %}

## Formatos y clientes admitidos
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported clients or formats. -->

{% data variables.product.prodname_registry %} usa los comandos de herramientas del paquete nativo con los que ya estás familiarizado para publicar e instalar versiones del paquete.
### Soporte para los registros de paquetes

| Lenguaje   | Descripción                                                    | Formato del paquete                 | Cliente del paquete |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------- |
| JavaScript | Gestor de paquetes Node                                        | `package.json`                      | `npm`               |
| Ruby       | Gestor de paquetes RubyGems                                    | `Gemfile`                           | `gema`              |
| Java       | Herramienta de administración y comprensión Apache Maven       | `pom.xml`                           | `mvn`               |
| Java       | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts` | `gradle`            |
| .NET       | Administración del paquete NuGet para .NET                     | `nupkg`                             | `dotnet` CLI        |
| N/A        | Plataforma de administración del contenedor Docker             | `Dockerfile`                        | `Docker`            |

{% ifversion ghes %}
{% note %}

**Nota:** Docker no es compatible cuando inhabilitas el aislamiento de subdominios.

{% endnote %}

Para obtener más información acerca del aislamiento de subdominios, consulta la sección "[Habilitar el aislamiento de subdominios](/enterprise/admin/configuration/enabling-subdomain-isolation)".

{% endif %}

Para obtener más información sobre cómo configurar tu cliente de paquete para utilizarlo con el {% data variables.product.prodname_registry %}, consulta la sección "[Trabajar con un registro del {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".

{% ifversion fpt or ghec %}
Para obtener más información sobre Docker y sobre el {% data variables.product.prodname_container_registry %}, consulta la sección "[Trabajar con el registro de contenedores](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".
{% endif %}
## Autenticarte en {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## Administrar paquetes

{% ifversion fpt or ghec %}
You can delete a package in the {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} user interface or using the REST API. Para obtener más información, consulta la sección "[API del {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

{% ifversion ghes > 3.0 %}
Puedes borrar un paquete público o privado en la interface de usuario de {% data variables.product.product_name %}. O, para los paquetes con alcance de repo, puedes borrar una versión de un paquete privado utilizando GraphQL.
{% endif %}

{% ifversion ghes < 3.1 %}
Puedes borrar una versión de un paquete privado en la interface de usuario de {% data variables.product.product_name %} o utilizar la API de GraphQL.
{% endif %}

{% ifversion ghae %}
Puedes borrar una versión de un paquete en la interface de usuario de {% data variables.product.product_name %} o utilizar la API de GraphQL.
{% endif %}

Cuando usas la API de GraphQL para consultar y eliminar paquetes privados, debes usar el mismo token que usas para autenticarte en {% data variables.product.prodname_registry %}. Para obtener más información, consulta las secciones "{% ifversion fpt or ghes > 3.0 or ghec %}[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Borrar un paquete](/packages/learn-github-packages/deleting-a-package){% endif %}" y "[Formar llamadas con GraphQL]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql)".

Puedes configurar webhooks para suscribirte a eventos relacionados con paquetes, como cuando se publica o se actualiza un paquete. Para obtener más información, consulta el "[evento de webhook de `package`](/webhooks/event-payloads/#package)".

## Contactar con soporte técnico

{% ifversion fpt or ghec %}
Si tienes comentarios o solicitudes de características para {% data variables.product.prodname_registry %}, usa el formulario de comentarios de [ para {% data variables.product.prodname_registry %}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).

Contacta el {% data variables.contact.github_support %} sobre {% data variables.product.prodname_registry %} usando [nuestro formulario de contacto](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si:

* Experimentas alguna cosa que contradice la documentación
* Encuentras errores vagos o poco claros
* Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

{% else %}
Si necesitas soporte para {% data variables.product.prodname_registry %}, por favor, contacta a tus administradores de sitio.

{% endif %}
