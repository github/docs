---
title: 关于仓库
intro: 仓库包含项目的所有文件，并存储每个文件的修订记录。 您可以在仓库中讨论并管理项目的工作。
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 95e4033aa41f7920b5447554773dc61a181f5861
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163503'
---
## 关于仓库

您可以个人拥有仓库，也可以与组织中的其他人共享仓库的所有权。

您可以通过选择仓库的可见性来限制谁可以访问仓库。 有关详细信息，请参阅“[关于存储库可见性](#about-repository-visibility)”。

对于用户拥有的仓库，您可以向其他人授予协作者访问权限，以便他们可以协作处理您的项目。 如果仓库归组织所有，您可以向组织成员授予访问权限，以便协作处理您的仓库。 有关详细信息，请参阅“[帐户存储库的权限级别](/articles/permission-levels-for-a-user-account-repository/)”和“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

{% ifversion fpt or ghec %} 通过个人帐户和组织的 {% data variables.product.prodname_free_team %}，可与无限制的协作者合作处理设置了完全功能的无限制公共存储库，或者是设置了有限功能的无限制专用存储库。 要获取对私有仓库的高级处理，您可以升级到 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.gated-features.more-info %} {% else %} 每个人和组织都可拥有无限制的存储库，并且可邀请无限制的协作者参与所有存储库。
{% endif %}

您可以使用仓库管理您的工作并与他人合作。
- 您可以使用议题来收集用户反馈，报告软件缺陷，并组织您想要完成的任务。 有关详细信息，请参阅“[关于问题](/github/managing-your-work-on-github/about-issues)”。{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- 您可以使用拉取请求来建议对仓库的更改。 有关详细信息，请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”。
- 您可以使用项目板来组织议题和拉取请求并排定优先级。 有关详细信息，请参阅“[关于项目板](/github/managing-your-work-on-github/about-project-boards)”。

{% data reusables.repositories.repo-size-limit %}

若要了解如何最有效地使用存储库，请参阅“[存储库最佳做法](/repositories/creating-and-managing-repositories/best-practices-for-repositories)”。

## 关于仓库可见性

可以通过选择存储库的可见性来限制谁有权访问存储库：{% ifversion ghes or ghec %}公共、内部或专用{% elsif ghae %}专用或内部{% else %}公共或专用{% endif %}。

{% ifversion fpt or ghec or ghes %}

创建存储库时，可以选择将存储库设为公开或私有。{% ifversion ghec or ghes %} 如果要在{% ifversion ghec %}企业帐户拥有的{% endif %} 组织中创建存储库，则还可以选择将存储库设为内部存储库。{% endif %}{% endif %}{% ifversion fpt %}还可以通过内部可见性创建使用 {% data variables.product.prodname_ghe_cloud %} 并由企业帐户拥有的组织中的存储库。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)。

{% elsif ghae %}

当你创建由你的个人帐户拥有的存储库时，存储库始终是私有的。 创建组织拥有的存储库时，可以选择将存储库设为私有或内部存储库。

{% endif %}

{%- ifversion fpt or ghec %}
- 互联网上的所有人都可以访问公共存储库。
- 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。
{%- elsif ghes %}
- 如果 {% data variables.location.product_location %} 未处于专用模式或位于防火墙后面，那么 Internet 上的每个人都有权访问公共存储库。 否则，公共存储库可供所有使用 {% data variables.location.product_location %}的人（包括外部协作者）使用。
- 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。
{%- elsif ghae %}
- 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- 所有企业成员均可访问内部仓库。 有关详细信息，请参阅“[关于内部存储库](#about-internal-repositories)”。
{%- endif %}

组织所有者始终有权访问其组织中创建的每个仓库。 有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

拥有仓库管理员权限的人可更改现有仓库的可见性。 有关详细信息，请参阅“[设置存储库可见性](/github/administering-a-repository/setting-repository-visibility)”。

{% ifversion ghes or ghec or ghae %}
## 关于内部仓库

{% data reusables.repositories.about-internal-repos %} 有关 InnerSource 的详细信息，请参阅 {% data variables.product.prodname_dotcom %} 的白皮书“[InnerSource 简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

{% ifversion ghec %} {% note %}

注意：仅当你通过企业帐户使用 {% data variables.product.prodname_ghe_cloud %} 时才能创建内部存储库。 企业帐户是一种单独的帐户类型，使你能够集中管理多个组织。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts)”。

{% endnote %} {% endif %}

所有企业成员对内部仓库具有读取权限，但内部仓库对{% ifversion fpt or ghec %}企业外部{% else %}非组织成员{% endif %}的人员不可见，包括组织仓库的外部协作者。 有关详细信息，请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)”和“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

{% ifversion ghes %} {% note %}

注意：用户必须是组织的一部分才能成为企业成员并有权访问内部存储库。 如果 {% data variables.location.product_location %}上的用户不是任何组织的成员，该用户将无权访问内部存储库。

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}除非企业使用 {% data variables.product.prodname_emus %}，否则企业的成员{% else %}成员{% endif %}可以复刻企业中组织拥有的任何内部存储库。 分支存储库将属于成员的个人帐户，分支将为私人可见。 如果用户从企业拥有的所有组织中删除，该用户的内部仓库复刻也会自动删除。

{% ifversion ghec %} {% note %}

注意：{% data variables.enterprise.prodname_managed_users_caps %}无法为内部存储库创建分支。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)”。

{% endnote %} {% endif %} {% endif %}

## 限制查看仓库中的内容和差异

有些类型的资源可能很大，需要在 {% data variables.product.product_name %} 上额外处理。 因此，可设置限制，以确保申请在合理的时间内完成。

以下限制大多会影响 {% data variables.product.product_name %} 和 API。

### 文本限制

超过 512 KB 的文本文件始终显示为纯文本。 不突出显示代码中的语法，文本文件不会转换成 HTML（如 Markdown、AsciiDoc 等）。

超过 5 MB 的文本文件只能通过其原始 URL 获取，这些 URL 通过 `{% data variables.product.raw_github_com %}` 提供；例如 `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`。 单击“原始”按钮可获取文件的原始 URL。

### 差异限制

因为差异可能很大，所以我们会对评论、拉取请求和比较视图的差异施加限制：

- 在拉取请求中，总差异不得超过可加载的 20,000 行或 1 MB 的原始差异数据 。
- 任何单个文件的差异都不得超过可加载的 20,000 行或 500 KB 的原始差异数据 。 为单个文件自动加载 400 行和 20 KB 。
- 单一差异中的最大文件数限于 300。
- 单一差异中可呈现的文件（如图像、PDF 和 GeoJSON 文件）最大数量限于 25。

受限差异的某些部分可能会显示，但超过限制的任何部分都不会显示。

### 提交列表限制

比较视图和拉取请求页显示 `base` 和 `head` 修订之间的提交列表。 这些列表限制为 250 个提交。 如果超过该限制，将会出现一条表示附加评论的注释（但不显示）。

## 延伸阅读

- [关于分支](/github/collaborating-with-pull-requests/working-with-forks/about-forks)
- [协作处理问题和拉取请求](/categories/collaborating-with-issues-and-pull-requests)
- [管理 {% data variables.product.prodname_dotcom %} 上的工作](/categories/managing-your-work-on-github/)
- [管理存储库](/categories/administering-a-repository)
- [使用图形来可视化存储库数据](/categories/visualizing-repository-data-with-graphs/)
- [关于 Wiki](/communities/documenting-your-project-with-wikis/about-wikis)
- [{% data variables.product.prodname_dotcom %} 术语表](/articles/github-glossary)
