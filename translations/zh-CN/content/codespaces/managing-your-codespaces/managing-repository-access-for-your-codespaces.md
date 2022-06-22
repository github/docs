---
title: 管理对代码空间中其他存储库的访问
allowTitleToDifferFromFilename: true
shortTitle: 存储库访问
intro: '您可以管理 {% data variables.product.prodname_codespaces %} 可以访问的仓库。'
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

## 概览

默认情况下，会为代码空间分配一个令牌，范围限定为从中创建代码空间的存储库。 更多信息请参阅“[{% data variables.product.prodname_codespaces %} 中的安全性](/codespaces/codespaces-reference/security-in-codespaces#authentication)”。 如果您的项目需要其他存储库的其他权限，则可以在 `devcontainer.json` 文件中配置此权限，并确保其他协作者具有正确的权限集。

当 `devcontainer.json` 文件中列出权限时，作为创建该存储库的代码空间的一部分，系统将提示您查看并授权其他权限。 授权列出的权限后，{% data variables.product.prodname_github_codespaces %} 将记住您的选择，并且不会提示您进行授权，除非 `devcontainer.json` 文件中的权限发生更改。

## 基本要求

若要创建定义了自定义权限的代码空间，必须使用下列方法之一：
* {% data variables.product.prodname_dotcom %} web UI
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 或更高版本
* [{% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 或更高版本

## 设置其他存储库权限

1. 您可以为 `devcontainer.json` 文件中的 {% data variables.product.prodname_github_codespaces %} 配置存储库权限。 如果您的存储库尚未包含 `devcontainer.json` 文件，请立即添加一个。 有关详细信息，请参阅“[将开发容器添加到项目](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)”。

1. 编辑 `devcontainer.json` 文件，将存储库名称和所需的权限添加到 `repositories` 对象：

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

  **注意：** 您只能引用与您当前所在的存储库属于同一个人帐户或组织的存储库。

  {% endnote %}

  您可以为列出的每个存储库授予以下任意权限：
   * `actions` - 读/写
   * `checks` - 读/写
   * `contents` - 读/写
   * `deployments` - 读/写
   * `discussions` - 读/写
   * `issues` - 读/写
   * `packages` - read
   * `pages` - 读/写
   * `pull_requests` - 读/写
   * `repository_projects` - 读/写
   * `statuses` - 读/写
   * `workflows` - 写入

  要为组织中的所有存储库设置权限，请在 `repositories` 对象中的组织名称后面使用 `*` 通配符。

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

  要设置给定存储库的所有权限，请在存储库对象中使用 `"permissions": "read-all"` 或 `"permissions": "write-all"`。

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

## 授权请求的权限

如果在 `devcontainer.json` 文件中定义了其他存储库权限，则在为此存储库创建代码空间时，系统将提示您查看并选择性地授权这些权限。 当您为存储库授权权限时，除非存储库的请求权限集已更改，否则 {% data variables.product.prodname_github_codespaces %} 不会重新提示您。

![请求的权限页面](/assets/images/help/codespaces/codespaces-accept-permissions.png)

您只应授予您知道和信任的存储库的权限。 如果不信任请求的权限集，请单击 **Continue without authorizing（继续而不授权）**以使用基本权限集创建代码空间。 拒绝其他权限可能会影响项目在代码空间中的功能，因为代码空间只能访问从中创建它的存储库。

您只能授权您的个人帐户已拥有的权限。 如果代码空间请求您当前无权访问的存储库的权限，请与存储库的所有者或管理员联系以获取足够的访问权限，然后再次尝试创建代码空间。

## 访问和安全

{% warning %}

**弃用说明**：现在不推荐使用个人帐户设置的 {% data variables.product.prodname_codespaces %} 部分中的访问和安全设置。 要启用对其他存储库的扩展访问权限，请将请求的权限添加到代码空间的开发容器定义中，如上所述。

{% endwarning %}

为个人帐户拥有的仓库启用访问和安全后，为该仓库创建的任何代码空间都将对您拥有的所有其他仓库具有读取权限。 如果要限制代码空间可以访问的仓库，您可以将其限制为代码空间打开的仓库或特定仓库。 您应该只对您信任的仓库启用访问和安全。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. 在“Access and security（访问和安全）”下，为个人帐户选择所需的设置。

  ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问您拥有的其他仓库。 对于您要允许其代码空间访问您拥有的其他仓库的所有仓库重复此操作。

  !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## 延伸阅读

- "[管理组织的代码空间的存储库访问](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
