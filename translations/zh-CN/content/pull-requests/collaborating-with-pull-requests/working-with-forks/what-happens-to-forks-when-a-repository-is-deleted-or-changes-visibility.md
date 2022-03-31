---
title: 删除仓库或更改其可见性时，复刻会发生什么变化？
intro: 删除仓库或更改其可见性会影响仓库的复刻。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 删除或更改可见性
---

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## 删除私有仓库

当您删除私有仓库时，其所有私有复刻也将被删除。

{% ifversion fpt or ghes or ghec %}

## 删除公共仓库

当您删除公共仓库时，将选择现有的公共复刻之一作为新的父仓库。 所有其他仓库均从这一新的父仓库复刻，并且后续的拉取请求都转到这一新的父仓库。

{% endif %}

## 私有复刻和权限

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## 将公共仓库更改为私有仓库

如果将公共仓库设为私有，其公共复刻将拆分到新网络中。 与删除公共仓库一样，选择现有的公共分支之一作为新的父仓库，并且所有其他仓库都从这个新的父仓库中复刻。 后续的拉取请求都转到这一新的父仓库。

换句话说，即使将父仓库设为私有后，公共仓库的复刻也将在其各自的仓库网络中保持公开。 这样复刻所有者便可继续工作和协作，而不会中断。 如果公共复刻没有通过这种方式移动到单独的网络中，则这些复刻的所有者将需要获得适当的[访问权限](/articles/access-permissions-on-github)以从（现在私有的）父仓库中拉取更改并提交拉取请求 — 即使它们以前不需要这些权限。

{% ifversion ghes or ghae %}
如果公共仓库启用了匿名 Git 读取权限并且该仓库设为私有，则所有仓库的复刻都将失去匿名 Git 读取权限并恢复为默认的禁用设置。 如果将复刻的仓库设为公共，则仓库管理员可以重新启用 Git 读取权限。 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)。”
{% endif %}

### 删除私有仓库

如果将公共仓库设为私有然后删除，其公共复刻将在单独的网络中继续存在。

## 将私有仓库更改为公共仓库

如果将私有仓库设为公共，则其每个私有复刻都将变为独立的私有仓库并且成为自己新仓库网络的父仓库。 私有复刻绝不会自动设为公共，因为它们可能包含不应公开显示的敏感提交。

### 删除公共仓库

如果将私有仓库设为公共然后删除，其私有复刻将作为单独网络中的独立私有仓库继续存在。

{% endif %}

{% ifversion ghes or ghec or ghae %}

## 更改内部仓库的可见性



如果企业策略允许复刻，则内部仓库的任何复刻都将是私有的。 如果您更改内部仓库的可见性，组织或用户帐户拥有的任何复刻都将保持私有。

### 删除内部仓库

如果您更改了内部仓库的可见性，然后删除仓库，复刻将继续存在于单独的网络中。

{% endif %}

## 延伸阅读

- “[设置仓库可见性](/articles/setting-repository-visibility)”
- "[关于复刻](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[管理仓库的复刻策略](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)"
- "[管理组织的复刻策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)"
- “[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)”
