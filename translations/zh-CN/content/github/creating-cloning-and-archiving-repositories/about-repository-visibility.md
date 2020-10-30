---
title: 关于仓库可见性
intro: '您可以通过选择仓库的可见性来限制谁有权访问仓库：{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}公共、内部或私有{% else %} 公共或私有{% endif %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于仓库可见性

创建仓库时，您可以选择将仓库设为公共或私有仓库。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}如果您在一个{% if currentVersion == "free-pro-team@latest" %}由企业帐户拥有的{% endif %}组织中创建仓库，您还可以选择将仓库设为内部仓库。{% endif %}

{% if currentVersion != "free-pro-team@latest" %}如果 {% data variables.product.product_location_enterprise %} 未处于私有模式或位于防火墙后，则{% else %}{% endif %}公共仓库将对互联网上的所有人开放。{% if currentVersion != "free-pro-team@latest" %}否则，公共仓库将对所有 {% data variables.product.product_location_enterprise %} 用户开放，包括外部协作者。{% endif %}私有仓库仅供您、您明确与之共享访问权限的人访问，组织仓库则[供组织成员](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)访问。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}内部仓库可供{% if currentVersion == "free-pro-team@latest" %}企业帐户的成员{% else %}实例上任何组织的成员{% endif %}访问。 更多信息请参阅“[关于内部仓库](#about-internal-repositories)”。{% endif %}

组织所有者始终有权访问其组织中创建的每个仓库。 更多信息请参阅“[组织的仓库权限级别](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)”。

拥有仓库管理员权限的人可更改现有仓库的可见性。 更多信息请参阅“[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### 关于内部仓库

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} 有关内部资源的更多信息，请参阅 {% data variables.product.prodname_dotcom %} 的白皮书“[内部资源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

所有{% if currentVersion == "free-pro-team@latest" %}企业成员{% else %}组织成员{% endif %}都拥有对内部仓库的读取权限，但内部仓库对{% if currentVersion == "free-pro-team@latest" %}企业帐户外部{% else %}非组织成员{% endif %}的人员不可见，包括组织仓库的外部协作者。 更多信息请参阅{% if currentVersion == "free-pro-team@latest" %}“[企业帐户的角色](/articles/roles-for-an-enterprise-account#enterprise-members)”和{% endif %}“[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)”。

{% data reusables.repositories.internal-repo-default %}
如果用户从

{% if currentVersion == "free-pro-team@latest" %}企业帐户{% else %}实例上的所有组织 {% endif %}中被删除，则该用户对内部仓库的复刻将被自动删除。
{% endif %}
