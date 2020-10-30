---
title: 关于仓库可见性
intro: 'You can restrict who has access to a repository by choosing a repository''s visibility: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}public, internal, or private{% else %} public or private{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于仓库可见性

创建仓库时，您可以选择将仓库设为公共或私有仓库。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If you're creating the repository in an organization{% if currentVersion == "free-pro-team@latest" %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}

{% if enterpriseServerVersions contains currentVersion %}If {% data variables.product.product_location_enterprise %} is not in private mode or behind a firewall, p{% else %}P{% endif %}ublic repositories are accessible to everyone on the internet.{% if enterpriseServerVersions contains currentVersion %} Otherwise, public repositories are available to everyone using {% data variables.product.product_location_enterprise %}, including outside collaborators.{% endif %} Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, [certain organization members](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Internal repositories are accessible to members of your enterprise. 更多信息请参阅“[关于内部仓库](#about-internal-repositories)”。{% endif %}

组织所有者始终有权访问其组织中创建的每个仓库。 更多信息请参阅“[组织的仓库权限级别](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)”。

拥有仓库管理员权限的人可更改现有仓库的可见性。 更多信息请参阅“[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### 关于内部仓库

{% note %}

**注：**{% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} 有关内部资源的更多信息，请参阅 {% data variables.product.prodname_dotcom %} 的白皮书“[内部资源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

All {% if currentVersion == "free-pro-team@latest" %}enterprise members{% else %}organization members{% endif %} have read permissions to the internal repository, but internal repositories are not visible to people {% if currentVersion == "free-pro-team@latest" %}outside of the enterprise account{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Roles for an enterprise account](/articles/roles-for-an-enterprise-account#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}
如果用户从

{% if currentVersion == "free-pro-team@latest" %}an enterprise account{% else %}all organizations on the instance{% endif %}, that user's forks of internal repositories are removed automatically.
{% endif %}
