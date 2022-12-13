---
title: Introducción a los paquetes de GitHub
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
shortTitle: Introduction
ms.openlocfilehash: ae15c6358deb3363f81617a6604f2dbe2a654af1
ms.sourcegitcommit: da73949b8f8bd71d40247f1f9c49f8f4c362ecd0
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/28/2022
ms.locfileid: '147431932'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## <a name="about--data-variablesproductprodname_registry-"></a>Acerca de {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} es una plataforma para hospedar y administrar paquetes, incluidos contenedores y otras dependencias. {% data variables.product.prodname_registry %} combina tu código fuente y paquetes en un solo lugar para proporcionar una administración de permisos{% ifversion fpt or ghec %} y facturación {% endif %} integradas, para que puedas centralizar tu desarrollo de software en {% data variables.product.product_name %}.

Puedes integrar el {% data variables.product.prodname_registry %} con las API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. {% data variables.product.prodname_actions %} y webhooks para crear un flujo de trabajo de DevOps de punto a punto que incluya tu código, IC y soluciones de despliegue.

El {% data variables.product.prodname_registry %} ofrece diversos registros de paquetes para los adminsitradores de paquetes que se utilizan comunmente, tales como npm, RubyGems, Apache Maven, Gradle, Docker, y NuGet. El {% data variables.product.prodname_container_registry %} de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} se optimiza para los contenedores y es compatible con imágenes de Docker y OCI.{% endif %} Para obtener más información sobre los diferentes registros de paquete que son compatibles con el {% data variables.product.prodname_registry %}, consulta "[Uso de un registro de {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)."

{% ifversion fpt or ghec %}

![Diagrama que muestra la compatibilidad de paquetes para el registro, RubyGems, npm, Apache Maven, NuGet y Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagrama ue muestra la compatibilidad de paquetes para el registro de Docker, RubyGems, npm, Apache Maven, Gradle, NuGet y Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

Puedes ver el README de un paquete, así como los metadatos tales como el licenciamiento, estadísticas de descarga, historial de la versión y más en {% data variables.product.product_name %}. Para más información, vea "[Visualización de paquetes](/packages/manage-packages/viewing-packages)".

{% ifversion ghes %}

Para obtener más información sobre la configuración de {% data variables.product.prodname_registry %} en {% data variables.product.product_name %}, consulta "[Introducción a {% data variables.product.prodname_registry %} para la empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".

{% endif %}

### <a name="overview-of-package-permissions-and-visibility"></a>Resumen de los permisos y visibilidad de los paquetes

|                    |        |
|--------------------|--------------------|
| Permisos        | {% ifversion fpt or ghec %}Los permisos de un paquete se heredan del repositorio donde se hospeda el paquete o, para los paquetes del {% data variables.product.prodname_container_registry %}, se pueden definir para cuentas de usuario u organización específicas. Para más información, vea "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)". {% else %}Cada paquete hereda los permisos del repositorio en donde este mismo se hospeda. <br> <br> Por ejemplo, cualquier persona con permisos de lectura para un repositorio puede instalar un paquete como una dependencia en un proyecto, y cualquier persona con permisos de escritura puede publicar una nueva versión del paquete.{% endif %} |
| Visibilidad         | {% data reusables.package_registry.public-or-private-packages %} |

Para más información, vea "[Acerca de los permisos para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

{% ifversion fpt or ghec %}
## <a name="about-billing-for--data-variablesproductprodname_registry-"></a>Acerca de la facturación para {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obtener más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% endif %}

## <a name="supported-clients-and-formats"></a>Formatos y clientes admitidos
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %} usa los comandos de herramientas del paquete nativo con los que ya estás familiarizado para publicar e instalar versiones del paquete.
### <a name="support-for-package-registries"></a>Soporte para los registros de paquetes

| Idioma | Descripción | Formato del paquete | Cliente del paquete |
| --- | --- | --- | --- |
| JavaScript | Gestor de paquetes Node | `package.json`  | `npm` |
| Ruby |  Gestor de paquetes RubyGems | `Gemfile` |  `gem` |
| Java | Herramienta de administración y comprensión Apache Maven | `pom.xml` |  `mvn` |
| Java | Herramienta de automatización de construcción Gradle para Java | `build.gradle` o `build.gradle.kts`  | `gradle`  |
| .NET | Administración del paquete NuGet para .NET | `nupkg`  |  `dotnet` CLI |
| N/D | Plataforma de administración del contenedor Docker | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

**Nota:** Al habilitar el registro de Docker, se recomienda encarecidamente habilitar también el aislamiento de subdominio. Para más información, vea "[Habilitación del aislamiento de subdominios](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)".

{% endnote %}

{% endif %}

Para obtener más información sobre cómo configurar tu cliente de paquete para utilizarlo con el {% data variables.product.prodname_registry %}, consulta "[Uso de un registro de {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)."

{% ifversion fpt or ghec %} Para obtener más información sobre Docker y {% data variables.product.prodname_container_registry %}, consulta "[Uso del registro de contenedor](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".
{% endif %}
## <a name="authenticating-to--data-variablesproductprodname_registry-"></a>Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## <a name="managing-packages"></a>Administración de paquetes

{% ifversion fpt or ghec %} Puedes eliminar un paquete en la interfaz de usuario de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} o mediante la API REST. Para obtener más información, consulta "[API {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

{% ifversion ghes %} Puedes borrar un paquete público o privado en la interface de usuario de {% data variables.product.product_name %}. O, para los paquetes con alcance de repo, puedes borrar una versión de un paquete privado utilizando GraphQL.
{% endif %}

{% ifversion ghae %} Puedes eliminar una versión de un paquete en la interfaz de usuario de {% data variables.product.product_name %} o mediante GraphQL API.
{% endif %}

Cuando usas la API de GraphQL para consultar y eliminar paquetes privados, debes usar el mismo token que usas para autenticarte en {% data variables.product.prodname_registry %}. Para obtener más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)" y "[Formación de llamadas con GraphQL](/graphql/guides/forming-calls-with-graphql)".

Puedes configurar webhooks para suscribirte a eventos relacionados con paquetes, como cuando se publica o se actualiza un paquete. Para obtener más información, vea el "[evento de webhook `package`](/webhooks/event-payloads/#package)".

## <a name="contacting-support"></a>Contactando con el soporte técnico

{% ifversion fpt or ghec %} Si tienes comentarios o solicitudes de características para {% data variables.product.prodname_registry %}, usa una [discusión de {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/actions-and-packages).

Ponte en contacto con {% data variables.contact.github_support %} acerca de {% data variables.product.prodname_registry %} con [nuestro formulario de contacto](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si:

* Experimentas alguna cosa que contradice la documentación
* Encuentras errores vagos o poco claros
* Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

{% else %} Si necesitas soporte técnico para {% data variables.product.prodname_registry %}, ponte en contacto con los administradores del sitio.

{% endif %}
