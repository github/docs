---
title: 用户帐户仓库的权限级别
intro: '用户帐户拥有的仓库有两种权限级别：*仓库所有者*和*协作者*。'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**提示：**如果需要对用户帐户拥有的仓库实施更细致的读/写权限，请考虑将仓库转让给组织。 更多信息请参阅“[转让仓库](/articles/transferring-a-repository)”。

{% endtip %}

#### 所有者对用户帐户拥有的仓库的访问权限

仓库所有者对仓库具有完全控制权。 除了仓库协作者的所有权限之外，仓库所有者还可以：

- {% if currentVersion == "free-pro-team@latest" %}[Invite collaborators](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Add collaborators](/articles/inviting-collaborators-to-a-personal-repository){% endif %}
- Change the visibility of the repository (from [public to private](/articles/making-a-public-repository-private), or from [private to public](/articles/making-a-private-repository-public)){% if currentVersion == "free-pro-team@latest" %}
- [限制与仓库的交互](/articles/limiting-interactions-with-your-repository){% endif %}
- 合并受保护分支上的拉取请求（即使没有批准审查）
- [删除仓库](/articles/deleting-a-repository)
- [Manage a repository's topics](/articles/classifying-your-repository-with-topics){% if currentVersion == "free-pro-team@latest" %}
- 管理安全和分析设置。 For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [Enable the dependency graph](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository) for a private repository{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- 删除包。 更多信息请参阅“[删除包](/github/managing-packages-with-github-packages/deleting-a-package)”。{% endif %}
- 创建和编辑仓库社交卡。 更多信息请参阅“[自定义仓库的社交媒体审查](/articles/customizing-your-repositorys-social-media-preview)”。
- 将仓库设为模板。 更多信息请参阅“[创建模板仓库](/articles/creating-a-template-repository)”。
- Receive [{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in a repository.{% if currentVersion == "free-pro-team@latest" %}
- 忽略仓库中的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)”。
- [管理私有仓库的数据使用](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository){% endif %}
- [定义仓库的代码所有者](/articles/about-code-owners)
- [Archive repositories](/articles/about-archiving-repositories){% if currentVersion == "free-pro-team@latest" %}
- 创建安全通告。 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
- 显示赞助按钮。 更多信息请参阅“[在仓库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”。{% endif %}

用户帐户拥有的仓库只有**一个所有者**，此权限无法与其他用户帐户共享。 要将仓库的所有权转让给其他用户，请参阅“[如何转让仓库](/articles/how-to-transfer-a-repository)”。

#### 协作者对用户帐户拥有的仓库的访问权限

{% note %}

**注：**在私有仓库中，仓库所有者只能为协作者授予写入权限。 协作者不能对用户帐户拥有的仓库具有只读权限。

{% endnote %}

个人仓库的协作者可以：

- 推送（写入）、拉取（读取）和复刻（复制）仓库
- 创建、应用和删除标签及里程碑
- 打开、关闭、重新打开和分配议题
- 编辑和删除对提交、拉取请求和议题的评论
- 将议题或拉取请求标记为重复。 更多信息请参阅“[关于重复的议题和拉取请求](/articles/about-duplicate-issues-and-pull-requests)”。
- 打开、合并和关闭拉取请求
- 对拉取请求应用提议的更改。 更多信息请参阅“[合并拉取请求中的反馈](/articles/incorporating-feedback-in-your-pull-request)”。
- Send pull requests from forks of the repository{% if currentVersion == "free-pro-team@latest" %}
- 发布、查看和安装包。 更多信息请参阅“[发布和管理包](/github/managing-packages-with-github-packages/publishing-and-managing-packages)”。{% endif %}
- 创建和编辑 Wiki
- 创建和编辑发行版. 更多信息请参阅“[管理仓库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository)”。
- 作为仓库协作者删除自己
- 提交会影响其合并性的拉取请求审查
- 作为仓库的指定代码所有者。 更多信息请参阅“[关于代码所有者](/articles/about-code-owners)”。
- 锁定对话。 For more information, see "[Locking conversations](/articles/locking-conversations)."{% if currentVersion == "free-pro-team@latest" %}
- 向 {% data variables.contact.contact_support %} 报告滥用的内容。 更多信息请参阅“[报告滥用或垃圾邮件](/articles/reporting-abuse-or-spam)”。{% endif %}
- 将议题转让给不同的仓库 更多信息请参阅“[将议题传输到其他仓库](/articles/transferring-an-issue-to-another-repository)”。

### 延伸阅读

- "[邀请个人仓库的协作者](/articles/inviting-collaborators-to-a-personal-repository)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
