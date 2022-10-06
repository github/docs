---
title: 管理组织的 GitHub Pages 站点发布
intro: '你可以控制组织成员是否可以从组织存储库中发布 {% data variables.product.prodname_pages %} 站点，{% ifversion ghec %}并限制成员是否可以为站点选择可见性{% endif %}。'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876027'
---
{% ifversion fpt %} 可以选择允许或禁止组织成员发布 {% data variables.product.prodname_pages %} 站点。 使用 {% data variables.product.prodname_ghe_cloud %} 的组织还可以选择允许公开发布的站点和/或私下发布的站点。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)。
{% elsif ghec %} 你可以选择允许组织成员创建公开发布的站点和/或私下发布的站点。 有关 {% data variables.product.prodname_pages %} 站点的访问控制的详细信息，请参阅“[更改 {% data variables.product.prodname_pages %} 站点的可见性](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”。
{% endif %}

禁止发布 {% data variables.product.prodname_pages %} 站点后，任何已发布的站点仍将保持已发布状态。 您可以手动取消发布站点。 有关详细信息，请参阅“[取消发布 {% data variables.product.prodname_pages %} 站点](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)”。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. 在“页面创建”下，选择或取消选择“公共”。

   ![允许或禁止创建 {% data variables.product.prodname_pages %} 站点的复选框](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. 在“Pages creation（页面创建）”下，选择要允许的可见性，取消选择要禁止的可见性。

   ![允许或禁止创建 {% data variables.product.prodname_pages %} 站点的复选框](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. 在“页面创建”下，选择或取消选择“允许成员发布站点”。

   ![取消选中“允许成员发布站点”选项的复选框](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. 单击“ **保存**”。

## 延伸阅读

- “[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)”
