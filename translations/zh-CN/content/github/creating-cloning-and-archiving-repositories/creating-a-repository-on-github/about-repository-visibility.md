---
title: 关于仓库可见性
intro: '您可以通过选择仓库的可见性来限制谁有权访问仓库：{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}公共、内部或私有{% elsif currentVersion == "github-ae@latest"  %}私有或内部{% else %} 公共或私有{% endif %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
---

### 关于仓库可见性

{% if currentversion == "github-ae@latest" %}当您创建由您的用户帐户拥有的仓库时，仓库始终是私有的。 创建组织拥有的仓库时，可以选择将仓库设为私有或内部。{% else %}创建仓库时，可以选择使仓库成为公共或私有。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} 如果要在组织中创建{% if currentVersion == "free-pro-team@latest" %} 由企业帐户拥有的仓库{% endif %}，也可以选择将仓库设为内部。{% endif %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
如果 {% data variables.product.product_location %} 不是私人模式或在防火墙后面，所有人都可以在互联网上访问公共仓库。 或者，使用 {% data variables.product.product_location %} 的每个人都可以使用公共仓库，包括外部协作者。 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。 {% if currentversion ver_gt "enterprise-server@2.19" %} 内部仓库可供企业成员访问。 更多信息请参阅“[关于内部仓库](#about-internal-repositories)”。{% endif %}
{% elsif currentVersion == "github-ae@latest" %}
私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。 所有企业成员均可访问内部仓库。 更多信息请参阅“[关于内部仓库](#about-internal-repositories)”。
{% else %}
互联网上的所有人都可以访问公共仓库。 私有仓库仅可供您、您明确与其共享访问权限的人访问，而对于组织仓库，只有某些组织成员可以访问。 企业成员可以访问内部仓库。 更多信息请参阅“[关于内部仓库](#about-internal-repositories)”。
{% endif %}

组织所有者始终有权访问其组织中创建的每个仓库。 更多信息请参阅“[组织的仓库权限级别](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)”。

拥有仓库管理员权限的人可更改现有仓库的可见性。 更多信息请参阅“[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### 关于内部仓库

{% note %}

**注：**{% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} 有关内部资源的更多信息，请参阅 {% data variables.product.prodname_dotcom %} 的白皮书“[内部资源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

所有企业成员对内部仓库具有读取权限，但内部仓库对{% if currentVersion == "free-pro-team@latest" %}企业外部{% else %}非组织成员{% endif %}的人员不可见，包括组织仓库的外部协作者。 更多信息请参阅 {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}“[企业中的角色](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)”和{% endif %}“[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)”。

{% data reusables.repositories.internal-repo-default %}

如果用户从企业拥有的所有组织中删除，该用户的内部仓库复刻也会自动删除。
{% endif %}
