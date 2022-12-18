---
title: Administrar secretos cifrados para tus codespaces
intro: 'Puedes almacenar información sensible, como los tokens, a la cual quieras acceder en tus codespaces en forma de variables de ambiente.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: a1ea1c87581feccd737314db0d7bf237f983357a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192813'
---
## Acerca de los secretos cifrados de {% data variables.product.prodname_github_codespaces %}

Puedes agregar a tu cuenta personal los secretos cifrados que quieras utilizar en tus codespaces. Por ejemplo, puede que quieras almacenar y acceder a la siguiente información sensible en forma de un secreto cifrado.

- Tokens de acceso para los servicios en la nube
- Entidades de servicio
- Identificadores de suscripción
- Credenciales de un registro de imágenes privado (para obtener más información, consulta "[Permitir que el codespace acceda a un registro privado](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-registry)")

Puedes elegir qué repositorios deben tener acceso a cada secreto. Posteriormente, puedes utilizar el secreto en cualquier codespace que crees para un repositorio que tenga acceso a él. Para compartir un secreto con un codespace creado a partir de una plantilla, deberás publicar el codespace en un repositorio de {% data variables.product.prodname_dotcom %} y, después, conceder a ese repositorio acceso al secreto.

{% data reusables.codespaces.secrets-on-start %}

### Nombrar secretos

{% data reusables.codespaces.secrets-naming %} Por ejemplo, un secreto que se crea a nivel de repositorio debe tener un nombre único en este.

  {% data reusables.codespaces.secret-precedence %}

### Límites para los secretos

Puedes almacenar hasta 100 secretos para {% data variables.product.prodname_github_codespaces %}.

Los secretos tienen un tamaño máximo de 64 KB.

## Agregar un secreto

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. A la derecha de "Codespaces secrets", haga clic en **New secret**.
  ![Botón "New secret"](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Debajo de "Nombre", teclea un nombre para tu secreto.
  ![Cuadro de texto "Name"](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Haga clic en **Add Secret**.

## Editar un secreto

Puedes actualizar el valor de un secreto existente y puedes cambiar qué repositorios pueden acceder a un secreto.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. En "Codespaces secrets", a la derecha del secreto que quiera editar, haga clic en **Update**.
  ![Botón "Update"](/assets/images/help/settings/codespaces-secret-update-button.png)
1. En "Value", haga clic en **enter a new value**.
  ![vínculo "enter a new value"](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Opcionalmente, para eliminar el acceso del secreto a un repositorio, deselecciona el repositorio.
  ![Casillas para eliminar el acceso a los repositorios](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Haga clic en **Guardar cambios**.

## Borrar un secreto

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. En "Codespaces secrets", a la derecha del secreto que quiera eliminar, haga clic en **Delete**.
  ![Botón "Delete"](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Lea la advertencia y haga clic en **Aceptar**.
  ![Confirmación para eliminar un secreto](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Uso de secretos

Un secreto se exporta como una variable de entorno a la sesión de terminal del usuario.

  ![Representación del valor de un secreto exportado en el terminal](/assets/images/help/codespaces/exported-codespace-secret.png)

Puedes usar secretos en un codespace una vez que se compile y esté en ejecución. Por ejemplo, un secreto se puede usar:

* Al iniciar una aplicación desde el terminal integrado o la sesión ssh.
* Dentro de un script de ciclo de vida del contenedor de desarrollo que se ejecuta después de ejecutar el codespace. Para más información sobre los scripts de ciclo de vida del contenedor de desarrollo, consulta la documentación sobre containers.dev: [Especificación](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Los secretos de codespace no se pueden usar:

* Durante el tiempo de compilación del codespace (es decir, dentro de un Dockerfile o un punto de entrada personalizado).
* Dentro de una característica de contenedor de desarrollo. Para obtener más información, consulta la propiedad `features` en la [especificación de contenedores de desarrollo](https://containers.dev/implementors/json_reference/#general-properties) de containers.dev.

## Información adicional

- "[Administración de secretos cifrados para el repositorio y la organización en {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"
