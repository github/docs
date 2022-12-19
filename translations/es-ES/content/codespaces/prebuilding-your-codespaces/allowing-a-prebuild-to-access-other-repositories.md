---
title: Permiso para que una precompilación acceda a otros repositorios
shortTitle: Allow external repo access
intro: 'Puede permitir el acceso de la precompilación a otros repositorios de {% data variables.product.prodname_dotcom %} para que se pueda compilar correctamente.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: 0186078525944587bc4344e0a7d6a32468ce1cd7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158793'
---
Predeterminadamente, el flujo de trabajo de {% data variables.product.prodname_actions %} para una configuración de compilación previa solo puede acceder al contenido de su propio repositorio. Es posible que el proyecto use recursos adicionales, ubicados en otro lugar, para compilar el entorno de desarrollo.

## Permiso para que una precompilación tenga acceso de lectura a recursos externos

Puedes configurar el acceso de lectura a otros repositorios de {% data variables.product.prodname_dotcom %}, con el mismo propietario del repositorio, especificando permisos en el archivo `devcontainer.json` usado por la configuración de precompilación. Para obtener más información, consulta "[Administración del acceso a otros repositorios del codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

{% note %}

**Nota**: Solo puedes autorizar permisos de lectura de esta manera y el propietario del repositorio de destino debe ser el mismo que el propietario del repositorio para el que vas a crear la precompilación. Por ejemplo, si vas a crear una configuración de precompilación para el repositorio `octo-org/octocat`, podrás conceder permisos de lectura para otros repositorios `octo-org/*` si se especifica en el archivo `devcontainer.json` y siempre que tú tengas los permisos.

{% endnote %}

Al crear o editar una configuración de precompilación para un archivo `devcontainer.json` que configura el acceso de lectura a otros repositorios con el mismo propietario del repositorio, se te pedirá que concedas estos permisos al hacer clic en **Crear** o **Actualizar**. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

## Permiso para que una precompilación tenga acceso de escritura a recursos externos

Si el proyecto requiere acceso de escritura a los recursos o si los recursos externos residen en un repositorio con un propietario diferente al del repositorio para el que vas a crear una configuración de precompilación, puedes usar un {% data variables.product.pat_generic %} para conceder este acceso.

Tendrás que crear una cuenta personal y, después, usarla para crear un {% data variables.product.pat_v1 %} con los ámbitos adecuados.

1. Cree una cuenta personal en {% data variables.product.prodname_dotcom %}. 
   
   {% warning %}
   
   **Advertencia**: Aunque puedes generar el {% data variables.product.pat_v1 %} con la cuenta personal existente, se recomienda crear una con acceso solo a los repositorios de destino necesarios para el escenario. Esto se debe a que el permiso `repository` del token de acceso concede acceso a todos los repositorios a los que tiene acceso la cuenta. Para más información, vea "[Registro para obtener una nueva cuenta de GitHub](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)" y "[Fortalecimiento de la seguridad para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)".
   
   {% endwarning %}
1. Conceda a la nueva cuenta acceso de lectura a los repositorios necesarios. Para más información, vea "[Administración del acceso de un usuario a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)".
1. Mientras estés conectado a la nueva cuenta, crea un {% data variables.product.pat_v1 %} con el ámbito `repo`. Opcionalmente, si la precompilación tiene que descargar paquetes de {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, seleccione también el ámbito `read:packages`. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

   ![Ámbitos "repo" y "packages" seleccionados para un {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   Si en la precompilación se va a usar un paquete de {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, tendrá que conceder a la nueva cuenta acceso al paquete, o bien configurar el paquete para heredar los permisos de acceso del repositorio que se va a precompilar. Para más información, vea "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".   
{% ifversion ghec %}1. Autorice el token para su uso con el inicio de sesión único (SSO) de SAML, de modo que pueda acceder a los repositorios que pertenecen a organizaciones con el inicio de sesión único habilitado. Para obtener más información, consulta "[Autorización de un {% data variables.product.pat_generic %} para su uso con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

   ![Botón a fin de configurar el inicio de sesión único para un {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. Copie la cadena del token. Lo asignará a un secreto de repositorio de {% data variables.product.prodname_codespaces %}.
1. Vuelva a iniciar sesión en la cuenta que tiene acceso de administrador al repositorio. 
1. En el repositorio para el que quieres crear precompilaciones de {% data variables.product.prodname_github_codespaces %}, crea un secreto de repositorio de {% data variables.product.prodname_codespaces %} con el nombre `CODESPACES_PREBUILD_TOKEN` y asígnale el valor del token que has creado y copiado. Para más información, consulta "[Administración de secretos cifrados para el repositorio y la organización en {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)".

El {% data variables.product.pat_generic %} se usará para todas las precompilaciones posteriores creadas para el repositorio. A diferencia de otros secretos de repositorio de {% data variables.product.prodname_codespaces %}, el secreto `CODESPACES_PREBUILD_TOKEN` solo se usa para la precompilación y no estará disponible para usarlo en los codespaces creados desde el repositorio.

## Información adicional

- "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Solución de problemas de precompilaciones](/codespaces/troubleshooting/troubleshooting-prebuilds)"
