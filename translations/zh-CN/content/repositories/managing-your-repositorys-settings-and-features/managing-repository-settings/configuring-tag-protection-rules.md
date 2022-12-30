---
title: 配置标记保护规则
shortTitle: Tag protection rules
intro: 可以为存储库配置标记保护规则，防止参与者创建或删除标记。
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063200'
---
{% note %}

注意：标记保护规则目前为 beta 版本，可能随时变动。

{% endnote %}

添加标记保护规则时，所有与提供的模式匹配的标记都将受到保护。 只有在存储库中具有管理或维护权限的用户才能创建受保护的标记，而只有在存储库中具有管理权限的用户才能删除受保护的标记。 有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)”。 {% data variables.product.prodname_github_apps %} 需要 `Repository administration: write` 权限来修改受保护的标记。

{% ifversion custom-repository-roles %} 此外，还可创建自定义存储库角色，允许其他用户组创建或删除与标记保护规则匹配的标记。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 在边栏的“代码和自动化”部分，单击“{% octicon "tag" aria-label="The tag icon" %} 标记”。
1. 单击“新建规则”。
![新标记保护规则](/assets/images/help/repository/new-tag-protection-rule.png)
1. 在“标记名称模式”下，键入要保护的标记的模式。 在此示例中，键入 \* 可保护所有标记。 
![设置标记保护模式](/assets/images/help/repository/set-tag-protection-pattern.png)
1. 单击 **“添加规则”** 。
![添加标记保护规则](/assets/images/help/repository/add-tag-protection-rule.png)
