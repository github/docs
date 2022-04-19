---
title: Managing access to other repositories within your codespace
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

By default, your codespace is assigned a token scoped to the repository from which it was created. For more information, see "[Security in {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/security-in-codespaces#authentication)." If your project needs additional permissions for other repositories, you can configure this in the `devcontainer.json` file and ensure other collaborators have the right set of permissions.

When permissions are listed in the `devcontainer.json` file, you will be prompted to review and authorize the additional permissions as part of codespace creation for that repository. Once you've authorized the listed permissions, {% data variables.product.prodname_github_codespaces %} will remember your choice and will not prompt you for authorization unless the permissions in the `devcontainer.json` file change.

## Prerrequisitos

To create codespaces with custom permissions defined, you must use one of the following:
* The {% data variables.product.prodname_dotcom %} web UI
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 or later
* [{% data variables.product.prodname_github_codespaces %} Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 or later

## Setting additional repository permissions

1. You configure repository permissions for {% data variables.product.prodname_github_codespaces %} in the `devcontainer.json` file. Si tu repositorio no contiene ya un archivo `devcontainer.json`, agrégalo ahora. For more information, "[Add a dev container to your project](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)."

1. Edit the `devcontainer.json` file, adding the repository name and permissions needed to the `repositories` object:

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

  **Note:** You can only reference repositories that belong to the same personal account or organization as the repository you are currently working in.

  {% endnote %}

  You can grant as many or as few of the following permissions for each repository listed:
   * `actions` - read / write
   * `checks` - read / write
   * `contents` - read / write
   * `deployments` - read / write
   * `discussions` - read / write
   * `issues` - read / write
   * `pages` - read / write
   * `pull_requests` - read / write
   * `repository_projects` - read / write
   * `statuses` - read / write
   * `workflows` - write

  To set a permission for all repositories in an organization, use the `*` wildcard following your organization name in the `repositories` object.

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

  To set all permissions for a given repository, use `read-all` or `write-all` in the `permissions` object

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

## Authorizing requested permissions

If additional repository permissions are defined in the `devcontainer.json` file, you will be prompted to review and optionally authorize the permissions when you create a codespace for this repository. When you authorize permissions for a repository, {% data variables.product.prodname_github_codespaces %} will not re-prompt you unless the set of requested permissions has changed for the repository.

![The requested permissions page](/assets/images/help/codespaces/codespaces-accept-permissions.png)

You should only authorize permissions for repositories you know and trust. If you don't trust the set of requested permissions, click **Continue without authorizing** to create the codespace with the base set of permissions. Rejecting additional permissions may impact the functionality of your project within the codespace as the codespace will only have access to the repository from which it was created.

You can only authorize permissions that your personal account already possesses. If a codespace requests permissions for repositories that you don't currently have access to, contact an owner or admin of the repository to obtain sufficient access and then try to create a codespace again.

## Access and security

{% warning %}

**Deprecation note**: The access and security setting, in the {% data variables.product.prodname_codespaces %} section of your personal account settings, is now deprecated. To enable expanded access to other repositories, add the requested permissions to your dev container definition for your codespace, as described above.

{% endwarning %}

When you enable access and security for a repository owned by your personal account, any codespaces that are created for that repository will have read permissions to all other repositories you own. Si quieres restringir los repositorios a los que puede acceder un codespace, puedes limitarlos a ya sea el repositorio para el cual se abrió el codespace o a repositorios específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Access and security", select the setting you want for your personal account.

  ![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Si eliges "Repositorios seleccionados", selecciona el menú desplegable y luego da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que te pertenecen. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de tus repositorios.

  ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Leer más

- "[Administrar el acceso a los repositorios para los codespaces de tu organización](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
