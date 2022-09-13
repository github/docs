---
title: 重命名组织
intro: 如果您的项目或公司已更改名称，您可以更新组织的名称以匹配。
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 088094a03e2416b4da0e3011978ab5e9edd316b2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099705'
---
{% tip %}

提示：只有组织所有者才能重命名组织。 {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

## 更改我的组织名称时会发生什么？

更改组织名称后，您的旧组织名称可供其他人申请使用。 当您更改组织的名称后，在旧组织名称下对仓库的大多数引用都会更改为新名称。 不过，指向您个人资料的某些链接不会自动重定向。

### 自动进行的更改

- {% data variables.product.prodname_dotcom %} 将引用自动重定向到您的仓库。  指向组织现有存储库的 Web 链接将继续有效。 启动更改后，可能需要几分钟时间才能完成。
- 您可以继续将本地仓库推送到旧的远程跟踪 URL 而不进行更新。 但是，我们建议您在更改组织名称后更新所有现有的远程仓库 URL。 由于您的旧组织名称在更改后可供其他人使用，因此新组织所有者可以创建覆盖仓库重定向条目的仓库。 有关详细信息，请参阅“[管理远程存储库](/github/getting-started-with-github/managing-remote-repositories)”。
- 以前的 Git 提交也将正确归于组织内的用户。

### 并非自动的更改

更改组织的名称后：
- 指向上一个组织配置文件页的链接（例如 `https://{% data variables.command_line.backticks %}/previousorgname`）将返回 404 错误。 建议你更新其他站点指向组织的链接{% ifversion fpt or ghec %}，例如 LinkedIn 或 Twitter 页面{% endif %}。
- 使用旧组织名称的 API 请求将返回 404 错误。 我们建议您更新 API 请求中的旧组织名称。
- 对于使用旧组织名称的团队，没有自动的 [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) 重定向。{% ifversion ghec %}
- 如果为组织启用了 SAML 单点登录 (SSO)，则必须在身份提供商 (IdP) 上更新 {% data variables.product.prodname_ghe_cloud %} 的应用程序中的组织名称。 如果您不更新 IdP 上的组织名称，组织成员将无法使用您的 IdP 身份验证来访问组织的资源。 有关详细信息，请参阅“[将标识提供者连接到组织](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)”。{% endif %}

## 更改组织的名称

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 在设置页面底部附近的“重命名组织”下，单击“重命名组织”。
  ![“重命名组织”按钮](/assets/images/help/settings/settings-rename-organization.png)

## 延伸阅读

* [我的提交为什么链接到错误的用户？](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)
