---
title: Borrar y restablecer un paquete
intro: Aprende cómo borrar o restablecer un paquete.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: 57f90bb6dbcda759e90444a40c7deef84d907b9c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193077'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Soporte para borrado y restablecimiento de paquetes en {% data variables.product.prodname_dotcom %}

En {% data variables.product.prodname_dotcom %}, si tienes el acceso necesario, puedes borrar:
- todo un paquete privado
- todo un paquete público, si es que no hay más de 5000 descargas de ninguna versión de este
- una versión específica de un paquete privado
- una versión específica de un paquete público, si la versión del paquete no tiene más de 5000 descargas

{% note %}

**Nota:**
- No puedes eliminar un paquete público específico si alguna versión del paquete tiene más de 5000 descargas. Ante este escenario, ponte en contacto con el equipo de [soporte técnico de GitHub](https://support.github.com/contact?tags=docs-packages) para obtener más ayuda.
- Cuando borres paquetes públicos, toma en cuenta que podrías dañar proyetos que dependen de ellos.

{% endnote %}

En {% data variables.product.prodname_dotcom %}, también puedes restablecer un paquete completo o una versión de paquete si:
- Restableces el paquete dentro de los primeros 30 días después de que se borró.
- El espacio de nombre del paquete aún se encuentra disponible y no se ha utilizado en un paquete nuevo.

## Soporte de la API de paquetes

{% data reusables.package_registry.packages-classic-pat-only %}

{% ifversion fpt or ghec %}

Puedes utiliza la API de REST para administrar tus paquetes. Para obtener más información, consulta "[API {% data variables.product.prodname_registry %}](/rest/reference/packages)".

{% endif %}

{% data reusables.package_registry.about-graphql-support %}

## Permisos necesarios para borrar o restablecer un paquete

{% ifversion packages-registries-v2 %} Con los registros que admiten permisos detallados, puedes optar por permitir que los paquetes tengan como ámbito un usuario u organización o bien que estén vincularlos a un repositorio.

Para eliminar un paquete que tenga permisos detallados independientes de un repositorio, como imágenes de contenedor almacenadas en {% ifversion ghes %}`https://containers.HOSTNAME/OWNER/PACKAGE-NAME`{% else %}`https://ghcr.io/OWNER/PACKAGE-NAME`{% endif %}{% ifversion packages-npm-v2 %} o paquetes almacenados en `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`{% endif %}, debes tener acceso de administrador al paquete. Para más información, vea "[Acerca de los permisos para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

En el caso de los paquetes que heredan sus permisos de acceso de los repositorios, puedes borrar un paquete si tienes permisos administrativos en el repositorio.

Algunos registros **solo** admiten paquetes con ámbito de repositorio. Para obtener una lista de estos registros, consulta "[Acerca de los permisos de {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

{% else %}

Puedes eliminar un paquete si tienes permisos de administrador para el repositorio en el que se ha publicado el paquete.

{% endif %}

## Borrar la versión de un paquete

### Eliminación de una versión de un paquete {% ifversion packages-registries-v2 %}con ámbito de repositorio {% endif %}en {% data variables.product.prodname_dotcom %}

Para eliminar una versión de un paquete {% ifversion packages-registries-v2 %}con ámbito de repositorio{% endif %}, debes tener permisos de administrador en el repositorio que posee el paquete. Para obtener más información, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. A la izquierda, haz clic en **Administrar versiones**.
5. A la derecha de la versión que quieres eliminar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Eliminar versión**.
  ![Botón para eliminar la versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **Entiendo las consecuencias y quiero eliminar esta versión**.
  ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### Eliminación de un paquete {% ifversion packages-registries-v2 %}con ámbito de repositorio{% endif %} con GraphQL

{% data reusables.package_registry.about-graphql-support %}{% ifversion fpt or ghec %} Para obtener información sobre cómo usar la API de REST, consulta la "[API de {% data variables.product.prodname_registry %}](/rest/reference/packages)".{% endif %}

Usa la mutación `deletePackageVersion` en GraphQL API. Debes usar un {% data variables.product.pat_v1 %} con los ámbitos `read:packages`, `delete:packages` y `repo`. Para obtener más información sobre {% data variables.product.pat_v1_plural %}, consulta "[Acerca de {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)".

En el ejemplo siguiente se muestra cómo eliminar una versión de paquete mediante un elemento `packageVersionId` de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Para encontrar todos los paquetes privados que has publicado en {% data variables.product.prodname_registry %}, junto con los identificadores de versión de los paquetes, puedes usar la conexión `packages` mediante el objeto `repository`. Necesitarás un {% data variables.product.pat_v1 %} con los ámbitos `read:packages` y `repo`. Para obtener más información, consulta la conexión [`packages`](/graphql/reference/objects#repository) o la interfaz [`PackageOwner`](/graphql/reference/interfaces#packageowner).

Para obtener más información sobre la mutación `deletePackageVersion`, consulta "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

No puedes borrar directamente todo un paquete utilizando GraphQL, pero si borras cada versión de un paquete, este ya no se mostrará en {% data variables.product.product_name %}.

{% endif %}

{% ifversion fpt or ghec %}
### Borrar una versión de un paquete con alcance de usuario en {% data variables.product.prodname_dotcom %}

Para eliminar una versión específica de un paquete con ámbito de usuario en {% data variables.product.prodname_dotcom %}, como una imagen de Docker en `ghcr.io`, sigue estos pasos. Para eliminar un paquete completo, consulta "[Eliminación de un paquete de ámbito de usuario completo en {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)."

Para revisar quién puede eliminar una versión del paquete, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. A la izquierda, haz clic en **Administrar versiones**.
5. A la derecha de la versión que quieres eliminar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Eliminar versión**.
  ![Botón para eliminar la versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **Entiendo las consecuencias y quiero eliminar esta versión**.
  ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Borrar una versión de un paquete con alcance de organización en {% data variables.product.prodname_dotcom %}

Para eliminar una versión específica de un paquete con ámbito de organización en {% data variables.product.prodname_dotcom %}, como una imagen de Docker en `ghcr.io`, sigue estos pasos.
Para eliminar un paquete completo, consulta "[Eliminación de un paquete de ámbito de organización completo en {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)."

Para revisar quién puede elimninar una versión de paquete, consulta "[Permisos necesarios para eliminar o restaurar un paquete](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. A la izquierda, haz clic en **Administrar versiones**.
5. A la derecha de la versión que quieres eliminar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Eliminar versión**.
  ![Botón para eliminar la versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **Entiendo las consecuencias y quiero eliminar esta versión**.
  ![Botón para confirmar la eliminación de la versión del paquete](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## Borrar un paquete completo

### Borrar un paquete completo con alcance de repositorio en {% data variables.product.prodname_dotcom %}

Para borrar un paquete completo con alcance de repositorio, debes tener permisos administrativos en el repositorio al que pertenezca dicho paquete. Para obtener más información, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. En "Zona de peligro", haz clic en **Eliminar este paquete**.
5. Para confirmarlo, revisa el mensaje de confirmación, escribe el nombre de tu paquete y haz clic en **Lo entiendo y quiero eliminar este paquete.** 
  ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### Borrar un paquete completo con alcance de usuario en {% data variables.product.prodname_dotcom %}

Para revisar quién puede eliminar un paquete, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. A la izquierda, haz clic en **Opciones**.
  ![Opción de menú "Opciones"](/assets/images/help/package-registry/options-for-container-settings.png)
6. En "Zona de peligro", haz clic en **Eliminar este paquete**.
  ![Botón para eliminar la versión del paquete](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **Entiendo las consecuencias y quiero eliminar este paquete**.
  ![Botón para confirmar la eliminación de la versión del paquete](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Borrar un paquete completo con alcance de organización en {% data variables.product.prodname_dotcom %}

Para revisar quién puede eliminar un paquete, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. A la izquierda, haz clic en **Opciones**.
  ![Opción de menú "Opciones"](/assets/images/help/package-registry/options-for-container-settings.png)
6. En "Zona de peligro", haz clic en **Eliminar este paquete**.
  ![Botón para eliminar el paquete](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **Entiendo las consecuencias y quiero eliminar este paquete**.
  ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## Restablecer paquetes

Puedes restablecer un paquete o versión que hayas borrado si:
- Restableces el paquete dentro de los primeros 30 días después de que se borró.
- El mismo designador de nombre del paquete y su versión se encuentran disponibles y no se han reutilizado para un paquete nuevo.

Por ejemplo, si tienes un paquete RubyGems eliminado denominado `octo-package` que tenía como ámbito el repositorio `octo-repo-owner/octo-repo`, solo puedes restaurar el paquete si el espacio de nombres `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` del paquete todavía está disponible y aún no han transcurrido 30 días.

{% ifversion fpt or ghec %} Para restaurar un paquete eliminado, también debes cumplir uno de estos requisitos de permisos:
  - Para los paquetes con ámbito de repositorio: tienes permisos de administrador para el repositorio que posee el paquete eliminado.{% ifversion fpt or ghec %}
  - Para los paquetes con ámbito de cuenta de usuario: el paquete eliminado pertenece a tu cuenta de usuario.
  - Para los paquetes con ámbito de organización: tienes permisos de administrador para el paquete eliminado en la organización que posee el paquete.{% endif %} {% endif %}

{% ifversion ghae or ghes %} Para eliminar un paquete, también debes tener permisos de administrador en el repositorio que posee el paquete eliminado.
{% endif %}

Para obtener más información, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

Una vez que se restablezca el paquete, este utilizará el designador de nombre que ya tenía. Si ya no está disponible el mismo designador de nombre del paquete, no podrás restablecerlo. En este caso, para restablecer el paquete que se borró, primero deberás borrar el paquete nuevo que utiliza el designador de nombre del paquete que se borró.

### Restablecer un paquete en una organización

 Puedes restablecer un paquete borrado a través de los ajustes de cuenta de tu organización, siempre y cuando el paquete estuviera en el repositorio que pertenece a esta{% ifversion fpt or ghec %} o tuviera permisos granulares y se le hubiera configurado un alcance para tu cuenta de organización{% endif %}.

Para revisar quién puede restaurar un paquete en una organización, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. En la izquierda, haga clic en **Packages**.
4. En "Paquetes eliminados", junto al paquete que quieres restaurar, haz clic en **Restaurar**.
  ![Botón Restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, escribe el nombre del paquete y haz clic en **Entiendo las consecuencias y quiero restaurar este paquete**.
  ![Botón de confirmación para restaurar el paquete](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### Restablecer un paquete con alcance de cuenta de usuario

Puedes restaurar un paquete que se haya eliminado mediante la configuración de tu cuenta de usuario, siempre y cuando haya estado en uno de tus repositorios o haya tenido como ámbito tu cuenta de usuario. Para obtener más información, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.user-settings.access_settings %}
2. En la izquierda, haga clic en **Packages**.
4. En "Paquetes eliminados", junto al paquete que quieres restaurar, haz clic en **Restaurar**.
  ![Botón Restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, escribe el nombre del paquete y haz clic en **Entiendo las consecuencias y quiero restaurar este paquete**.
  ![Botón de confirmación para restaurar el paquete](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### Restablecer la versión de un paquete

Puedes restablecer una versión de paquete desde la página de llegada del mismo. Para revisar quién puede restaurar un paquete, consulta "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

1. Navega a la página de llegada de tu paquete.
2. A la derecha, haz clic en **Configuración del paquete**.
2. A la izquierda, haz clic en **Administrar versiones**.
3. A la derecha, usa el menú desplegable "Versiones" y selecciona **Eliminado**.
  ![Menú desplegable de versiones que muestra la opción eliminada](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Junto a la versión del paquete eliminado que quieres restaurar, haz clic en **Restaurar**.
  ![Opción de restablecer junto a la versión de un paquete eliminado](/assets/images/help/package-registry/restore-package-version.png)
5. Para confirmarlo, haz clic en **Entiendo las consecuencias y quiero restaurar esta versión.** 
  ![Confirmación de la restauración de la versión del paquete](/assets/images/help/package-registry/confirm-package-version-restoration.png)
