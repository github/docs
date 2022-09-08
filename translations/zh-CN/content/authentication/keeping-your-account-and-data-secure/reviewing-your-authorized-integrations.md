---
title: 审查授权的集成
intro: 您可以查看授权的集成，以审核每个集成对您的帐户和数据的访问权限。
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
ms.openlocfilehash: ec67e7b18b4ad898cd53b4773b299d90bc3dc9e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084643'
---
## 审查授权的 {% data variables.product.prodname_oauth_apps %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## 审查授权的 {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. 单击“授权的 {% data variables.product.prodname_github_apps %}”选项卡。![“授权的 {% data variables.product.prodname_github_apps %}”选项卡](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. 审查有您帐户访问权限的 {% data variables.product.prodname_github_apps %}。 对于无法识别或已过期的密钥，请单击“撤销”。 要撤销所有 {% data variables.product.prodname_github_apps %}，请单击“全部撤销”。
   ![授权的 {% data variables.product.prodname_github_app %}列表](/assets/images/help/settings/revoke-github-app.png)

## 延伸阅读
{% ifversion fpt or ghec %}
- [关于集成](/articles/about-integrations){% endif %}
- [审查授权的应用程序 (OAuth)](/articles/reviewing-your-authorized-applications-oauth)
