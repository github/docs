---
title: GitHub 帐户的类型
intro: '您的用户帐户是您在 {% data variables.product.product_location %} 中的身份。 Your user account can be a member of any number of organizations.{% if currentVersion == "free-pro-team@latest" %} Organizations can belong to enterprise accounts.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
For a full list of features for each
{% data variables.product.product_name %} product, see "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products)."
{% endif %}

### 个人用户帐户

使用 {% data variables.product.product_location %} 的每个人都有其自己的用户帐户，其中包括：

{% if currentVersion == "free-pro-team@latest" %}

- 使用 {% data variables.product.prodname_free_user %} 的无限公共和私有仓库
- 使用 {% data variables.product.prodname_free_user %} 的无限协作者
- 使用 {% data variables.product.prodname_pro %} 的私有仓库的其他功能
- [邀请仓库协作者](/articles/inviting-collaborators-to-a-personal-repository)的功能

{% else %}

- 无限仓库和[协作者](/articles/permission-levels-for-a-user-account-repository)
- [添加无限仓库协作者](/articles/inviting-collaborators-to-a-personal-repository)的功能

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**提示**：

- 您可以将一个帐户用于多种用途，例如个人用途和业务用途。 我们不建议创建多个帐户。 更多信息请参阅“[合并多个用户帐户](/articles/merging-multiple-user-accounts)”。
- 用户帐户适用于人类，但必要时可将其提供给机器人，例如持续集成自动程序。

{% endtip %}

{% else %}

{% tip %}

**提示**：用户帐户适用于人类，但必要时可将其提供给机器人，例如持续集成自动程序。

{% endtip %}

{% endif %}

### 组织帐户

组织是共享帐户，供多个项目的人员同时协作之用。 所有者和管理员可通过复杂的安全和管理功能管理成员对组织数据和项目的访问。

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}

### 企业帐户

通过企业帐户，您可以集中管理多个 {% data variables.product.prodname_dotcom_the_website %} 组织的策略和帐单。 {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### 延伸阅读

{% if currentVersion == "free-pro-team@latest" %}- "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account)"
- “[{% data variables.product.prodname_dotcom %} 的产品](/articles/githubs-products)”{% endif %}
- “[创建新组织帐户](/articles/creating-a-new-organization-account)”
