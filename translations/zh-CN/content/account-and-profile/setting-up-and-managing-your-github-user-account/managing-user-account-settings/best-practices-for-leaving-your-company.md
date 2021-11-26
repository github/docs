---
title: 关于离开公司的最佳实践
intro: 换工作是不可回避的生活现实。 如果您的 GitHub 用户帐户同时用于个人*和*工作用途，那么您在离开公司或组织的时候需要注意一些问题。
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: 离开您的公司
---

在离开公司之前，请确保在用户帐户中更新以下信息：

- 通过[在电子邮件设置中删除公司电子邮件地址](/articles/changing-your-primary-email-address)来取消其验证。 然后，您可以在不验证的情况下重新添加它，以保留与您的帐户相关联的所有相关提交。
- [将您的主电子邮件地址](/articles/changing-your-primary-email-address)从公司电子邮件地址更改为个人电子邮件地址。
{% ifversion fpt or ghec %}
- [验证新的主电子邮件地址](/articles/verifying-your-email-address)。
{% endif %}
- [更改您的 GitHub 用户名](/articles/changing-your-github-username)以删除对公司或组织的任何引用（如有必要）。

## 离开组织

如果您在使用属于组织的仓库，则应[删除自己的组织成员身份](/articles/removing-yourself-from-an-organization)。 请注意，如果您是组织所有者，应先将[组织的所有权转让](/articles/transferring-organization-ownership)给其他人。

## 删除与个人仓库的职业关联

如果您在属于其他人个人用户帐户的仓库中与他们进行了职业协作，则应从这些仓库中[删除自己的协作者身份](/articles/removing-yourself-from-a-collaborator-s-repository)。

- [停止关注与工作相关的仓库](https://github.com/watching)。 您不再需要这些通知了！
- [转让您拥有的仓库](/articles/how-to-transfer-a-repository)，在您离开后，其他人可能需要继续使用该仓库处理工作。
- [删除与您的工作相关且属于您的复刻](/articles/deleting-a-repository)。 不用担心，删除复刻不会删除上游仓库。
- 删除您的计算机上可能存在的复刻本地副本：

```shell
$ rm -rf <em>work_directory</em>
```
