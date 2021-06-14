---
title: 请求拉取请求审查
intro: 创建拉取请求后，您可以请求特定人员审查您提议的更改。 如果您是组织成员，还可以请求特定团队审查您的更改。
redirect_from:
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
用户帐户拥有的仓库的所有者和协作者可以分配拉取请求审查。 拥有仓库查验漏洞权限的组织成员可以分配拉取请求审查。

所有者或协作者可以将拉取请求审核分配给被明确授予用户拥有仓库[读取权限](/articles/access-permissions-on-github)的任何人。 组织成员也可将拉取请求审查分配给拥有仓库读取权限的任何个人或团队。 被请求的审查者或团队将收到您请求他们审查拉取请求的通知。 {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}如果您请求团队审查，并且启用了代码审查分配，则会向特定成员发出申请，并且取消团队作为审查者。 更多信息请参阅“[管理团队的代码审查分配](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)”。{% endif %}

{% note %}

**注：**拉取请求作者无法请求审查，除非他们是具有仓库写入权限的仓库所有者或协作者。

{% endnote %}

您可以向建议的或特定的人员请求审查。 建议的审查者基于 [git 追溯数据](/articles/tracking-changes-in-a-file/)。 如果您请求审查，则具有仓库读取权限的其他人仍可审查您的拉取请求。 在有人审查您的拉取请求后您做了必要的更改，您可以重新请求同一审查者再次审查。 如果请求的审查者未提交审查，并且拉取请求满足仓库的[可合并性要求](/articles/defining-the-mergeability-of-pull-requests)，则您仍然可以合并该拉取请求。

{% data reusables.repositories.sidebar-pr %}
2. 在拉取请求列表中，单击您想要请求特定人员或团队审查的拉取请求。
3. 导航到右侧边栏中的 **Reviewers（审查者）**。
4. 要向建议的人员请求审查，在 **Reviewers（审查者）**下其用户名旁边，单击 **Request（请求）**。 ![右侧边栏中的审查者请求图标](/assets/images/help/pull_requests/request-suggested-review.png)
5. （可选）要向建议人员以外的其他人请求审查，请单击 **Reviewers（审查者）**，然后单击下拉列表中的姓名。 ![右侧边栏中的审查者齿轮图标](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. （可选）如果您知道想要其审查的人员或团队的名称，请单击 **Reviewers（审查者）**，然后输入您请求审查更改的人员用户名或团队名称。 单击其团队名称或用户名以请求审查。 ![用于输入审查者用户名的字段和带审查者姓名的下拉菜单](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. 审查您的拉取请求并且您已进行必要的更改后，可以请求审查者重新审查您的拉取请求。 导航到右侧边栏中的 **Reviewers（审查者）**，然后单击您想要其审查的审查者姓名旁边的 {% octicon "sync" aria-label="The sync icon" %}。 ![重新审查右侧边栏中的同步图标](/assets/images/help/pull_requests/request-re-review.png)

### 延伸阅读

- “[关于拉取请求审查](/articles/about-pull-request-reviews)”
