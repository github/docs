---
title: 删除议题
intro: 拥有仓库管理员权限的人员可从仓库永久性删除议题。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

删除议题的能力取决于存储库是由您的个人帐户还是由组织拥有：
- 唯一可以删除个人帐户拥有的存储库中议题的帐户是该帐户。
- 只有具有管理员或所有者权限的帐户才能删除组织拥有的存储库中的议题。

  要删除组织拥有的存储库中的议题，组织所有者必须为组织的存储库启用删除议题。 更多信息请参阅“[允许人员删除组织中的议题](/articles/allowing-people-to-delete-issues-in-your-organization)”和“[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

删除议题时，协作者不会收到通知。 访问已删除议题的 URL 时，协作者将看到一条消息，指出找不到该网页（但他们可以使用 API 来确定该网页已被删除）。 拥有仓库管理员或所有者权限的人员还将看到删除议题的人员的用户名和删除时间。

1. 导航到要删除的议题。
2. 在右侧栏上的“Notifications（通知）”下方，单击 **Delete issue（删除议题）**。 ![议题页面右侧栏底部高亮显示的"删除议题"文本](/assets/images/help/issues/delete-issue.png)
4. 要确认删除，单击 **Delete this issue（删除此议题）**。

## 延伸阅读

- "[将拉取请求链接到议题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)"
