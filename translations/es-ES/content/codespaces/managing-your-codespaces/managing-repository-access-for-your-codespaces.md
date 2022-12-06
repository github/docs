---
title: Administración del acceso a otros repositorios dentro del codespace
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: 'Puedes administrar los repositorios a los cuales puede acceder {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 3f8379c322bd7ccd9ff7d31e17da90a77461536d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160306'
---
## Información general

De manera predeterminada, al codespace se le asigna un token con ámbito en el repositorio desde el que se creó. Al publicar un codespace creado a partir de una plantilla en un nuevo repositorio en {% data variables.product.product_name %}, se le asigna al codespace un token que se limita al nuevo repositorio. Para más información, consulta "[Seguridad en {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)". Si el proyecto necesita permisos adicionales para otros repositorios, puedes configurarlo en el archivo `devcontainer.json` y asegurarte de que otros colaboradores tengan el conjunto adecuado de permisos.

Cuando se muestren permisos en el archivo `devcontainer.json`, se te pedirá que revises y autorices los permisos adicionales como parte de la creación del codespace para ese repositorio. Cuando hayas autorizado los permisos enumerados, {% data variables.product.prodname_github_codespaces %} recordará tu elección y no te pedirá autorización a menos que cambien los permisos del archivo `devcontainer.json`.

## Prerrequisitos

Para crear codespaces con permisos personalizados definidos, debes usar uno de los siguientes:
* La interfaz de usuario web de {% data variables.product.prodname_dotcom %}
* [La CLI de {% data variables.product.prodname_dotcom %}](https://github.com/cli/cli/releases/latest) 2.5.2 o posterior
* [La extensión de {% data variables.product.prodname_github_codespaces %}{% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 o superior.

## Establecimiento de permisos de repositorio adicionales

1. Los permisos del repositorio se configuran para {% data variables.product.prodname_github_codespaces %} en el archivo `devcontainer.json`. Si el repositorio aún no contiene un archivo `devcontainer.json`, agregue uno ahora. Para obtener más información, "[Incorporación de un contenedor de desarrollo al proyecto](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

1. Edita el archivo `devcontainer.json` y agrega el nombre del repositorio y los permisos necesarios para el objeto `repositories`:

  ```json{:copy}
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  {% note %}

  **Nota**: Solo puedes hacer referencia a repositorios que pertenezcan a la misma cuenta personal u organización que el repositorio en el que estés trabajando actualmente.

  {% endnote %}

  Puedes conceder los permisos que quieras, ya sean muchos o pocos, para cada repositorio que se muestra:
   * `actions`: lectura/escritura
   * `checks`: lectura/escritura
   * `contents`: lectura/escritura
   * `deployments`: lectura/escritura
   * `discussions`: lectura/escritura
   * `issues`: lectura/escritura
   * `packages`: lectura
   * `pages`: lectura/escritura
   * `pull_requests`: lectura/escritura
   * `repository_projects`: lectura/escritura
   * `statuses`: lectura/escritura
   * `workflows`: escritura

  A fin de establecer un permiso para todos los repositorios de una organización, usa el carácter comodín `*` que sigue al nombre de la organización en el objeto `repositories`.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/*": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  Para establecer todos los permisos de un repositorio determinado, usa `"permissions": "read-all"` o `"permissions": "write-all"` en el objeto de repositorio.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": "write-all"
          }
        }
      }
    }
  }
  ```

## Autorización de permisos solicitados

Si se definen permisos de repositorio adicionales en el archivo `devcontainer.json`, se te pedirá que revises y, opcionalmente, autorices los permisos al crear un codespace o una configuración de precompilación para este repositorio. Al autorizar permisos para un repositorio, {% data variables.product.prodname_github_codespaces %} no se te volverá a pedir a menos que el conjunto de permisos solicitados haya cambiado para el repositorio.

![Página de permisos solicitados](/assets/images/help/codespaces/codespaces-accept-permissions.png)

Solo debes autorizar los permisos para los repositorios que conoces y en los que confías. Si no confías en el conjunto de permisos solicitados, haz clic en **Continue without authorizing** (Continuar sin autorizar) para crear el codespace con el conjunto base de permisos. Rechazar permisos adicionales puede afectar a la función del proyecto dentro del codespace, ya que codespace solo tendrá acceso al repositorio desde el que se creó.

Solo puedes autorizar los permisos que tu cuenta personal ya posee. Si un codespace solicita permisos para repositorios a los que no tienes acceso actualmente, ponte en contacto con un propietario o administrador del repositorio para obtener acceso suficiente e intenta crear de nuevo un codespace.

## Acceso y seguridad

{% warning %}

**Nota de desuso**: La configuración de acceso y seguridad que se describe a continuación está en desuso y se documentada aquí solo como referencia. Para habilitar el acceso expandido a otros repositorios, agrega los permisos solicitados a la definición del contenedor de desarrollo del codespace, tal como se ha descrito anteriormente.

{% endwarning %}

Cuando habilitas el acceso y la seguridad de un repositorio que pertenezca a tu cuenta personal, cualquier codespace que se cree para este tendrá permisos de lectura en el resto de los repositorios de tu propiedad. Si quieres restringir los repositorios a los que puede acceder un codespace, puedes limitarlos a ya sea el repositorio para el cual se abrió el codespace o a repositorios específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes. 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. En "Access and security" (Acceso y seguridad); selecciona la configuración que quieras para tu cuenta personal.

  ![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Si eliges "Repositorios seleccionados", selecciona el menú desplegable y luego haz clic en un repositorio para permitir que los codespaces de este accedan al resto de los repositorios que te pertenecen. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de tus repositorios.

  ![Menú desplegable "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
