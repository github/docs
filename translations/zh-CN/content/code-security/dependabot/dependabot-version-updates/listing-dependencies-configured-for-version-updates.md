---
title: 列出为版本更新配置的依赖项
intro: '您可以查看由 {% data variables.product.prodname_dependabot %} 监视更新的依赖项。'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 8028c10c39d4b045206954fc38ed805b5432e553
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101102'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 查看由 {% data variables.product.prodname_dependabot %} 监视的依赖项

启用版本更新后，可以使用存储库依赖关系图中的“{% data variables.product.prodname_dependabot %}”选项卡确认配置是否正确。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. 或者，要查看为包管理器监视的文件，请单击关联的 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。
  ![受监视的依赖项文件](/assets/images/help/dependabot/monitored-dependency-files.png)

如果缺少任何依赖项，请检查日志文件是否有错误。 如果缺少任何包管理器，请审查配置文件。

## 查看 {% data variables.product.prodname_dependabot %} 日志文件

1. 在“{% data variables.product.prodname_dependabot %}”选项卡上，单击“上次检查时间之前”，查看上次检查版本更新期间 {% data variables.product.prodname_dependabot %} 生成的日志文件 。
  ![查看日志文件](/assets/images/help/dependabot/last-checked-link.png)
2. （可选）若要重新运行版本检查，请单击“检查更新”。
  ![检查更新](/assets/images/help/dependabot/check-for-updates.png)
