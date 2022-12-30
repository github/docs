---
title: 从您的私有企业环境中启用 GitHub.com 存储库搜索
shortTitle: Search GitHub.com from enterprise
intro: '您可以在连接您在 {% data variables.product.prodname_dotcom_the_website %} 和私人 {% data variables.product.prodname_enterprise %} 环境中的个人帐户，以{% ifversion fpt or ghec %} 从您的私人环境{% else %} 从 {% data variables.product.product_name %}{% endif %}搜索特定 {% data variables.product.prodname_dotcom_the_website %} 存储库中的内容。'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2c4ee57036ca2d0114e75a1acaeecec05be5ba3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062456'
---
## 关于从 {% data variables.product.product_name %} 搜索 {% data variables.product.prodname_dotcom_the_website %} 存储库

可以从 {% data variables.product.prodname_ghe_managed %}{% endif %} 上的 {% data variables.product.product_location %}{% ifversion ghae %} 中搜索 {% data variables.product.prodname_ghe_cloud %} 上的指定专用存储库。 有关跨环境搜索的详细信息，请参阅“[关于在 GitHub 上搜索](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)”。

## 先决条件

{% data variables.product.product_name %} 的企业所有者必须对专用存储库启用 {% data variables.product.prodname_github_connect %} 和 {% data variables.product.prodname_unified_search %}。 有关详细信息，请参阅“[对企业启用 {% data variables.product.prodname_unified_search %}](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)”。

## 从 {% data variables.product.product_name %} 启用 {% data variables.product.prodname_dotcom_the_website %} 存储库搜索

1. 登录到 {% data variables.product.product_name %} 和 {% data variables.product.prodname_dotcom_the_website %}。
1. 在 {% data variables.product.product_name %} 任意页的右上角，单击个人资料照片，然后单击“设置”。
![用户栏中的“设置”图标](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
