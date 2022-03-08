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
---

## 关于仓库

您可以个人拥有仓库，也可以与组织中的其他人共享仓库的所有权。

您可以通过选择仓库的可见性来限制谁可以访问仓库。 更多信息请参阅“[关于仓库可见性](#about-repository-visibility)”。

对于用户拥有的仓库，您可以向其他人授予协作者访问权限，以便他们可以协作处理您的项目。 如果仓库归组织所有，您可以向组织成员授予访问权限，以便协作处理您的仓库。 For more information, see "[Permission levels for a user account repository](/articles/permission-levels-for-a-user-account-repository/)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

{% ifversion fpt or ghec %}
通过用户帐户和组织的 {% data variables.product.prodname_free_team %}，可与无限的协作者合作处理设置了完全功能的无限公共仓库，或者是设置了有限功能的无限私有仓库， 要获取对私有仓库的高级处理，您可以升级到 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.gated-features.more-info %}
{% else %}
每个人和组织都可拥有无限的仓库，并且可以邀请无限的协作者参与所有仓库。
{% endif %}

您可以使用仓库管理您的工作并与他人合作。
- 您可以使用议题来收集用户反馈，报告软件缺陷，并组织您想要完成的任务。 更多信息请参阅“[关于议题](/github/managing-your-work-on-github/about-issues)”。{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- 您可以使用拉取请求来建议对仓库的更改。 更多信息请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”。
- 您可以使用项目板来组织议题和拉取请求并排定优先级。 更多信息请参阅“[关于项目板](/github/managing-your-work-on-github/about-project-boards)”。

{% data reusables.repositories.repo-size-limit %}

## 关于仓库可见性

您可以通过选择仓库的可见性来限制谁有权访问仓库：{% ifversion ghes or ghec %}公共、内部或私有{% elsif ghae %}私有或内部{% else %} 公共或私有{% endif %}。

{% ifversion fpt or ghec or ghes %}

When you create a repository, you can choose to make the repository public or private.{% ifversion ghec or ghes %} If you're creating the repository in an organization{% ifversion ghec %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}{% endif %}{% ifversion fpt %} Repositories in organizations that use {% data variables.product.prodname_ghe_cloud %} and are owned by an enterprise account can also be created with internal visibility. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

When you create a repository owned by your user account, the repository is always private. When you create a repository owned by an organization, you can choose to make the repository private or internal.

{% endif %}

{%- ifversion fpt or ghec %}
- 互联网上的所有人都可以访问公共仓库。
- 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。
{%- elsif ghes %}
- 如果 {% data variables.product.product_location %} 不是私人模式或在防火墙后面，所有人都可以在互联网上访问公共仓库。 或者，使用 {% data variables.product.product_location %} 的每个人都可以使用公共仓库，包括外部协作者。
- 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。
{%- elsif ghae %}
- 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
- 所有企业成员均可访问内部仓库。 更多信息请参阅“[关于内部仓库](#about-internal-repositories)”。
{%- endif %}

组织所有者始终有权访问其组织中创建的每个仓库。 更多信息请参阅“[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

拥有仓库管理员权限的人可更改现有仓库的可见性。 更多信息请参阅“[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”。

{% ifversion ghes or ghec or ghae %}
## 关于内部仓库

{% data reusables.repositories.about-internal-repos %} 有关内部资源的更多信息，请参阅 {% data variables.product.prodname_dotcom %} 的白皮书“[内部资源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% ifversion fpt or ghec %}outside of the enterprise{% else %}who are not members of any organization{% endif %}, including outside collaborators on organization repositories. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

{% ifversion ghes %}
{% note %}

**Note:** A user must be part of an organization to be an enterprise member and have access to internal repositories. If a user on {% data variables.product.product_location %} is not a member of any organization, that user will not have access to internal repositories.

{% endnote %}
{% endif %}

{% data reusables.repositories.internal-repo-default %}

Any member of the enterprise can fork any internal repository owned by an organization in the enterprise. The forked repository will belong to the member's user account, and the visibility of the fork will be private. 如果用户从企业拥有的所有组织中删除，该用户的内部仓库复刻也会自动删除。
{% endif %}

## 限制查看仓库中的内容和差异

有些类型的资源可能很大，需要在 {% data variables.product.product_name %} 上额外处理。 因此，可设置限制，以确保申请在合理的时间内完成。

以下限制大多会影响 {% data variables.product.product_name %} 和 API。

### 文本限制

Text files over **512 KB** are always displayed as plain text. 代码不强调语法，散文文件不会转换成 HTML（如 Markdown、AsciiDoc *等*）。

超过 **5 MB** 的文本文件仅通过其源 URL 访问，将通过 `{% data variables.product.raw_github_com %}` 提供；例如 `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`。 单击 **Raw（源）**按钮获取文件的源 URL。

### 差异限制

因为差异可能很大，所以我们会对评论、拉取请求和比较视图的差异施加限制：

- In a pull request, no total diff may exceed *20,000 lines that you can load* or *1 MB* of raw diff data.
- No single file's diff may exceed *20,000 lines that you can load* or *500 KB* of raw diff data. *四百行*和 *20 KB* 会自动加载为一个文件。
- 单一差异中的最大文件数限于 *300*。
- 单一差异中可呈现的文件（如图像、PDF 和 GeoJSON 文件）最大数量限于 *25*。

受限差异的某些部分可能会显示，但超过限制的任何部分都不会显示。

### 提交列表限制

比较视图和拉取请求页面显示 `base` 与 `head` 修订之间的提交列表。 这些列表限于 **250** 次提交。 如果超过该限制，将会出现一条表示附加评论的注释（但不显示）。

## 延伸阅读

- "[创建新仓库](/articles/creating-a-new-repository)"
- "[关于复刻](/github/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[通过议题和拉取请求进行协作](/categories/collaborating-with-issues-and-pull-requests)"
- "[在 {% data variables.product.prodname_dotcom %} 上管理您的工作](/categories/managing-your-work-on-github/)"
- "[管理仓库](/categories/administering-a-repository)"
- "[使用图表可视化仓库数据](/categories/visualizing-repository-data-with-graphs/)"
- "[关于 wikis](/communities/documenting-your-project-with-wikis/about-wikis)"
- "[{% data variables.product.prodname_dotcom %} 词汇](/articles/github-glossary)"
