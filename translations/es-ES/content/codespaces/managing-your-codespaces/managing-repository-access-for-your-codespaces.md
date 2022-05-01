---
title: Administrar el acceso a otros repositorios dentro de tu codespace
allowTitleToDifferFromFilename: true
shortTitle: Acceso a los repositorios
intro: 'Puedes administrar los repositorios a los cuales pueden acceder los {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
---

## Resumen

Predeterminadamente, a tu codespace se le asigna un token con alcance del repositorio del cual se creó. Para obtener más información, consulta la sección "[Seguridad en {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/security-in-codespaces#authentication)". Si tu proyecto necesita permisos adicionales para otros repositorios, puedes configurar esto en el archivo `devcontainer.json` y asegurarte de que otros colaboradores tengan el conjunto de permisos correcto.

Cuando los permisos se listan en el archivo `devcontainer.json`, se te pedirá revisar y autorizar los permisos adicionales como parte de la creación de codespaces para dicho repositorio. Una vez que autorizas los permisos listados, {% data variables.product.prodname_github_codespaces %} recordará tu elección y no te pedirá autorización amenos de que cambien los permisos en el archivo `devcontainer.json`.

## Prerrequisitos

Para crear codespaces con permisos personalizados definidos, debes utilizar uno de los siguientes:
* La IU web de {% data variables.product.prodname_dotcom %}
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 o posterior
* [{% data variables.product.prodname_github_codespaces %} extensión de Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 o posterior

## Configurar los permisos adicionales de los repositorios

1. Puedes configurar los permisos de repositorio para {% data variables.product.prodname_github_codespaces %} en el archivo `devcontainer.json`. Si tu repositorio no contiene ya un archivo `devcontainer.json`, agrégalo ahora. Para obtener màs informaciòn, "[Agrega un contenedor dev a tu proyecto](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

1. Edita el archivo `devcontainer.json` agregando el nombre de repositorio y los permisos necesarios al objeto `repositories`:

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

  **Nota:** Solo puedes referenciar los repositorios que pertenecen a la misma cuenta personal o de organización que el repositorio en el que estás trabajando actualmente.

  {% endnote %}

  Puedes otorgar tantos o tan pocos de los permisos siguientes como quieras para cada repositorio listado:
   * `actions` - lectura / escritura
   * `checks` - lectura / escritura
   * `contents` - lectura / escritura
   * `deployments` - lectura / escritura
   * `discussions` - lectura / escritura
   * `issues` - lectura / escritura
   * `packages` - read
   * `pages` - lectura / escritura
   * `pull_requests` - lectura / escritura
   * `repository_projects` - lectura / escritura
   * `statuses` - lectura / escritura
   * `workflows` - escritura

  Para configurar un permiso para todos los repositorios de una organización, utiliza el comodín `*` seguido de tu nombre de organización en el objeto `repositories`.

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

  Para configurar todos los permisos para un repositorio específico, utiliza `read-all` i `write-all` en el objeto `permissions`

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "write-all"
            }
          }
        }
      }
    }
  }
  ```

## Autorizar los permisos solicitados

Si se definen permisos de repositorio adicionales en el archivo `devcontainer.json`, se te pedirá revisar y, opcionalmente, autorizar los permisos cuando crees un codespace para este repositorio. Cuando autorizas permisos para un repositorio, {% data variables.product.prodname_github_codespaces %} no volverá a enviar mensajes a menos de que el conjunto de permisos solicitados haya cambiado para el repositorio.

![La página de permisos solicitados](/assets/images/help/codespaces/codespaces-accept-permissions.png)

Solo deberías autorizar los permisos para los repositorios que conoces y en los cuales confías. Si no confías en el conjunto de permisos solicitados, haz clic en **Continuar sin autorizar** para crear el codespace con el conjunto de permisos base. El rechazar permisos adicionales podría impactar la funcionalidad de tu proyecto dentro del codespace, ya que este codespace solo tendrá acceso al repositorio desde el cuál se creó.

Solo puedes autorizar los permisos que tu cuenta personal ya posea. Si un codespace solicita permisos para los repositorios a los cuales no tienes acceso actualmente, contacta a un propietario o administrador del repositorio para obtener suficiente acceso y luego intenta crear un codespace nuevamente.

## Acceso y seguridad

{% warning %}

**Aviso de obsolesencia**: El acceso y ajuste de seguridad, en la sección de {% data variables.product.prodname_codespaces %} de los ajustes de tu cuenta personal, ahora es obsoleto. Para habilitar un acceso expandido a otros repositorios, agrega los permisos solicitados a tu definición de contenedor dev para tu codespace, tal como se describe anteriormente.

{% endwarning %}

Cuando habilitas el acceso y la seguridad para un repositorio que le pertenece a tu cuenta personal, cualquier codespace que se cree para dicho repositorio tendrá permisos de lectura para todos los otros repositorios que te pertenezcan. Si quieres restringir los repositorios a los que puede acceder un codespace, puedes limitarlos a ya sea el repositorio para el cual se abrió el codespace o a repositorios específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Acceso y seguridad", selecciona el ajuste que quieras para tu cuenta personal.

  ![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Si eliges "Repositorios seleccionados", selecciona el menú desplegable y luego da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que te pertenecen. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de tus repositorios.

  ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Leer más

- "[Administrar el acceso a los repositorios para los codespaces de tu organización](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
