---
title: 删除自托管的运行器
intro: '您可以从仓库{% ifversion fpt %} 或组织{% elsif ghec or ghes or gahe %}、 组织或{% endif %} 企业永久删除自托管运行器。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Remove self-hosted runners
ms.openlocfilehash: d47a2e348f2d1a79342934e70115314d9e62f6f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086684'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 从仓库中删除运行器

{% note %}

注意：{% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

要从用户仓库删除自托管的运行器，您必须是仓库所有者。 对于组织仓库，您必须是组织所有者或拥有该仓库管理员的权限。 建议您也访问自托管的运行器机器。 有关如何使用 REST API 删除自承载运行器的信息，请参阅“[自承载运行器](/rest/reference/actions#self-hosted-runners)”。

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## 从组织中删除运行器

{% note %}

注意：{% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

要从组织删除自托管的运行器，您必须是组织所有者。 建议您也访问自托管的运行器机器。 有关如何使用 REST API 删除自承载运行器的信息，请参阅“[自承载运行器](/rest/reference/actions#self-hosted-runners)”。

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghes > 3.3 or ghec %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghes < 3.4 or ghae %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## 从企业中删除运行器

{% ifversion fpt %} 如果使用 {% data variables.product.prodname_ghe_cloud %}，还可以从企业中删除运行器。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise)。
{% endif %} {% ifversion ghec or ghes or ghae %} {% note %}

注意：{% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

要从企业帐户删除自托管运行器，您必须是企业所有者。 建议您也访问自托管的运行器机器。 有关如何使用 REST API 删除自承载运行器的信息，请参阅 [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runners) 中的企业终结点。

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %} {% endif %}
