---
title: Borrar y restablecer un paquete
intro: 'Aprende cómo borrar o restablecer un paquete.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## Soporte para borrado y restablecimiento de paquetes en {% data variables.product.prodname_dotcom %}

En {% data variables.product.prodname_dotcom %}, si tienes el acceso necesario, puedes borrar:
- todo un paquete privado
- todo un paquete público, si es que no hay más de 25 descargas de ninguna versión de éste
- una versión específica de un paquete privado
- una versíón específica de un paquete púlico, si dicha versión no tiene más de 25 descargas

{% note %}

**Nota:**
- No puedes borrar un paquete público específico si alguna de las versiones de éste tiene más de 25 descargas. En este escenario, contacta a [Soporte de GitHub](https://support.github.com/contact) para que te proporcionen asistencia.
- Cuando borres paquetes públicos, toma en cuenta que podrías dañar proyetos que dependen de ellos.

{% endnote %}

En {% data variables.product.prodname_dotcom %}, también puedes restablecer un paquete completo o una versión de paquete si:
- Restableces el paquete dentro de los primeros 30 días después de que se borró.
- El espacio de nombre del paquete aún se encuentra disponible y no se ha utilizado en un paquete nuevo.

## Soporte de la API de paquetes

{% if currentVersion == "free-pro-team@latest" %}

Puedes utiliza la API de REST para administrar tus paquetes. Para obtener más información, consulta la sección "[API del {% data variables.product.prodname_registry %}](/rest/reference/packages)".

{% endif %}

En el caso de los paquetes que heredan sus permisos y accesos de los repositorios, puedes utilizar GraphQL para borrar las versiones de los paquetes específicos.{% if currentVersion == "free-pro-team@latest" %} La API de GraphQL del {% data variables.product.prodname_registry %} no es compatible con contenedores o imágenes de Docker que utilicen el designador de nombre `https://ghcr.io/OWNER/PACKAGE-NAME`. Para obtener más información sobre la compatibilidad de GraphQL, consulta la sección "[Borrar una versión de un paquete con alcance de repositorio con GraphQL](#deleting-a-version-of-a-repository-scoped-package-with-graphql)".

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

## Permisos necesarios para borrar o restablecer un paquete

En el caso de los paquetes que heredan sus permisos de acceso de los repositorios, puedes borrar un paquete si tienes permisos administrativos en el repositorio.

Los paquetes en {% data variables.product.prodname_registry %} con alcance de repositorio incluyen los paquetes:
- npm
- RubyGems
- maven
- Gradle
- NuGet
- Imagenes de docker en `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`

{% if currentVersion == "free-pro-team@latest" %}

Para borrar un paquete que tenga permisos granulares separados de un repositorio, tales como contenedores o imágenes de Docker que se almacenan en `https://ghcr.io/OWNER/PACKAGE-NAME`, debes tener acceso administrativo en este.
 <!--PLACEHOLDER - once packages restructuring is done this is a good place to link to the access control and visibility article.-->

{% data reusables.package_registry.container-registry-beta %}

{% endif %}


## Automatizar el borrado de versiones de paquetes con {% data variables.product.prodname_actions %}

Puedes automatizar el borrado de versiones de paquetes utilizando una acción oficial que cree {% data variables.product.company_short %}. Esta acción se encuentra disponible en el repositorio de acciones o en {% data variables.product.prodname_marketplace %} y solo funciona con los paquetes con alcance de repositorio. Para obtener más información, consulta l a acción de "Borrar Versiones de Paquetes" en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/delete-package-versions) o en el [repositorio de acciones](https://github.com/actions/delete-package-versions).

## Borrar la versión de un paquete

### Borrar la versión de un paquete con alcance de repositorio en {% data variables.product.prodname_dotcom %}

Para borrar una versión de un paquete con alcance de repositorio debes tener permisos de administrador en el repositorio al que pertenezca dicho paquete. Para obtener más información, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
5. A la izquierda, da clic en **Administrar versiones**.
5. A la derecha de la versión que quieres borrar, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Borrar versión**. ![Botón de borrar versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

### Borrar una versión de un paquete con alcance de repositorio con GraphQL

En el caso de los paquetes que heredan sus permisos y acceso de los repositorios, puedes utilizar a GraphQL para borrar las versiones específicas de estos.

{% if currentVersion == "free-pro-team@latest" %}
GraphQL no es compatible con contenedores o imagenes de Docker en `ghcr.io`.
{% endif %}<!--PLACEHOLDER for when API link is live:  For full support, use the REST API. For more information, see the "\[{% data variables.product.prodname_registry %} API\](/rest/reference/packages)." -->Usa la mutación `deletePackageVersion` en la API de GraphQL. Debes usar un token con ámbitos `read:packages`, `delete:packages` y `repo`. Para obtener más información acerca de los tokens, consulta "[Acerca de {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)".

El siguiente ejemplo demuestra cómo borrar una versión de paquete utilizando una `packageVersionId` de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Para encontrar todos los paquetes privados que publicaste en {% data variables.product.prodname_registry %}, junto con los ID de versión de los paquetes, puedes usar la conexión `registryPackagesForQuery`. Necesitarás un token con los ámbitos `read:packages` y `repo`. Necesitarás un token con los ámbitos `read:packages` y `repo`.

Para obtener más información acerca de la mutación `deletePackageVersion`, consulta "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

No puedes borrar directamente todo un paquete utilizando GraphQL, pero si borras cada versión de un paquete, este ya no se mostrará en {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}
### Borrar una versión de un paquete con alcance de usuario en {% data variables.product.prodname_dotcom %}

Para borrar una versión específica de un paquete con alcance de usuario en {% data variables.product.prodname_dotcom %}, tal como para una imagen de Docker en `ghcr.io`, sigue estos pasos. Para borrar un paquete completo, consulta la sección "[Borrar un paquete entero con alcance de usuario en {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)".

{% data reusables.package_registry.container-registry-beta %}

Para revisar quién puede borrar una versión de paquete, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. A la izquierda, da clic en **Administrar versiones**.
5. A la derecha de la versión que quieres borrar, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Borrar versión**. ![Botón de borrar versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Borrar una versión de un paquete con alcance de organización en GitHub

Para borrar una versión específica de un paquete con alcance de organización en {% data variables.product.prodname_dotcom %}, tal como una imagen de Docker en `ghcr.io`, sigue estos pasos. Para borrar un paquete completo, consulta la sección "[Borrar un paquete entero con alcance de organización en {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)".

{% data reusables.package_registry.container-registry-beta %}

Para revisar quién puede borrar una versión de paquete, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. A la izquierda, da clic en **Administrar versiones**.
5. A la derecha de la versión que quieres borrar, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Borrar versión**. ![Botón de borrar versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar el borrado de la versión del paquete](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)
{% endif %}

## Borrar un paquete completo

### Borrar un paquete completo con alcance de repositorio en {% data variables.product.prodname_dotcom %}

Para borrar un paquete completo con alcance de repositorio, debes tener permisos administrativos en el repositorio al que pertenezca dicho paquete. Para obtener más información, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
4. Debajo de "Zona de Peligro", haz clic en **Borrar este paquete**.
5. Para confirmar, revisa el mensaje de confirmación, ingresa el nombre de tu paquete, y haz clic en **Entriendo, borrar este paquete.** ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}
### Borrar un paquete completo con alcance de usuario en {% data variables.product.prodname_dotcom %}

Para revisar quién puede borrar un paquete, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. A la izquierda, da clic en **Opciones**. ![Opción del menú "Opciones"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Debajo de "Zona de peligro", da clic en **Borra este paquete**. ![Botón de borrar versión del paquete](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar el borrado, teclea el nombre del paquete y da clic en **Entiendo las consecuencias, borrar este paquete**. ![Botón para confirmar el borrado de la versión del paquete](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Borrar un paquete completo con alcance de organización en {% data variables.product.prodname_dotcom %}

Para revisar quién puede borrar un paquete, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. A la izquierda, da clic en **Opciones**. ![Opción del menú "Opciones"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Debajo de "Zona de peligro", da clic en **Borra este paquete**. ![Botón para eliminar paquete](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar el borrado, teclea el nombre del paquete y da clic en **Entiendo las consecuencias, borrar este paquete**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-deletion.png)
{% endif %}

## Restablecer paquetes

Puedes restablecer un paquete o versión que hayas borrado si:
- Restableces el paquete dentro de los primeros 30 días después de que se borró.
- El mismo designador de nombre del paquete y su versión se encuentran disponibles y no se han reutilizado para un paquete nuevo.

Por ejemplo, si borraste un paquete de rubygem con el nombre `octo-package` que tuviera un alcance para el repositorio `octo-repo-owner/octo-repo`, entonces solo podrías restablecer el paquete si su designador de nombre `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` estuviera disponible todavía, suponiendo que no hayan pasado 30 días.

También debes de cumplir con estos requisitos de permisos:
  - Para los paquetes con alcance de repositorio: Tienes permisos de administrador en el repositorio al que pertenece el paquete que se borró.
  - Para los paquetes con alcance de cuenta de usuario: El paquete borrado pertenece a tu cuenta de usuario.
  - Para los paquetes con alcance de organización: Tienes permisos de administrador en el paquete que se borró en la organización a la cual este pertenece.

Para obtener más información, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

Una vez que se restablezca el paquete, este utilizará el designador de nombre que ya tenía. Si ya no está disponible el mismo designador de nombre del paquete, no podrás restablecerlo. En este caso, para restablecer el paquete que se borró, primero deberás borrar el paquete nuevo que utiliza el designador de nombre del paquete que se borró.

### Restablecer un paquete en una organización

Puedes restablecer un paquete borrado a través de la configuración de cuenta de tu organización siempre y cuando dicho paquete estuviera en uno de tus repositorios o tuviera permisos granulares y tuviera el alcance de tu cuenta de organización.

Para revisar quién puede restablecer un paquete en una organización, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
3. A la izquierda, da clic en **Paquetes**.
4. Debajo de "Paquetes Borrados", junto al paquete que quieres restablecer, haz clic en **Restablecer**. ![Botón de restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, teclea el nombre del paquete y haz clic en **Entiendo las consencuencias, restablecer este paquete**. ![Botón de confirmación para restablecer el paquete](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### Restablecer un paquete con alcance de cuenta de usuario

Puedes restablecer un paquete que se haya borrado a través de la configuración de tu cuenta de usuario, siempre y cuando haya estado en uno de tus repositorios o hay tenido el alcance de tu cuenta de usuario. Para obtener más información, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.user_settings.access_settings %}
2. A la izquierda, da clic en **Paquetes**.
4. Debajo de "Paquetes Borrados", junto al paquete que quieres restablecer, haz clic en **Restablecer**. ![Botón de restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, teclea el nombre del paquete y haz clic en **Entiendo las consencuencias, restablecer este paquete**. ![Botón de confirmación para restablecer el paquete](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### Restablecer la versión de un paquete

Puedes restablecer una versión de paquete desde la página de llegada del mismo. Para revisar quién puede restablecer un paquete, consulta la sección "[Permisos necesarios](#required-permissions-to-delete-or-restore-a-package)".

1. Navega a la página de llegada de tu paquete.
2. A la derecha, haz clic en **Configuración del paquete**.
2. A la izquierda, da clic en **Administrar versiones**.
3. En la parte superior derecha, utiliza el menú desplegable de "Versiones" y selecciona **Borrados**. ![Menú desplegable de versiones que muestra la opción borrada](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Junto a la versión del paquete que se haya borrado y que quieras restablecer, haz clic en **Restablecer**. ![Opción de restablecer junto a la versión de un paquete borrado](/assets/images/help/package-registry/restore-package-version.png)
5. Para confirmar, haz clic en **Entiendo las consecuencias, restablecer esta versión.** ![Confirmar el restablecimiento de versión de un paquete](/assets/images/help/package-registry/confirm-package-version-restoration.png)
