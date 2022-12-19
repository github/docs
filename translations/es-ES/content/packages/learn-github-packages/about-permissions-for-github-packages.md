---
title: Acerca de los permisos para los Paquetes de GitHub
intro: Aprende cómo administrar los permisos de tus paquetes.
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 0159cee64d6faaeffe6257c9dc589f9fcda7a0ba
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193085'
---
{% ifversion packages-registries-v2 %} Los permisos de los paquetes se pueden limitar a un usuario u organización o bien a un repositorio.

## Permisos granulares para paquetes con alcance de organización/usuario

Los paquetes con permisos granulares tienen un alcance de una cuenta personal o de organización. Puedes cambiar el control de accesos y la visibilidad del paquete de forma separada desde un repositorio que esté conectado (o enlazado) a un paquete.

Los siguientes registros de {% data variables.product.prodname_registry %} admiten permisos detallados.

- {% data variables.product.prodname_container_registry %} {% ifversion packages-npm-v2 %}- registro npm{% endif %} {% ifversion packages-nuget-v2 %}- registro NuGet{% endif %}

{% endif %}

## Permisos para {% ifversion packages-registries-v2 %}del ámbito del repositorio{% endif %}paquetes

Un paquete {% ifversion packages-registries-v2 %}del ámbito del repositorio {% endif %}hereda los permisos y la visibilidad del repositorio que lo posee. Puede encontrar un paquete con ámbito de repositorio si va a su página principal y hace clic en el vínculo **Paquetes** de la parte derecha. {% ifversion fpt or ghec %}Para más información, vea "[Conexión de un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)".{% endif %}

{% ifversion packages-registries-v2 %} Los siguientes registros de {% data variables.product.prodname_registry %} **solo** admiten permisos del ámbito de repositorio.

{% ifversion not fpt or ghec %}: Registro de Docker (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}: registro npm{% endif %}
- Registro de RubyGems
- Registro de Apache maven
- Registro de Gradle {% ifversion packages-nuget-v2 %}{% else %}- Registro de NuGet{% endif %}

Para {% ifversion ghes %}los {% data variables.product.prodname_container_registry %}{% else %}demás registros{% endif %}, puedes optar por permitir que los paquetes se limiten a un usuario u organización o bien se vinculen a un repositorio. {% ifversion docker-ghcr-enterprise-migration %}Para obtener información sobre la migración al {% data variables.product.prodname_container_registry %}, consulta "[Migración al {% data variables.product.prodname_container_registry %} desde el registro de Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)".{% endif %}

{% endif %}

{% ifversion packages-registries-v2 %}
## Permisos de visibilidad y acceso para las imágenes de contenedor

{% data reusables.package_registry.visibility-and-access-permissions %}

Para más información, vea "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

## Administrar paquetes

{% data reusables.package_registry.packages-classic-pat-only %}

Para utilizar o administrar un paquete que hospede un registro de paquete, debes utilizar un {% data variables.product.pat_v1 %} con el alcance adecuado y tu cuenta personal debe tener los permisos adecuados.

Por ejemplo:
-  Para descargar e instalar los paquetes desde un repositorio, el {% data variables.product.pat_v1 %} debe tener el ámbito `read:packages` y la cuenta de usuario debe tener permisos de lectura.
- {% ifversion fpt or ghes or ghec %}Para eliminar un paquete en {% data variables.product.product_name %}, el {% data variables.product.pat_v1 %} debe tener al menos el ámbito `delete:packages` y `read:packages`. El ámbito `repo` también es necesario para los paquetes con ámbito de repositorio. Para más información, vea "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% elsif ghae %}Para eliminar una versión especificada de un paquete en {% data variables.product.product_name %}, el {% data variables.product.pat_v1 %} debe tener el ámbito `delete:packages` y `repo`. Para más información, vea "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}

| Ámbito | Descripción | Permiso necesario |
| --- | --- | --- |
|`read:packages`| Descarga e instala paquetes de {% data variables.product.prodname_registry %} | leer |
|`write:packages`| Carga y publica paquetes en {% data variables.product.prodname_registry %} | escritura |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Borrar paquetes del {% data variables.product.prodname_registry %} {% elsif ghae %} Borrar versiones específicas de los paquetes del {% data variables.product.prodname_registry %} {% endif %} | admin |
| `repo` | Carga y eliminación de paquetes (junto con `write:packages`, o `delete:packages`) | escritura o admin |

Al crear un flujo de trabajo de {% data variables.product.prodname_actions %}, puede usar `GITHUB_TOKEN` para publicar e instalar paquetes en {% data variables.product.prodname_registry %} sin necesidad de almacenar y administrar un {% data variables.product.pat_generic %}.

Para obtener más información, consulta:{% ifversion fpt or ghec %}
- "[Configuración de la visibilidad y el control de acceso de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[Publicación e instalación de un paquete con {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Ámbitos disponibles](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## Mantener el acceso a los paquetes en los flujos de trabajo de {% data variables.product.prodname_actions %}

Para garantizar que tus flujos de trabajo mantendrán el acceso a tus paquetes, asegúrate de que estás utilizando el token de acceso correcto en tu flujo de trabajo y de haber habilitado el acceso a las {% data variables.product.prodname_actions %} para tu paquete.

Para más información conceptual sobre {% data variables.product.prodname_actions %} o ejemplos de uso de paquetes en flujos de trabajo, vea "[Administración de paquetes de GitHub mediante flujos de trabajo de Acciones de GitHub](/packages/managing-github-packages-using-github-actions-workflows)".

### Tokens de acceso  

- Para publicar los paquetes asociados con el repositorio del flujo de trabajo, use `GITHUB_TOKEN`.
- Para instalar paquetes asociados con otros repositorios privados a los que `GITHUB_TOKEN` no puede acceder, usa un {% data variables.product.pat_v1 %}.

Para más información sobre el uso de `GITHUB_TOKEN` en flujos de trabajo de {% data variables.product.prodname_actions %}, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

{% ifversion fpt or ghec %}
### Acceso a las {% data variables.product.prodname_actions %} para las imágenes de contenedor

Para garantizar que tus flujos de trabajo tienen acceso a tu imagen de contenedor, debes habilitar el acceso a las {% data variables.product.prodname_actions %} para los repositorios en donde se ejecuta tu flujo de trabajo. Puedes encontrar este ajuste en la página de configuración de tu paquete. Para más información, vea "[Garantía del acceso de flujo de trabajo al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".

{% endif %}
