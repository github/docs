---
title: 为存储库配置机密扫描
intro: '您可以配置 {% data variables.product.prodname_dotcom %} 如何扫描存储库以查找与高级安全模式匹配的机密。'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
ms.openlocfilehash: 00983398e326997b6472da319d342ab0758018d3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885714'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## 启用 {% data variables.product.prodname_secret_scanning_GHAS %}

可以对组织拥有的任何存储库启用 {% data variables.product.prodname_secret_scanning_GHAS %}。 启用后，{% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 如果尚未对存储库启用 {% data variables.product.prodname_advanced_security %}，请在“{% data variables.product.prodname_GH_advanced_security %}”右侧单击“启用”。
   {% ifversion fpt or ghec %}![为存储库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![为存储库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. 查看启用 {% data variables.product.prodname_advanced_security %} 的影响，然后单击“为此存储库启用 {% data variables.product.prodname_GH_advanced_security %}”。
6. 当您启用 {% data variables.product.prodname_advanced_security %} 时，{% data variables.product.prodname_secret_scanning %} 可能会因为组织的设置而自动启用。 如果显示“{% data variables.product.prodname_secret_scanning_caps %}”带有“启用”按钮，则仍需通过单击“启用”来启用 {% data variables.product.prodname_secret_scanning %} 。 如果你看到“禁用”按钮，则表示 {% data variables.product.prodname_secret_scanning %} 已启用。 
   ![为存储库启用 {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
7. （可选）如果要启用推送保护，请单击“推送保护”右侧的“启用”。 {% data reusables.secret-scanning.push-protection-overview %} 有关详细信息，请参阅“[通过 {% data variables.product.prodname_secret_scanning %} 保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
   ![为存储库启用推送保护](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. 在可以启用 {% data variables.product.prodname_secret_scanning %} 之前，您需要先启用 {% data variables.product.prodname_GH_advanced_security %}。 在“{% data variables.product.prodname_GH_advanced_security %}”右侧，单击“启用”。
   ![为存储库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. 单击“为存储库启用 {% data variables.product.prodname_GH_advanced_security %}”以确认此操作。
   ![确认为存储库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. 在“{% data variables.product.prodname_secret_scanning_caps %}”右侧，单击“启用”。
   ![为存储库启用 {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## 从 {% data variables.product.prodname_secret_scanning_GHAS %} 中排除目录

可以使用 secret_scanning.yml 文件从 {% data variables.product.prodname_secret_scanning %} 中排除目录。 例如，可以排除包含测试或随机生成内容的目录。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 在文件名字段中，键入 .github/secret_scanning.yml。
4. 在“编辑新文件”下，键入 `paths-ignore:`，后跟要从 {% data variables.product.prodname_secret_scanning %} 中排除的路径。
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    可以使用特殊字符（例如 `*`）来筛选路径。 有关筛选器模式的详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

    {% note %}
    
    **注意：**
    - 如果 `paths-ignore` 中的条目超过 1,000 个，{% data variables.product.prodname_secret_scanning %} 只会从扫描中排除前 1,000 个目录。
    - 如果 secret_scanning.yml 大于 1 MB，{% data variables.product.prodname_secret_scanning %} 将忽略整个文件。
    
    {% endnote %}

您也可以忽略来自 {% data variables.product.prodname_secret_scanning %} 的个别警报。 有关详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)”。

## 延伸阅读

- [管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
- [定义 {% data variables.product.prodname_secret_scanning %} 的自定义模式](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)
