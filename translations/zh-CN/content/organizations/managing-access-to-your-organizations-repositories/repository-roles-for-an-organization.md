---
title: 组织的存储库角色
intro: 您可以通过细化角色自定义组织中每个仓库的权限，从而为每个用户提供所需的功能和任务权限。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/repository-permission-levels-for-an-organization-early-access-program
  - /articles/repository-permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Repository roles
ms.openlocfilehash: dbb5075dfc57e01e0658138b65d6231fb12f1071
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526700'
---
## 组织的存储库角色

您可以通过分配角色，为组织成员、外部协作者和人员团队提供对组织仓库不同级别的权限。 选择最适合每个人或团队在项目中的职能的角色，而不是提供超过其需求的项目权限。

组织存储库的角色从低到高的权限级别分别为：
- **读取**：建议提供给要查看或讨论项目的非代码参与者
- **会审**：建议提供给需要主动管理问题和拉取请求，但没有写入权限的参与者
- **写入**：建议提供给积极推送内容到项目的参与者
- **维护**：建议提供给需要管理存储库而又无法访问敏感或破坏性操作的项目经理
- **管理员**：建议提供给需要对项目具有完全访问权限的人员，包括管理安全性或删除存储库等敏感和破坏性操作

{% ifversion fpt %} 如果组织使用 {% data variables.product.prodname_ghe_cloud %}，则可以创建自定义存储库角色。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[管理组织的自定义存储库角色](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
{% elsif ghec or ghes > 3.4 or ghae-issue-6271 %} 可以创建自定义存储库角色。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
{% endif %}

组织所有者可以在访问组织的任何仓库时设置适用于组织所有成员的基本权限。 有关详细信息，请参阅“[为组织设置基本权限](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)”。

组织所有者还可以选择进一步限制对整个组织中某些设置和操作的权限。 有关特定设置的选项的详细信息，请参阅“[管理组织设置](/articles/managing-organization-settings)”。

除了管理组织级设置之外，组织所有者对组织拥有的每个存储库都具有管理员权限。 有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

{% warning %}

警告：当有人向存储库添加部署密钥时，拥有私钥的任何用户都可以读取或写入存储库（具体取决于密钥设置），即使他们后来从组织中删除也是如此。

{% endwarning %}

## 每个角色的权限

{% ifversion fpt %} 下面列出的一些功能仅限于使用 {% data variables.product.prodname_ghe_cloud %} 的组织。 {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

注意：下面的“[安全功能的访问要求](#access-requirements-for-security-features)”中列出了使用安全功能所需的角色。

{% endnote %} {% endif %}

| 仓库操作 | 读取 | 会审 | 写入 | 维护 | 管理员 |
|:---|:---:|:---:|:---:|:---:|:---:|
| 管理[个人](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)、[团队](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)和[外部协作者](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)对存储库的访问 | | | | | ✔️ |
| 从人员或团队的已分配仓库拉取 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 复刻人员或团队的已分配仓库 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 编辑和删除自己的评论 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 打开议题 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 关闭自己打开的议题 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 重新打开自己关闭的议题 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 受理议题 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 从团队已分配仓库的复刻发送拉取请求 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 提交拉取请求审查 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 查看已发布的版本 | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |{% ifversion fpt or ghec %}
| 查看 [GitHub Actions 工作流运行](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |{% endif %}
| 编辑公共仓库中的 Wiki | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| 编辑私有仓库中的 Wiki | | | ✔️ | ✔️ | ✔️ |{% ifversion fpt or ghec %}
| [举报滥用或垃圾内容](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |{% endif %}
| 应用/忽略标签 | | ✔️ | ✔️ | ✔️ | ✔️ |
| 创建、编辑、删除标签 | | | ✔️ | ✔️ | ✔️ |
| 关闭、重新打开和分配所有议题与拉取请求 | | ✔️ | ✔️ | ✔️ | ✔️ |
| [针对拉取请求启用和禁用自动合并](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | ✔️ | ✔️ | ✔️ |
| 应用里程碑 |  | ✔️ | ✔️ | ✔️ | ✔️ |
| 标记[重复问题和拉取请求](/articles/about-duplicate-issues-and-pull-requests)| | ✔️ | ✔️ | ✔️ | ✔️ |
| 请求[拉取请求审查](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | | ✔️ | ✔️ | ✔️ | ✔️ |
| 合并[拉取请求](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | | | ✔️ | ✔️ | ✔️ |
| 推送到（写入）人员或团队的已分配仓库 | | | ✔️ | ✔️ | ✔️ |
| 编辑和删除任何人对提交、拉取请求和议题的评论 | | | ✔️ | ✔️ | ✔️ |
| [隐藏任何人的评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | ✔️ | ✔️ | ✔️ |
| [锁定对话](/communities/moderating-comments-and-conversations/locking-conversations) | | | ✔️ | ✔️ | ✔️ |
| 转移问题（有关详细信息，请参阅“[将问题转移到其他存储库](/articles/transferring-an-issue-to-another-repository)”） |  | | ✔️ | ✔️ | ✔️ |
| [作为存储库的指定代码所有者](/articles/about-code-owners) | | | ✔️ | ✔️ | ✔️ |
| [将拉取请求草稿标记为可供审查](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | ✔️ | ✔️ | ✔️ |
| [将拉取请求转换为草稿](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | ✔️ | ✔️ | ✔️ |
| 提交影响拉取请求可合并性的审查 | | | ✔️ | ✔️ | ✔️ |
| [将建议的更改应用于](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)拉取请求 | | | ✔️ | ✔️ | ✔️ |
| 创建[状态检查](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | | | ✔️ | ✔️ | ✔️ |{% ifversion fpt or ghec %}
| 创建、编辑、运行、重新运行和取消 [GitHub Actions 工作流](/actions/automating-your-workflow-with-github-actions/) | | | ✔️ | ✔️ | ✔️ |{% endif %}
| 创建和编辑发行版 | | | ✔️ | ✔️ | ✔️ |
| 查看发行版草稿 | | | ✔️ | ✔️ | ✔️ |
| 编辑仓库的说明 | | | | ✔️ | ✔️ |{% ifversion fpt or ghae or ghec %}
| [查看和安装包](/packages/publishing-and-managing-packages) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [发布包](/packages/publishing-and-managing-packages/publishing-a-package) | | | ✔️ | ✔️ | ✔️ |
| [删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | ✔️ | {% endif %}
| 管理[主题](/articles/classifying-your-repository-with-topics) | | | | ✔️ | ✔️ |
| 启用 wiki 和限制 wiki 编辑器 | | | | ✔️ | ✔️ |
| 启用项目板 | | | | ✔️ | ✔️ |
| 配置[拉取请求合并](/articles/configuring-pull-request-merges) | | | | ✔️ | ✔️ |
| [为 {% data variables.product.prodname_pages %} 配置发布源](/articles/configuring-a-publishing-source-for-github-pages) | | | | ✔️ | ✔️ |
| [管理分支保护规则](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | ✔️ |
| [推送到受保护的分支](/articles/about-protected-branches) | | | | ✔️ | ✔️ |
| 合并受保护分支上的拉取请求（即使没有批准审查） | | | | | ✔️ |{% ifversion fpt or ghes > 3.4 or ghae-issue-6337 or ghec %}
| 创建与[标记保护规则](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)匹配的标记 | | | | ✔️ | ✔️ |
| 删除与[标记保护规则](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)匹配的标记 | | | | | ✔️ |{% endif %}
| [创建和编辑存储库社交卡](/articles/customizing-your-repositorys-social-media-preview) | | | | ✔️ | ✔️ |{% ifversion fpt or ghec %}
| 限制[存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | ✔️ | ✔️ |{% endif %}
| 删除问题（请参阅“[删除问题](/articles/deleting-an-issue)”） | | | | | ✔️ |
| [定义存储库的代码所有者](/articles/about-code-owners) | | | | | ✔️ |
| 将存储库添加到团队（有关详细信息，请参阅“[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)”） | | | | | ✔️ |
| [管理外部协作者对存储库的访问](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | ✔️ |
| [更改存储库的可见性](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | ✔️ |
| 将存储库设为模板（请参阅“[创建模板存储库](/articles/creating-a-template-repository)”） | | | | | ✔️ |
| 更改仓库设置 | | | | | ✔️ |
| 管理团队和协作者对仓库的权限 | | | | | ✔️ |
| 编辑仓库的默认分支 | | | | | ✔️ |
| 重命名存储库的默认分支（请参阅“[重命名分支](/github/administering-a-repository/renaming-a-branch)”） | | | | | ✔️ |
| 重命名存储库默认分支以外的其他分支（请参阅“[重命名分支](/github/administering-a-repository/renaming-a-branch)”） | | | ✔️ | ✔️ | ✔️ |
| 管理 web 挂钩和部署密钥 | | | | | ✔️ |{% ifversion fpt or ghec %}
| [管理专用存储库的数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | ✔️ |{% endif %}
| [管理存储库的分支创建策略](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | ✔️ |
| [将存储库转移到组织中](/articles/restricting-repository-creation-in-your-organization) | | | | | ✔️ |
| [从组织中删除或转移存储库](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | ✔️ |
| [存档存储库](/articles/about-archiving-repositories) | | | | | ✔️ |{% ifversion fpt or ghec %}
| 显示赞助按钮（请参阅“[在存储库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”） | | | | | ✔️ |{% endif %}
| 创建对外部资源的自动链接引用，例如 Jira 或 Zendesk（请参阅“[配置自动链接以引用外部资源](/articles/configuring-autolinks-to-reference-external-resources)”） | | | | | ✔️ |{% ifversion discussions %}
| 在存储库中[启用 {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) | | | | ✔️ | ✔️ |
| 为 {% data variables.product.prodname_discussions %} [创建和编辑类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) | | | | ✔️ | ✔️ |
| [将讨论移至其他类别](/discussions/managing-discussions-for-your-community/managing-discussions) | | | ✔️ | ✔️ | ✔️ |
| [将讨论转移](/discussions/managing-discussions-for-your-community/managing-discussions)到新的存储库| | | ✔️ | ✔️ | ✔️ |
| [管理置顶的讨论](/discussions/managing-discussions-for-your-community/managing-discussions) | | | ✔️ | ✔️ | ✔️ |
| [将问题批量转化为讨论](/discussions/managing-discussions-for-your-community/managing-discussions) | | | ✔️ | ✔️ | ✔️ |
| [锁定和解锁讨论](/discussions/managing-discussions-for-your-community/moderating-discussions) | | ✔️ | ✔️ | ✔️ | ✔️ |
| [单独将问题转化为讨论](/discussions/managing-discussions-for-your-community/moderating-discussions) | | ✔️ | ✔️ | ✔️ | ✔️ |
| [创建新讨论并对现有讨论发表评论](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [删除讨论](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | ✔️ | | ✔️ | ✔️ |{% endif %}{% ifversion fpt or ghec %}
| 创建[代码空间](/codespaces/about-codespaces) | | | ✔️ | ✔️ | ✔️ |{% endif %}

### 安全功能的访问要求

在本节中，您可以找到一些安全功能所需的访问权限，例如 {% data variables.product.prodname_advanced_security %} 功能。

| 仓库操作 | 读取 | 会审 | 写入 | 维护 | 管理员 |
|:---|:---:|:---:|:---:|:---:|:---:| 
| 接收存储库中[不安全的依赖项的 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) | | | | | ✔️ |
| [忽略 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | ✔️ |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [指定其他人员或团队接收安全警报](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | ✔️ |{% endif %}{% ifversion fpt or ghec %}
| 创建[安全通告](/code-security/security-advisories/about-github-security-advisories) | | | | | ✔️ |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| 管理对 {% data variables.product.prodname_GH_advanced_security %} 功能的访问（请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”） | | | | | ✔️ |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| 为专用存储库[启用依赖项关系图](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) | | | | | ✔️ |{% endif %}{% ifversion ghes or ghae or ghec %}
| [查看依赖项审查](/code-security/supply-chain-security/about-dependency-review) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |{% endif %}
| [查看拉取请求上的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| [列出、忽略和删除 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | ✔️ | ✔️ | ✔️ |
| [查看存储库中的 {% data variables.product.prodname_secret_scanning %} 警报](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | ✔️{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | ✔️{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | ✔️ |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [解决、撤销或重新打开 {% data variables.product.prodname_secret_scanning %} 警报](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | ✔️{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | ✔️{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | ✔️ |{% endif %}{% ifversion ghes or ghae or ghec %}
| [指定其他人员或团队接收存储库中的 {% data variables.product.prodname_secret_scanning %} 警报](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | ✔️ |{% endif %}

[1] 仓库作者和维护者只能看到他们自己提交的警报信息。

## 延伸阅读

- [管理对组织存储库的访问](/articles/managing-access-to-your-organization-s-repositories)
- [将外部协作者添加到组织中的存储库](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [组织的项目板权限](/articles/project-board-permissions-for-an-organization)
