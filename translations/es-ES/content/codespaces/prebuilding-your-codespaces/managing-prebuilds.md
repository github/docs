---
title: Administrar las precompilaciones
shortTitle: Administrar las precompilaciones
intro: 'Puedes revisar, modificar y borrar las configuraciones de precompilación de tu repositorio.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

## Verificar, cambiar y borrar tus configuraciones de precompilación

Las precompilaciones que configuras para un repositorio se crean y actualizan utilizando un flujo de trabajo de {% data variables.product.prodname_actions %} que admistra el servicio de {% data variables.product.prodname_codespaces %}.

Dependiendo de los ajustes en una configuración de precompilación, el flujo de trabajo para actualizar la plantilla de precompilación podría activarse con estos eventos:

* Crear o actualizar la configuración de precompilación
* Subir una confirmación o una solicitud de cambios a una rama que está configurada para tener precompilaciones
* Cambiar cualquiera de los archivos de configuración del contenedor dev
* Un itinerario que definiste en la configuración de la precompilación
* Activar el flujo de trabajo manualmente

Los ajustes en la configuración de precompilación determinan qué eventos activan automáticamente una actualización de la plantilla de precompilación. Para obtener más información, consulta la sección "[Configurar las precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Las personas con acceso administrativo a un repositorio pueden verificar el progreso de las precompilaciones, así como editar y borrar las configuraciones de estas.

### Ver el progreso de las precompilaciones
Pudes ver el estado actual de la ejecución de flujo de trabajo más reciente para cada configuración de precompilación que hayas ajustado en la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio. Por ejemplo, "Actualmente en ejecución" o "Última ejecución hace 1 hora".

Para ver la salida de bitácora de la ejecución de flujo de trabajo de la precompilación más reciente, haz clic en **Ver la salida**.

![El botón de 'Ver salida'](/assets/images/help/codespaces/prebuilds-see-output.png)

Esto muestra la salida de la ejecución más reciente del flujo de trabajo en la pestaña de **Acciones**.

![La salida de flujo de trabajo de precompilación](/assets/images/help/codespaces/prebuilds-log-output.png)

Como alternativa, para ver todas las ejecuciones de flujo de trabajo de una precompilación asociadas con la rama especificada, haz clic en el botón de puntos suspensivos y elige **Ver ejecuciones** del menú desplegable.

![La opción de 'Ver ejecuciones' en el menú desplegable](/assets/images/help/codespaces/prebuilds-view-runs.png)

Esto muestra el historial de ejecución de flujo de trabajo para las precompilaciones para la rama asociada.

![El historial de ejecución de flujo de trabajo](/assets/images/help/codespaces/prebuilds-workflow-runs.png)

### Editar una configuración de precompilación

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación que quieras editar.
1. En el menú desplegable, haz clic en **Editar**.

   ![La opción de 'Editar' en el menú desplegable](/assets/images/help/codespaces/prebuilds-edit.png)

1. Haz los cambios requeridos en la configuración de precompilación y luego haz clic en **Actualizar**.

### Inhabilitar una configuración de precompilación

Para pausar la actualización de las plantillas de precompilación de una configuración, puedes inhabilitar las ejecuciones de flujo de trabajo para dicha configuración. El inhabilitar las ejecuciones de flujo de trabajo para una configuración de precompilación no borra ninguna plantilla de precompilación creada anteriormente para dicha configuración y, como resultado, los codespaces seguirán generándose desde una plantilla de precompilación existente.

El inhabilitar las ejecuciones de flujos de trabajo para una configuración precompilada es útil si necesitas investigar los fallos en la creación de plantillas.

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación que quieras inhabilitar.
1. En el menú desplegable, haz clic en **Inhabilitar ejecuciones**.

   ![La opción de 'Inhabilitar ejecuciones' en el menú desplegable](/assets/images/help/codespaces/prebuilds-disable.png)

1. Para confirmar que quieres inhabilitar esta configuración, haz clic en **OK**.

### Borrar una configuración de precompilación

El borrar una configuración de preocmpilación también borrar todas las plantillas de precompilación que se hayan creado previamente para dicha configuración. Como resultado, poco después de que borres una configuración, las precompilaciones generadas por dicha configuración ya no estarán disponibles cuando crees un codespace nuevo.

Después de que borras una configuración de precompilación, todavía se ejecutarán las ejecuciones de flujo de trabajo de dicha configuración que se hayan puesto en cola o que hayan iniciado. Se listarán en el historial de ejecución de flujo de trabajo junto con las ejecuciones de flujo de trabajo que se hayan completado previamente.

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación que quieras borrar.
1. En el menú desplegable, haz clic en **Borrar**.

   ![La opción de 'Borrar' en el menú desplegable](/assets/images/help/codespaces/prebuilds-delete.png)

1. Haz clic en **OK** para confirmar el borrado.

### Activar las precompilaciones manualmente

Puede ser útil activar una ejecución de flujo de trabajo manualmente para una configuración precompilada. Generalmente, esto solo es necesario si estás depurando un problema con el flujo de trabajo de una configuración de precompilación.

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación cuyo flujo de trabajo quieras activar.
1. En el menú desplegable, haz clic en **Activar manualmente**.

   ![La opción de 'Activar manualmente' en le menú desplegable](/assets/images/help/codespaces/prebuilds-manually-trigger.png)

## Permitir que la precompilación acceda a recursos externos

Predeterminadamente, el flujo de trabajo de {% data variables.product.prodname_actions %} para una configuración de compilación previa solo puede acceder al contenido de su propio repositorio. Tu proyecto podría utilizar recursos adicionales para compilar el ambiente de desarrollo, tal como archivos en otros repositorios, paquetes, imágenes de GHCR y API. Para permitir que tu configuración de precompilación acceda a estos recursos, necesitarás crear una cuenta personal nueva y luego utilizar esta cuenta para crear un token de acceso personal (PAT) con los alcances adecuados.

1. Create a new personal account on {% data variables.product.prodname_dotcom %}.

   {% warning %}

   **Warning**: Although you can generate the PAT using your existing personal account, we strongly recommend creating a new account with access only to the target repositories required for your scenario. This is because the access token's `repository` permission grants access to all of the repositories that the account has access to. Para obtener más información, consulta las secciones "[Registrarse para obtener una cuenta nueva de GitHub](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)" y "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)".

   {% endwarning %}
1. Give the new account read access to the required repositories. Para obtener más información, consulta la sección "[Administrar el acceso de un individuo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)".
1. While signed into the new account, create a PAT with the `repo` scope. Optionally, if the prebuild will need to download packages from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, also select the `read:packages` scope. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

   !['repo' and 'packages' scopes selected for a PAT](/assets/images/help/codespaces/prebuilds-select-scopes.png)

   If the prebuild will use a package from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, you will need to either grant the new account access to the package or configure the package to inherit the access permissions of the repository you are prebuilding. Para obtener más información, consulta la sección "[Configurar el control de accesos y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".
{% ifversion ghec %}1. Authorize the token for use with SAML single sign-on (SSO), so that it can access repositories that are owned by organizations with SSO enabled. Para obtener más información, consulta la sección "[Autorizar un token de acceso personal para utilizar con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

   ![The button to configure SSO for a PAT](/assets/images/help/codespaces/configure-SSO-for-PAT.png)

{% endif %}
1. Copy the token string. You will assign this to a {% data variables.product.prodname_codespaces %} repository secret.
1. Sign back into the account that has admin access to the repository.
1. In the repository for which you want to create {% data variables.product.prodname_codespaces %} prebuilds, create a new {% data variables.product.prodname_codespaces %} repository secret called `CODESPACES_PREBUILD_TOKEN`, giving it the value of the token you created and copied. For more information, see "[Managing encrypted secrets for your repository and organization for {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-a-repository)."

The PAT will be used for all subsequent prebuild templates created for your repository. Unlike other {% data variables.product.prodname_codespaces %} repository secrets, the `CODESPACES_PREBUILD_TOKEN` secret is only used for prebuilding and will not be available to use in codespaces created from your repository.

## Leer más

- "[Solucionar problemas de las compilaciones previas](/codespaces/troubleshooting/troubleshooting-prebuilds)"
