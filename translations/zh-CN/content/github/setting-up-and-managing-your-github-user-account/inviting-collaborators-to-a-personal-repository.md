---
title: 邀请协作者参加个人仓库
intro: '您可以{% if currentVersion == "free-pro-team@latest" %}邀请用户成为{% else %}添加用户成为{% endif %}个人仓库的协作者。'
redirect_from:
  - /articles/how-do-i-add-a-collaborator/
  - /articles/adding-collaborators-to-a-personal-repository/
  - /articles/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 帐户
  - 仓库
---

组织拥有的仓库可授予更细致的访问权限。 更多信息请参阅“[{% data variables.product.product_name %} 上的访问权限](/articles/access-permissions-on-github)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.org-invite-expiration %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**注：** {% data variables.product.company_short %} 会限制在 24 小时内可受邀参加仓库的人数。 如果您超过此限制，请等待 24 小时后再邀请，或者创建一个组织以与更多的人协作。

{% endnote %}

{% endif %}

1. 询问您要邀请成为合作者的人员的用户名。

{% if currentVersion == "free-pro-team@latest" %} 如果他们还没有用户名，他们可以注册 {% data variables.product.prodname_dotcom %} 更多信息请参阅“[注册新 {% data variables.product.prodname_dotcom %} 帐户](/articles/signing-up-for-a-new-github-account)”。{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
1. 单击 **Invite a collaborator（邀请协作者）**。 !["邀请协作者" 按钮](/assets/images/help/repository/invite-a-collaborator-button.png)
2. 在搜索字段中，开始键入您想邀请的人员的姓名，然后单击匹配列表中的姓名。 ![搜索字段以键入要邀请加入仓库的人员姓名](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. 单击 **Add NAME to REPOSITORY（添加姓名到仓库）**。 ![用于添加协作者的按钮](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. 在左侧边栏中，单击 **Collaborators（协作者）**。 ![突出显示协作者的仓库设置侧边栏](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. 在 "Collaborators"（协作者）下，开始输入协作者的用户名。
7. 从下拉菜单中选择协作者的用户名。 ![协作者列表下拉菜单](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. 单击 **Add collaborator（添加协作者）**。 ![添加按钮](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
9. 用户将会收到一封邀请他们参加仓库的电子邮件。 在接受邀请后，他们便对仓库具有协作者访问权限。
{% endif %}

### 延伸阅读

- “[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account)”
- "[从个人仓库删除协作者](/articles/removing-a-collaborator-from-a-personal-repository)"
- "[从协作者的仓库删除您自己](/articles/removing-yourself-from-a-collaborator-s-repository)"
- "[将成员组织成团队](/articles/organizing-members-into-teams)"
