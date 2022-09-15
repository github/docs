---
title: 管理分支保护规则
intro: 可创建分支保护规则，为一个或多个分支强制实施某些工作流，例如要求进行审批评审或通过状态检查来确保所有拉取请求都已合并到受保护的分支的。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
ms.openlocfilehash: aed3ab7599d8c74c16d95e4667e94aa3264c9491
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614173'
---
## 关于分支保护规则

{% data reusables.repositories.branch-rules-example %}

可以使用通配符语法 `*` 为存储库中所有当前和未来的分支创建规则。 由于 {% data variables.product.company_short %} 对 `File.fnmatch` 语法使用 `File::FNM_PATHNAME` 标志，因此通配符与目录分隔符 (`/`) 不匹配。 例如，`qa/*` 将匹配所有以 `qa/` 开头并包含单个斜杠的分支。 可以用 `qa/**/*` 包含多个斜杠，也可以用 `qa**/**/*` 扩展 `qa` 字符串，以使规则更具包容性。 有关分支规则语法选项的详细信息，请参阅 [fnmatch 文档](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)。

如果仓库有多个影响相同分支的受保护分支规则，则包含特定分支名称的规则具有最高优先级。 如果有多个受保护分支规则引用相同的特定规则名称，则最先创建的分支规则优先级更高。

提及特殊字符的受保护分支规则，如 `*`、`?` 或 `]`，将按其创建的顺序应用，因此含有这些字符的规则创建时间越早，优先级越高。

要创建对现有分支规则的例外，您可以创建优先级更高的新分支保护规则，例如针对特定分支名称的分支规则。

有关每个可用分支保护设置的详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches)”。

## 创建分支保护规则

创建分支规则时，指定的分支不必是仓库中现有的分支。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %} {% data reusables.repositories.add-branch-protection-rules %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. （可选）启用所需的拉取请求。
   - 在“保护匹配分支”下，选择“合并前需要拉取请求”。
     ![拉取请求审阅限制复选框](/assets/images/help/repository/PR-reviews-required-updated.png)
   - （可选）若需要在合并拉取请求之前审批，选择“需要审批”，单击“合并前所需的审批数”下拉菜单，然后选择希望分支上要求的审批审阅数 。
     ![用于选择必需审阅审批数量的下拉菜单](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. （可选）启用必需拉取请求审查。
   - 在“保护匹配分支”下，选择“合并前需要拉取请求审阅”。
     ![拉取请求审阅限制复选框](/assets/images/help/repository/PR-reviews-required.png)
   - 单击“必需的审批审阅”下拉菜单，然后选择分支上要求的审批审阅数。 
     ![用于选择必需审阅审批数量的下拉菜单](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - （可选）若要在将代码修改提交推送到分支时关闭拉取请求审批审阅，选择“推送新提交时关闭旧拉取请求审批”。
     ![“推送新提交时关闭旧拉取请求审批”复选框](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - （可选）若要在拉取请求影响具有指定所有者的代码时要求代码所有者审阅，请选择“要求代码所有者审阅”。 有关详细信息，请参阅“[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)”。
     ![要求代码所有者审阅](/assets/images/help/repository/PR-review-required-code-owner.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - （可选）若要让特定参与者在需要时将代码推送到分支而不创建拉取请求，选择“允许指定参与者绕过所需的拉取请求”。 然后，搜索并选择应被允许跳过创建拉取请求的参与者。
     ![“允许特定参与者绕过拉取请求要求”复选框]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - （可选）如果存储库是组织的一部分，选择“限制可以关闭拉取请求审阅的人员”。 然后，搜索并选择有权忽略拉取请求审查的参与者。 有关详细信息，请参阅“[关闭拉取请求审阅](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”。
     ![“限制可以关闭拉取请求审查的人员”复选框]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
1. （可选）启用必需状态检查。 有关详细信息，请参阅“[关于状态检查](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”。
   - 选择“合并前需要通过状态检查”。
     ![必需状态检查选项](/assets/images/help/repository/required-status-checks.png)
   - （可选）若要确保使用受保护分支上的最新代码测试拉取请求，选择“要求分支在合并前保持最新”。
     ![宽松或严格的必需状态复选框](/assets/images/help/repository/protecting-branch-loose-status.png)
   - 搜索状态检查，选择您想要求的检查。
     ![可用状态检查的搜索界面，以及所需检查的列表](/assets/images/help/repository/required-statuses-list.png)
1. （可选）选择“合并前需要对话解决”。
  ![“合并前需要对话解决”选项](/assets/images/help/repository/require-conversation-resolution.png)
1. （可选）选择“需要签名提交”。
  ![需要签名提交选项](/assets/images/help/repository/require-signed-commits.png)
1. （可选）选择“需要线性历史记录”。
  ![需要线性历史记录选项](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. （可选）若要使用合并队列合并拉取请求，选择“需要合并队列”。 {% data reusables.pull_requests.merge-queue-references %} ![需要合并队列选项](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **提示：** 拉取请求合并队列功能目前为有限的公开 beta 版本，可能会发生更改。 组织所有者可以通过加入[候补名单](https://github.com/features/merge-queue/signup)来申请提前访问 beta 版。

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. （可选）若要选择在合并之前必须将更改成功部署到哪些环境，选择“需要在合并之前部署成功”，然后选择环境。
   ![需要成功部署选项](/assets/images/help/repository/require-successful-deployment.png) {%- endif %}
1. （可选）选择“{% ifversion bypass-branch-protections %}不允许绕过上述设置”。
![“不允许绕过上述设置”复选框](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %}**会将上述规则应用于管理员**。
![“将上述规则应用于管理员”复选框](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. （可选）{% ifversion fpt or ghec %}如果你的存储库为使用 {% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %} 的组织所有，{% endif %}请启用分支限制。
   - 选择“限制可推送到匹配分支的人员”。
     ![“分支限制”复选框](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - （可选）若要限制匹配分支的创建，请选择“限制创建匹配分支的推送”。
     ![“分支创建限制”复选框](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - 搜索并选择有权限推送到受保护分支或创建匹配分支的人员、团队或应用。
     ![分支限制搜索]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. （可选）在“适用于包括管理员在内的所有人的规则”下，选择“允许强制推送”。
  ![允许强制推送选项](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %} 然后，选择可以强制推送到分支的人员。
    - 选择“所有人”，允许至少具有存储库写入权限的人强制推送到分支，包括具有管理员权限的人员。
    - 选择“指定可以强制推送的人员”，仅允许特定参与者强制推送到分支。 然后，搜索并选择这些参与者。
      ![用于指定可以强制推送的人员的选项的屏幕截图]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    有关强制推送的详细信息，请参阅“[允许强制推送](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)”。
1. （可选）选择“允许删除”。
  ![允许分支删除选项](/assets/images/help/repository/allow-branch-deletions.png)
1. 单击“创建”。

## 编辑分支保护规则

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. 在要编辑的分支保护规则的右侧，单击“编辑”。
  ![“编辑”按钮](/assets/images/help/repository/edit-branch-protection-rule.png)
1. 对分支保护规则进行所需的更改。
1. 单击“保存更改”。 
  ![“保存更改”按钮](/assets/images/help/repository/save-branch-protection-rule.png)

## 删除分支保护规则

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. 在要删除的分支保护规则的右侧，单击“删除”。
    ![“删除”按钮](/assets/images/help/repository/delete-branch-protection-rule.png)
