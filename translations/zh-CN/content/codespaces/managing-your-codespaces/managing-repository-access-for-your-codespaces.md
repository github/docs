---
title: 管理对代码空间中其他存储库的访问权限
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: '你可以管理 {% data variables.product.prodname_github_codespaces %} 可以访问的存储库。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 52917b66e7f9d1939dd98e8e59068cccf547c1c5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147652619'
---
## 概述

默认情况下，代码空间分配有一个令牌，该令牌的范围限定为从中创建它的存储库。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 中的安全性](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)”。 如果项目需要其他存储库的其他权限，则可以在 `devcontainer.json` 文件中对此进行配置，并确保其他协作者具有正确的权限集。

在 `devcontainer.json` 文件中列出权限时，系统会提示你在为该存储库创建代码空间时查看并授予其他权限。 授予列出的权限后，{% data variables.product.prodname_github_codespaces %} 将记住你的选择，除非 `devcontainer.json` 文件中的权限发生更改，否则不会提示你进行授予。

## 先决条件

若要创建定义了自定义权限的代码空间，你必须使用以下项之一：
* {% data variables.product.prodname_dotcom %} Web UI
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 或更高版本
* [{% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 或更高版本

## 设置其他存储库权限

1. 在 `devcontainer.json` 文件中配置 {% data variables.product.prodname_codespaces %} 的存储库权限。 如果存储库尚未包含 `devcontainer.json` 文件，请立即添加一个。 有关详细信息，请参阅“[将开发容器添加到项目](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)”。

1. 编辑 `devcontainer.json` 文件，添加 `repositories` 对象所需的存储库名称和权限：

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

  注意：只能将属于同一个人帐户或组织的存储库引用为当前正在使用的存储库。

  {% endnote %}

  可以为列出的每个存储库授予任意数量的以下权限：
   * `actions` - 读/写
   * `checks` - 读/写
   * `contents` - 读/写
   * `deployments` - 读/写
   * `discussions` - 读/写
   * `issues` - 读/写
   * `packages` - 读取
   * `pages` - 读/写
   * `pull_requests` - 读/写
   * `repository_projects` - 读/写
   * `statuses` - 读/写
   * `workflows` - 写入

  若要为组织中的所有存储库设置权限，请在 `repositories` 对象中在组织名称后面使用 `*` 通配符。

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

  若要为给定存储库设置所有权限，请在存储库对象中使用 `"permissions": "read-all"` 或 `"permissions": "write-all"`。

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

## 授予请求的权限

如果在 `devcontainer.json` 文件中定义了其他存储库权限，系统会提示你在为此存储库创建 codespace 或预生成配置时查看并选择性地授予权限。 为存储库授予权限后，除非为存储库请求的权限集已更改，否则 {% data variables.product.prodname_codespaces %} 不会重新提示你。

![请求的权限页](/assets/images/help/codespaces/codespaces-accept-permissions.png)

应仅为你了解和信任的存储库授予权限。 如果你不信任请求的权限集，请单击“请继续操作，无需进行授权”以创建具有基本权限集的代码空间。 拒绝其他权限可能会影响代码空间中项目的功能，因为代码空间只能访问从中创建它的存储库。

你只能授予个人帐户已拥有的权限。 如果代码空间请求你当前无权访问的存储库的权限，请联系存储库的所有者或管理员以获取足够的访问权限，然后尝试再次创建代码空间。

## 访问和安全性

{% warning %}

**停用说明**：下方描述的访问和安全设置现已停用，此处记录仅为参考。 若要启用对其他存储库的扩展访问权限，请将请求的权限添加到代码空间的开发容器定义，如上所述。

{% endwarning %}

为个人帐户拥有的存储库启用访问和安全后，为该存储库创建的任何代码空间都将对你拥有的所有其他存储库具有读取权限。 如果要限制代码空间可以访问的仓库，您可以将其限制为代码空间打开的仓库或特定仓库。 您应该只对您信任的仓库启用访问和安全。 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“访问和安全”下，为个人帐户选择所需的设置。

  ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问您拥有的其他仓库。 对于您要允许其代码空间访问您拥有的其他仓库的所有仓库重复此操作。

  ![“所选存储库”下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
