---
title: 企业帐户的角色
intro: 要控制对企业帐户的设置和数据的访问权限，您可以为企业帐户中的人员提供不同的角色。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

有关将人员添加到企业帐户的更多信息，请参阅“[邀请人员管理企业帐户](/articles/inviting-people-to-manage-your-enterprise-account)”。

### 关于企业帐户的角色

企业帐户附带一组管理员角色，您可以将这些角色分配给企业用户。 每个管理员角色都映射到业务职能，并提供在企业帐户中执行特定任务的权限。

{% data reusables.enterprise-accounts.enterprise-administrators %}

### 企业所有者

企业所有者可以完全控制企业帐户，并可以采取所有操作，包括：
- 管理管理员
- 在企业中添加和删除组织
- 管理企业设置
- 在组织范围内强制实施政策
- 管理计费设置

企业所有者无法访问组织设置或内容，除非将其设为组织所有者或授予直接访问组织所拥有仓库的权限。 类似地，除非您将其设为企业所有者，否则企业帐户中的组织所有者无权访问企业帐户。

您可以根据需要向企业帐户添加任意数量的企业所有者。 企业所有者必须在 {% data variables.product.prodname_dotcom %} 上拥有个人帐户。 作为最佳做法，我们建议您在公司企业所有者中仅设置少量人员，以降低您的业务风险。

### 企业成员

您的企业帐户所拥有组织的成员也会自动成为企业帐户的成员。 成员可以在组织中进行协作，也可以是组织所有者，但成员无法访问或配置企业帐户设置，包括计费设置。

企业帐户中的人员可能对您的企业帐户拥有的各种组织以及这些组织中的仓库具有不同级别的访问权限。 您可以查看每个人具有访问权限的资源。 更多信息请参阅“[查看企业帐户中的人员](/articles/viewing-people-in-your-enterprise-account)”。

有关组织级权限的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。

对组织所拥有仓库具有外部协作者访问权限的人员也会在组织帐户的 People（人员）选项卡中列出，但他们不是企业成员，也没有企业帐户的任何访问权限。 有关外部协作者的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization#outside-collaborators)”。

### 帐单管理员

帐单管理员只能访问企业帐户的帐单设置。 企业帐户的帐单管理员可以：
- 查看和管理用户许可证、{% data variables.large_files.product_name_short %} 包以及其他计费设置
- 查看帐单管理员列表
- 添加或删除其他帐单管理员

帐单管理员无权访问企业帐户中的组织或仓库，也无法添加或删除企业所有者。 帐单管理员必须在 {% data variables.product.prodname_dotcom %} 上拥有个人帐户。

### 延伸阅读

- “[关于企业帐户](/articles/about-enterprise-accounts)”
