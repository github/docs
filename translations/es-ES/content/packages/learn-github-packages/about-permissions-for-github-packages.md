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
ms.openlocfilehash: b3dbe8280bf01f668e8a7d1596e9e1abb7ad2746
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '147066910'
---
{% ifversion fpt or ghec %} Los permisos de los paquetes pueden tener ámbito de repositorio o de usuario u organización.
{% endif %}

## <a name="permissions-for-repository-scoped-packages"></a>Permisos para los paquetes con alcance de repositorio

Un paquete con alcance de repositorio hereda los permisos y la visibilidad del repositorio al que pertenece el paquete. Puede encontrar un paquete con ámbito de repositorio si va a su página principal y hace clic en el vínculo **Paquetes** de la parte derecha. {% ifversion fpt or ghec %}Para más información, vea "[Conexión de un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)".{% endif %}

Los registros del {% data variables.product.prodname_registry %} que se mencionan a continuación utilizan permisos con alcance de repositorio:

  {% ifversion not fpt or ghec %}- Registro de Docker (`docker.pkg.github.com`){% endif %}
  - Registro de npm
  - Registro de RubyGems
  - Registro de Apache maven
  - Registro de NuGet

{% ifversion fpt or ghec %}
## <a name="granular-permissions-for-userorganization-scoped-packages"></a>Permisos granulares para paquetes con alcance de organización/usuario

Los paquetes con permisos granulares tienen un alcance de una cuenta personal o de organización. Puedes cambiar el control de accesos y la visibilidad del paquete de forma separada desde un repositorio que esté conectado (o enlazado) a un paquete.

Actualmente, solo el {% data variables.product.prodname_container_registry %} ofrece permisos granulares para tus paquetes de imagen de contenedor.

## <a name="visibility-and-access-permissions-for-container-images"></a>Permisos de visibilidad y acceso para las imágenes de contenedor

{% data reusables.package_registry.visibility-and-access-permissions %}

Para más información, vea "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

## <a name="about-scopes-and-permissions-for-package-registries"></a>Administrar paquetes

Para utilizar o administrar un paquete que hospede un registro de paquete, debes utilizar un token con el alcance adecuado y tu cuenta personal debe tener los permisos adecuados.

Por ejemplo:
-  Para descargar e instalar los paquetes desde un repositorio, el token debe tener el ámbito `read:packages` y la cuenta de usuario debe tener permisos de lectura.
- {% ifversion fpt or ghes or ghec %}Para eliminar un paquete en {% data variables.product.product_name %}, el token debe tener al menos el ámbito `delete:packages` y `read:packages`. El ámbito `repo` también es necesario para los paquetes con ámbito de repositorio. Para más información, vea "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% elsif ghae %}Para eliminar una versión especificada de un paquete en {% data variables.product.product_name %}, el token debe tener el ámbito `delete:packages` y `repo`. Para más información, vea "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}

| Ámbito | Descripción | Permiso necesario |
| --- | --- | --- |
|`read:packages`| Descarga e instala paquetes de {% data variables.product.prodname_registry %} | leer |
|`write:packages`| Carga y publica paquetes en {% data variables.product.prodname_registry %} | escritura |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Borrar paquetes del {% data variables.product.prodname_registry %} {% elsif ghae %} Borrar versiones específicas de los paquetes del {% data variables.product.prodname_registry %} {% endif %} | admin |
| `repo` | Carga y eliminación de paquetes (junto con `write:packages`, o `delete:packages`) | escritura o admin |

Al crear un flujo de trabajo de {% data variables.product.prodname_actions %}, puede usar `GITHUB_TOKEN` para publicar e instalar paquetes en {% data variables.product.prodname_registry %} sin necesidad de almacenar y administrar un token de acceso personal.

Para obtener más información, consulta:{% ifversion fpt or ghec %}
- "[Configuración de la visibilidad y el control de acceso de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[Publicación e instalación de un paquete con {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Ámbitos disponibles](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## <a name="maintaining-access-to-packages-in--data-variablesproductprodname_actions--workflows"></a>Mantener el acceso a los paquetes en los flujos de trabajo de {% data variables.product.prodname_actions %}

Para garantizar que tus flujos de trabajo mantendrán el acceso a tus paquetes, asegúrate de que estás utilizando el token de acceso correcto en tu flujo de trabajo y de haber habilitado el acceso a las {% data variables.product.prodname_actions %} para tu paquete.

Para más información conceptual sobre {% data variables.product.prodname_actions %} o ejemplos de uso de paquetes en flujos de trabajo, vea "[Administración de paquetes de GitHub mediante flujos de trabajo de Acciones de GitHub](/packages/managing-github-packages-using-github-actions-workflows)".

### <a name="access-tokens"></a>Tokens de acceso  

- Para publicar los paquetes asociados con el repositorio del flujo de trabajo, use `GITHUB_TOKEN`.
- Para instalar paquetes asociados con otros repositorios privados a los que `GITHUB_TOKEN` no puede acceder, use un token de acceso personal

Para más información sobre el uso de `GITHUB_TOKEN` en flujos de trabajo de {% data variables.product.prodname_actions %}, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

{% ifversion fpt or ghec %}
### <a name="-data-variablesproductprodname_actions--access-for-container-images"></a>Acceso a las {% data variables.product.prodname_actions %} para las imágenes de contenedor

Para garantizar que tus flujos de trabajo tienen acceso a tu imagen de contenedor, debes habilitar el acceso a las {% data variables.product.prodname_actions %} para los repositorios en donde se ejecuta tu flujo de trabajo. Puedes encontrar este ajuste en la página de configuración de tu paquete. Para más información, vea "[Garantía del acceso de flujo de trabajo al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".

{% endif %}
