---
title: 企业中的角色
intro: '企业中的每个人都是企业的成员。 要控制对企业的设置和数据的访问权限，您可以为企业成员分配不同的角色。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 企业
---

### 关于企业中的角色

企业中的每个人都是企业的成员。 您还可以为企业成员分配管理角色。 每个管理员角色都映射到业务职能，并提供在企业中执行特定任务的权限。

{% data reusables.enterprise-accounts.enterprise-administrators %}

有关将人员添加到企业的更多信息，请参阅“{% if currentVersion == "free-pro-team@latest" %}[邀请人员管理企业](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise){% else %}[身份验证](/admin/authentication){% endif %}”。

### 企业所有者

企业所有者可以完全控制企业，并可以采取所有操作，包括：
- 管理管理员
- {% if currentVersion == "free-pro-team@latest" %}添加和删除{% elsif currentVersion == "github-ae@latest" %}管理{% endif %}{% elsif currentVersion == "github-ae@latest" %}{% endif %}企业中的组织{% if currentVersion == "free-pro-team@latest" %}。
- 管理企业设置
- 在组织范围内强制实施政策
{% if currentVersion == "free-pro-team@latest" %}- 管理帐单设置{% endif %}

企业所有者无法访问组织设置或内容，除非将其设为组织所有者或授予直接访问组织所拥有仓库的权限。 同样，除非您将其设为企业所有者，否则企业中的组织所有者无权访问企业。

企业所有者仅在他们是企业中至少一个组织的所有者或成员时才可使用许可证。 {% if currentVersion == "free-pro-team@latest" %}企业所有者必须在 {% data variables.product.prodname_dotcom %} 上拥有个人帐户。{% endif %} 作为最佳实践，我们建议只将少数人设为公司的企业所有者，以降低业务风险。

### 企业成员

您的企业所拥有组织的成员也会自动成为企业的成员。 成员可以在组织中进行协作，也可以是组织所有者，但成员无法访问或配置企业设置{% if currentVersion == "free-pro-team@latest" %}，包括计费设置{% endif %}。

企业中的人员可能对您的企业拥有的各种组织以及这些组织中的仓库具有不同级别的访问权限。 您可以查看每个人具有访问权限的资源。 更多信息请参阅“[查看企业中的人员](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise)”。

有关组织级权限的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。

对组织所拥有仓库具有外部协作者访问权限的人员也会在企业的 People（人员）选项卡中列出，但他们不是企业成员，也没有对企业的任何访问权限。 有关外部协作者的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization#outside-collaborators)”。

{% if currentVersion == "free-pro-team@latest" %}

### 帐单管理员

帐单管理员只能访问企业的帐单设置。 企业的帐单管理员可以：
- 查看和管理用户许可证、{% data variables.large_files.product_name_short %} 包以及其他计费设置
- 查看帐单管理员列表
- 添加或删除其他帐单管理员

帐单管理员仅在他们是企业中至少一个组织的所有者或成员时才可使用许可证。 帐单管理员无权访问企业中的组织或仓库，也无法添加或删除企业所有者。 帐单管理员必须在 {% data variables.product.prodname_dotcom %} 上拥有个人帐户。

### 延伸阅读

- “[关于企业帐户](/articles/about-enterprise-accounts)”

{% endif %}
