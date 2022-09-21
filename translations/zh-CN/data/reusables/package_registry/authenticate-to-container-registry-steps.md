---
ms.openlocfilehash: 50e7f623d6585c8697d0b1c6c827a855df26c571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145100394"
---
1. 针对要完成的任务，新创具有适当作用域的个人访问令牌 (PAT)。 如果您的组织需要 SSO，则必须为新令牌启用 SSO。
  {% warning %}

  注意：默认情况下，在用户界面中为个人访问令牌 (PAT) 选择 `write:packages` 范围时，`repo` 范围也将被选中。 `repo` 范围提供了不必要和广泛的访问权限，我们建议你尤其避免使用 GitHub Actions 工作流。 有关详细信息，请参阅“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”。 解决方法是在以下 URL 的用户界面中为 PAT 选择 `write:packages` 范围：`https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`。 

  {% endwarning %}

    - 选择 `read:packages` 范围以下载容器映像并读取其元数据。
    - 选择 `write:packages` 范围以下载和上传容器映像并读写其元数据。
    - 选择 `delete:packages` 范围以删除容器映像。

  有关详细信息，请参阅“[为命令行创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)”。

2. 保存您的 PAT。 我们建议将 PAT 保存为环境变量。
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. 使用容器类型的 CLI，登录到 `{% data reusables.package_registry.container-registry-hostname %}` 上的 {% data variables.product.prodname_container_registry %} 服务。
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
